/**
 * Fixture source adapter — reads LOCAL committed fixture files (no network) and
 * parses a compact authoring format into full `ExamPaper`s. This makes the whole
 * pipeline runnable + testable today without depending on any real source.
 *
 * Authoring format (see `../fixtures/*.json`) is intentionally lighter than the
 * runtime `ExamPaper` so the adapter does REAL work:
 *  - question `answer` may be the correct option STRING or a 0-based index → the
 *    adapter computes `answerIndex`;
 *  - question/passage ids may be omitted → the adapter generates stable ids;
 *  - reading questions reference a passage by a local `passage` key → the adapter
 *    rewrites it to the generated global `passageId`.
 *
 * @typedef {import('../../../src/lib/types/exam').ExamPaper} ExamPaper
 * @typedef {import('../../../src/lib/types/exam').ExamSection} ExamSection
 * @typedef {import('../../../src/lib/types/exam').ExamQuestion} ExamQuestion
 * @typedef {import('../../../src/lib/types/exam').ExamPassage} ExamPassage
 * @typedef {import('../../../src/lib/types/exam').ExamSource} ExamSource
 * @typedef {import('../../../src/lib/types/exam').ExamSectionType} ExamSectionType
 * @typedef {import('../../../src/lib/types/exam').JlptLevel} JlptLevel
 * @typedef {import('./types.js').ExamSourceAdapter} ExamSourceAdapter
 * @typedef {import('./types.js').PaperRef} PaperRef
 */

import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
/** Default fixtures directory: `scripts/fetch-exams/fixtures`. */
export const FIXTURES_DIR = resolve(HERE, '..', 'fixtures');

/**
 * @typedef {Object} ParseOptions
 * @property {string} [license]    Fallback license when a fixture omits `source`.
 * @property {string} [fetchedAt]  Fallback fetched/authored ISO date.
 */

/**
 * Resolve a question's correct-answer index from the authoring fields.
 * @param {{ answer?: (number|string), answerIndex?: number, options: string[] }} q
 * @param {string} where  Locator string for error messages.
 * @returns {number}
 */
function resolveAnswerIndex(q, where) {
  if (typeof q.answerIndex === 'number') return q.answerIndex;
  if (typeof q.answer === 'number') return q.answer;
  if (typeof q.answer === 'string') {
    const idx = q.options.indexOf(q.answer);
    if (idx < 0) {
      throw new Error(`${where}: answer "${q.answer}" is not one of the options [${q.options.join(', ')}]`);
    }
    return idx;
  }
  throw new Error(`${where}: question is missing "answer" or "answerIndex"`);
}

/**
 * Parse one raw fixture object into a clean `ExamPaper`. Pure (no I/O).
 * Throws a descriptive Error on input that cannot be represented as a paper
 * (e.g. missing options, an answer string that matches no option). Semantic
 * checks (range, emptiness, etc.) are left to `validate.js`.
 *
 * @param {any} raw            Parsed JSON fixture.
 * @param {ParseOptions} [opts]
 * @returns {ExamPaper}
 */
