/**
 * Minimal robots.txt parser + matcher — good-citizen behavior for real HTTP
 * sources. Not a full RFC 9309 implementation, but it honors the essentials:
 * per-User-agent groups, `Disallow`/`Allow`, longest-match-wins precedence, and
 * `*` wildcard + `$` end-anchor in paths.
 *
 * The fixture source never calls this; it's used by HTTP adapters before fetch.
 */

/**
 * @typedef {Object} RobotsRule
 * @property {boolean} allow   true for `Allow`, false for `Disallow`.
 * @property {string} path     The raw path pattern.
 */

/**
 * @typedef {Object} RobotsRules
 * @property {Map<string, RobotsRule[]>} groups  ua (lowercased) -> rules
 */

/**
 * Parse robots.txt text into per-user-agent rule groups.
 * @param {string} text
 * @returns {RobotsRules}
 */
export function parseRobots(text) {
  /** @type {Map<string, RobotsRule[]>} */
  const groups = new Map();
  /** @type {string[]} */
  let currentAgents = [];
  let sawDirectiveForGroup = false;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, '').trim();
    if (!line) continue;
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const field = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (field === 'user-agent') {
      // A new user-agent line after directives starts a fresh group.
      if (sawDirectiveForGroup) {
        currentAgents = [];
        sawDirectiveForGroup = false;
      }
      currentAgents.push(value.toLowerCase());
      if (!groups.has(value.toLowerCase())) groups.set(value.toLowerCase(), []);
    } else if (field === 'disallow' || field === 'allow') {
      sawDirectiveForGroup = true;
      for (const ua of currentAgents) {
        const rules = groups.get(ua) || [];
        rules.push({ allow: field === 'allow', path: value });
        groups.set(ua, rules);
      }
    }
  }
  return { groups };
}

/**
 * Convert a robots path pattern (`*`, `$`) into a RegExp anchored at the start.
 * @param {string} pattern
 * @returns {RegExp}
 */
function patternToRegExp(pattern) {
  let re = '';
  for (const ch of pattern) {
    if (ch === '*') re += '.*';
    else if (ch === '$') re += '$';
    else re += ch.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  }
  return new RegExp('^' + re);
}

/**
 * Decide whether `path` is allowed for `userAgent` under the parsed rules.
 * Empty `Disallow:` means "allow all"; no matching group means allowed.
 * @param {RobotsRules} robots
 * @param {string} userAgent
 * @param {string} path
 * @returns {boolean}
 */
export function isAllowed(robots, userAgent, path) {
  const uaToken = userAgent.toLowerCase();
  // Prefer the most specific UA group that the token starts with, else `*`.
  let chosen = robots.groups.get('*');
  for (const [ua, rules] of robots.groups) {
    if (ua !== '*' && uaToken.includes(ua)) {
      chosen = rules;
      break;
    }
  }
  if (!chosen || chosen.length === 0) return true;

  /** @type {{ allow: boolean, length: number } | undefined} */
  let best;
  for (const rule of chosen) {
    if (rule.path === '') continue; // empty Disallow = allow everything
    if (patternToRegExp(rule.path).test(path)) {
      const length = rule.path.length;
      if (!best || length > best.length) best = { allow: rule.allow, length };
    }
  }
  return best ? best.allow : true;
}
