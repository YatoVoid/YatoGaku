/**
 * Good-citizen HTTP helper for real source adapters.
 *
 * Provides, in one call (`politeFetch`):
 *  - a custom **User-Agent** identifying the bot,
 *  - a configurable **rate-limit** delay between live requests,
 *  - a **raw-response cache** (`./.cache/`) so re-runs don't re-hit the site,
 *  - **robots.txt** checking (`assertAllowed`) before any live fetch.
 *
 * The fixture source bypasses all of this (no network). Real adapters route
 * every request through here so the pipeline stays polite by construction.
 */

import { readCache, writeCache } from './cache.js';
import { parseRobots, isAllowed } from './robots.js';

export const DEFAULT_USER_AGENT =
  'SmartQuizExamBot/1.0 (+https://github.com/VictorAurelius/2026-Smart-Quiz; respects robots.txt; contact via repo issues)';

/**
 * @typedef {Object} FetchOptions
 * @property {number} [delayMs]      Min delay between live (non-cached) requests. Default 1000.
 * @property {string} [userAgent]    Override the bot User-Agent.
 * @property {boolean} [useCache]    Use the raw-response cache. Default true.
 * @property {typeof fetch} [fetchImpl]  Injectable fetch (for tests).
 */

/** @type {number} */
let lastRequestAt = 0;

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Fetch a URL politely: returns cached body when available, otherwise sleeps to
 * honor the rate-limit, sends the bot User-Agent, caches and returns the body.
 *
 * @param {string} url
 * @param {FetchOptions} [opts]
 * @returns {Promise<string>}
 */
export async function politeFetch(url, opts = {}) {
  const { delayMs = 1000, userAgent = DEFAULT_USER_AGENT, useCache = true } = opts;
  const doFetch = opts.fetchImpl || fetch;

  if (useCache) {
    const cached = readCache(url);
    if (cached !== undefined) return cached;
  }

  const wait = lastRequestAt + delayMs - Date.now();
  if (wait > 0) await sleep(wait);
  lastRequestAt = Date.now();

  const res = await doFetch(url, { headers: { 'User-Agent': userAgent, Accept: 'text/html,application/json' } });
  if (!res.ok) throw new Error(`GET ${url} → HTTP ${res.status}`);
  const body = await res.text();
  if (useCache) writeCache(url, body);
  return body;
}

/**
 * Fetch + parse the site's robots.txt for `origin`.
 * @param {string} origin   e.g. "https://example.org"
 * @param {FetchOptions} [opts]
 * @returns {Promise<import('./robots.js').RobotsRules>}
 */
export async function loadRobots(origin, opts = {}) {
  try {
    const text = await politeFetch(`${origin.replace(/\/$/, '')}/robots.txt`, opts);
    return parseRobots(text);
  } catch {
    // No robots.txt (404/network) → conventionally "allow all".
    return parseRobots('');
  }
}

/**
 * Throw if `url` is disallowed by the site's robots.txt for our User-Agent.
 * @param {string} url
 * @param {FetchOptions} [opts]
 * @returns {Promise<void>}
 */
export async function assertAllowed(url, opts = {}) {
  const u = new URL(url);
  const robots = await loadRobots(`${u.protocol}//${u.host}`, opts);
  const ua = opts.userAgent || DEFAULT_USER_AGENT;
  if (!isAllowed(robots, ua, u.pathname + u.search)) {
    throw new Error(`robots.txt disallows fetching ${url} for "${ua}"`);
  }
}
