/**
 * Pure, dependency-free validation for `ExamPaper` data.
 *
 * Imported by BOTH the orchestrator (`fetch-exams.js`, which fails the build on
 * any issue) and the unit tests. No I/O, no throwing — it returns a list of
 * structured issues so callers decide how to report/fail.
 *
 * @typedef {import('../../src/lib/types/exam').ExamPaper} ExamPaper
 * @typedef {import('../../src/lib/types/exam').JlptLevel} JlptLevel
 * @typedef {import('../../src/lib/types/exam').ExamSectionType} ExamSectionType
 */

/** @type {JlptLevel[]} */
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

/** @type {ExamSectionType[]} */
const SECTION_TYPES = ['vocab', 'grammar', 'reading', 'listening'];

/**
 * A single validation problem, located by a JSON-ish `path`.
 * @typedef {Object} ValidationIssue
 * @property {string} paperId  Id of the offending paper (or a placeholder).
 * @property {string} path     e.g. "sections[0].questions[1].answerIndex".
 * @property {string} message  Human-readable explanation.
 */

/**
 * @param {unknown} v
 * @returns {boolean}
 */
function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

/**
 * Validate a single paper. Returns `[]` when the paper is well-formed.
 *
 * Rules enforced (per the pipeline contract):
 *  - non-empty `sections`; each section has ≥1 question
 *  - each question: non-empty `prompt`, ≥2 non-empty `options`,
 *    integer `answerIndex` within `0..options.length-1`
 *  - a question's `passageId` (if set) resolves to a passage in its OWN section,
 *    and only `reading` sections may carry passage-linked questions
 *  - structural sanity: id/level/title/duration/source present; ids unique
 *
 * @param {ExamPaper} paper
 * @returns {ValidationIssue[]}
 */
export function validatePaper(paper) {
  /** @type {ValidationIssue[]} */
  const issues = [];

  if (!paper || typeof paper !== 'object') {
    return [{ paperId: '<invalid>', path: '', message: 'paper is not an object' }];
  }

  const pid = isNonEmptyString(paper.id) ? paper.id : '<unknown>';
  /**
   * @param {string} path
   * @param {string} message
   */
  const add = (path, message) => {
    issues.push({ paperId: pid, path, message });
  };

  if (!isNonEmptyString(paper.id)) add('id', 'missing or empty id');
  if (!LEVELS.includes(paper.level)) add('level', `invalid level: ${String(paper.level)}`);
  if (!isNonEmptyString(paper.title)) add('title', 'missing or empty title');
  if (!(typeof paper.durationMinutes === 'number' && paper.durationMinutes > 0)) {
    add('durationMinutes', 'must be a positive number');
  }
  if (!paper.source || !isNonEmptyString(paper.source.name)) {
    add('source.name', 'missing source name (provenance is required)');
  }

  if (!Array.isArray(paper.sections) || paper.sections.length === 0) {
    add('sections', 'must have at least one section');
    return issues;
  }

  /** @type {Set<string>} */
  const seenQuestionIds = new Set();

  paper.sections.forEach((section, si) => {
    const sPath = `sections[${si}]`;

    if (!SECTION_TYPES.includes(section.type)) {
      add(`${sPath}.type`, `invalid section type: ${String(section.type)}`);
    }
    if (!isNonEmptyString(section.title)) add(`${sPath}.title`, 'missing or empty section title');

    const passages = section.passages || [];
    /** @type {Set<string>} */
    const passageIds = new Set();
    passages.forEach((p, pi) => {
      if (!isNonEmptyString(p.id)) add(`${sPath}.passages[${pi}].id`, 'missing passage id');
      else passageIds.add(p.id);
      if (!isNonEmptyString(p.text)) add(`${sPath}.passages[${pi}].text`, 'empty passage text');
    });

    if (!Array.isArray(section.questions) || section.questions.length === 0) {
      add(`${sPath}.questions`, 'section must have at least one question');
      return;
    }

    section.questions.forEach((q, qi) => {
      const qPath = `${sPath}.questions[${qi}]`;

      if (!isNonEmptyString(q.id)) {
        add(`${qPath}.id`, 'missing question id');
      } else if (seenQuestionIds.has(q.id)) {
        add(`${qPath}.id`, `duplicate question id: ${q.id}`);
      } else {
        seenQuestionIds.add(q.id);
      }

      if (!isNonEmptyString(q.prompt)) add(`${qPath}.prompt`, 'empty prompt');

      if (!Array.isArray(q.options) || q.options.length < 2) {
        add(`${qPath}.options`, `must have at least 2 options (got ${Array.isArray(q.options) ? q.options.length : 'none'})`);
      } else {
        q.options.forEach((opt, oi) => {
          if (!isNonEmptyString(opt)) add(`${qPath}.options[${oi}]`, 'empty option text');
        });
        if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= q.options.length) {
          add(`${qPath}.answerIndex`, `answerIndex ${String(q.answerIndex)} is out of range 0..${q.options.length - 1}`);
        }
      }

      if (q.passageId !== undefined) {
        if (section.type !== 'reading') {
          add(`${qPath}.passageId`, 'passageId is only valid inside a reading section');
        }
        if (!passageIds.has(q.passageId)) {
          add(`${qPath}.passageId`, `passageId "${q.passageId}" does not resolve to a passage in this section`);
        }
      }
    });
  });

  return issues;
}

/**
 * Validate a list of papers (adds cross-paper uniqueness of `id`).
 * @param {ExamPaper[]} papers
 * @returns {ValidationIssue[]}
 */
export function validatePapers(papers) {
  if (!Array.isArray(papers)) {
    return [{ paperId: '<root>', path: '', message: 'papers is not an array' }];
  }
  /** @type {ValidationIssue[]} */
  const issues = [];
  /** @type {Set<string>} */
  const seen = new Set();
  for (const p of papers) {
    if (p && typeof p.id === 'string' && p.id) {
      if (seen.has(p.id)) issues.push({ paperId: p.id, path: 'id', message: `duplicate paper id: ${p.id}` });
      else seen.add(p.id);
    }
    issues.push(...validatePaper(p));
  }
  return issues;
}

/**
 * Convenience wrapper returning a pass/fail flag alongside the issues.
 * @param {ExamPaper[]} papers
 * @returns {{ ok: boolean, issues: ValidationIssue[] }}
 */
export function validateAll(papers) {
  const issues = validatePapers(papers);
  return { ok: issues.length === 0, issues };
}

/**
 * Format issues for a terminal report.
 * @param {ValidationIssue[]} issues
 * @returns {string}
 */
export function formatIssues(issues) {
  return issues
    .map((i) => `  ✗ [${i.paperId}] ${i.path || '(paper)'}: ${i.message}`)
    .join('\n');
}