export function parseFixture(raw, opts = {}) {
  if (!raw || typeof raw !== 'object') throw new Error('fixture is not an object');
  if (typeof raw.id !== 'string' || !raw.id) throw new Error('fixture is missing "id"');
  const paperId = raw.id;
  if (!Array.isArray(raw.sections)) throw new Error(`fixture "${paperId}" is missing a "sections" array`);

  /** @type {ExamSource} */
  const source = raw.source && typeof raw.source === 'object'
    ? raw.source
    : {
        name: 'Smart Quiz fixtures (original)',
        license: opts.license || 'original',
        fetchedAt: opts.fetchedAt
      };

  /** @type {ExamSection[]} */
  const sections = raw.sections.map((/** @type {any} */ rawSection, /** @type {number} */ si) => {
    if (!rawSection || typeof rawSection !== 'object') {
      throw new Error(`fixture "${paperId}" sections[${si}] is not an object`);
    }
    /** @type {ExamSectionType} */
    const type = rawSection.type;

    // Build passages first so questions can resolve their passage key → global id.
    /** @type {Map<string, string>} */
    const keyToId = new Map();
    /** @type {ExamPassage[] | undefined} */
    let passages;
    if (Array.isArray(rawSection.passages) && rawSection.passages.length > 0) {
      passages = rawSection.passages.map((/** @type {any} */ p, /** @type {number} */ pi) => {
        const key = typeof p.key === 'string' ? p.key : undefined;
        const id = typeof p.id === 'string' && p.id
          ? p.id
          : `${paperId}-s${si + 1}-${key || `p${pi + 1}`}`;
        if (key) keyToId.set(key, id);
        keyToId.set(id, id); // allow referencing by explicit id too
        /** @type {ExamPassage} */
        const passage = { id, text: String(p.text ?? '') };
        if (typeof p.translation === 'string') passage.translation = p.translation;
        return passage;
      });
    }

    if (!Array.isArray(rawSection.questions)) {
      throw new Error(`fixture "${paperId}" sections[${si}] is missing a "questions" array`);
    }

    /** @type {ExamQuestion[]} */
    const questions = rawSection.questions.map((/** @type {any} */ q, /** @type {number} */ qi) => {
      const where = `fixture "${paperId}" sections[${si}].questions[${qi}]`;
      if (!Array.isArray(q.options)) throw new Error(`${where}: missing "options" array`);
      /** @type {string[]} */
      const options = q.options.map((/** @type {any} */ o) => String(o));
      const answerIndex = resolveAnswerIndex({ answer: q.answer, answerIndex: q.answerIndex, options }, where);

      /** @type {ExamQuestion} */
      const question = {
        id: typeof q.id === 'string' && q.id ? q.id : `${paperId}-s${si + 1}-q${qi + 1}`,
        prompt: String(q.prompt ?? ''),
        options,
        answerIndex
      };

      const passageRef = q.passageId ?? q.passage;
      if (passageRef !== undefined) {
        const resolved = keyToId.get(String(passageRef));
        // If unresolved, surface the raw ref so validate.js reports it clearly.
        question.passageId = resolved || String(passageRef);
      }
      if (typeof q.explanation === 'string') question.explanation = q.explanation;
      if (typeof q.audioUrl === 'string') question.audioUrl = q.audioUrl;
      return question;
    });

    /** @type {ExamSection} */
    const section = {
      type,
      title: String(rawSection.title ?? ''),
      ...(typeof rawSection.instructions === 'string' ? { instructions: rawSection.instructions } : {}),
      ...(passages ? { passages } : {}),
      questions
    };
    return section;
  });

  /** @type {ExamPaper} */
  const paper = {
    id: paperId,
    level: /** @type {JlptLevel} */ (raw.level),
    title: String(raw.title ?? ''),
    source,
    durationMinutes: typeof raw.durationMinutes === 'number' ? raw.durationMinutes : 0,
    sections
  };
  return paper;
}

/**
 * Create a fixture-source adapter over a directory of `*.json` fixtures.
 * @param {{ dir?: string } & ParseOptions} [opts]
 * @returns {ExamSourceAdapter}
 */
export function createFixtureAdapter(opts = {}) {
  const dir = opts.dir || FIXTURES_DIR;
  const parseOpts = { license: opts.license, fetchedAt: opts.fetchedAt };

  return {
    name: 'fixture',
    license: opts.license || 'original',

    async fetchPaperList() {
      const files = readdirSync(dir)
        .filter((f) => f.endsWith('.json'))
        .sort();
      /** @type {PaperRef[]} */
      const refs = files.map((file) => {
        const path = join(dir, file);
        const raw = JSON.parse(readFileSync(path, 'utf8'));
        return {
          id: String(raw.id ?? file.replace(/\.json$/, '')),
          level: /** @type {JlptLevel} */ (raw.level),
          title: String(raw.title ?? raw.id ?? file),
          path
        };
      });
      return refs;
    },

    async fetchAndParse(ref) {
      if (!ref.path) throw new Error(`fixture ref "${ref.id}" has no path`);
      const raw = JSON.parse(readFileSync(ref.path, 'utf8'));
      return parseFixture(raw, parseOpts);
    }
  };
}
