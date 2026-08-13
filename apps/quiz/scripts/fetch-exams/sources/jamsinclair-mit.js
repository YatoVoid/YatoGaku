/**
 * Real source adapter — **jamsinclair/open-anki-jlpt-decks** (MIT licensed).
 *
 * Fetches the project's per-level JLPT vocabulary CSVs and GENERATES vocab exam
 * papers from them (one paper per level, N5→N1). It is a good web citizen: every
 * request goes through `../http.js` (robots.txt + rate-limit + User-Agent + raw
 * cache).
 *
 * Source data layout (`src/{n5,n4,n3,n2,n1}.csv`):
 *   columns: expression,reading,meaning,tags,guid
 *   - `expression` — the Japanese word (kanji and/or kana)
 *   - `reading`    — its kana reading
 *   - `meaning`    — an ENGLISH gloss (may be quoted, may contain commas)
 *   - `tags`       — space-separated tags (JLPT/Genki/…)
 *   - `guid`       — a stable per-card id (CAN contain commas inside quotes)
 *
 * Generation is **fully DETERMINISTIC** (no `Math.random`, no file-order
 * dependence): the word pool is sorted by `guid`, questions are picked by a fixed
 * stride, and distractors / answer positions are derived from the question index
 * and a per-level offset. Running the pipeline twice produces byte-identical
 * output, so it stays idempotent.
 *
 * Question mix per paper (~24 questions): ~2/3 **reading** questions (language-
 * neutral: "what is the reading of 会う?") and ~1/3 **meaning** questions (the
 * gloss is English — the source has NO Vietnamese; see README "Limitation").
 *
 * License: MIT — attribution preserved on every paper's `source` field.
 *
 * @typedef {import('../../../src/lib/types/exam').ExamPaper} ExamPaper
 * @typedef {import('../../../src/lib/types/exam').ExamQuestion} ExamQuestion
 * @typedef {import('../../../src/lib/types/exam').JlptLevel} JlptLevel
 * @typedef {import('./types.js').ExamSourceAdapter} ExamSourceAdapter
 * @typedef {import('./types.js').PaperRef} PaperRef
 */

import { politeFetch, assertAllowed } from '../http.js';

/** Raw CSV base URL (MIT-licensed; HTTP 200 verified for all five files). */
export const CSV_BASE =
  'https://raw.githubusercontent.com/jamsinclair/open-anki-jlpt-decks/main/src';

/** Provenance stamped onto every generated paper. */
export const SOURCE_META = {
  name: 'jamsinclair/open-anki-jlpt-decks',
  url: 'https://github.com/jamsinclair/open-anki-jlpt-decks',
  license: 'MIT'
};

/** Number of questions generated per level paper. */
export const QUESTIONS_PER_PAPER = 24;

/**
 * Per-level descriptors, ordered N5→N1 (matches the pipeline's level ordering).
 * @type {{ level: JlptLevel, file: string, label: string }[]}
 */
export const LEVELS = [
  { level: 'N5', file: 'n5.csv', label: 'N5' },
  { level: 'N4', file: 'n4.csv', label: 'N4' },
  { level: 'N3', file: 'n3.csv', label: 'N3' },
  { level: 'N2', file: 'n2.csv', label: 'N2' },
  { level: 'N1', file: 'n1.csv', label: 'N1' }
];

/** Deterministic per-level offset (varies answer position + distractor start). */
const LEVEL_OFFSET = /** @type {Record<JlptLevel, number>} */ ({
  N5: 0,
  N4: 1,
  N3: 2,
  N2: 3,
  N1: 4
});

/* -------------------------------------------------------------------------- */
/* CSV parsing                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Tokenize CSV text into rows of cells. RFC-4180-ish: handles quoted fields with
 * embedded commas / newlines, escaped quotes (`""` → `"`), and CRLF or LF line
 * endings. A double-quote is only special at the START of a field (so a stray
 * quote mid-field is treated literally).
 *
 * @param {string} text
 * @returns {string[][]}
 */
export function parseCsvRows(text) {
  // Strip a leading UTF-8 BOM if present.
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);

  /** @type {string[][]} */
  const rows = [];
  /** @type {string[]} */
  let row = [];
  let field = '';
  let inQuotes = false;
  let fieldStart = true; // are we at the first char of the current field?
  const n = text.length;

  for (let i = 0; i < n; i++) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++; // consume the escaped quote pair
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"' && fieldStart) {
      inQuotes = true;
      fieldStart = false;
      continue;
    }
    if (ch === ',') {
      row.push(field);
      field = '';
      fieldStart = true;
      continue;
    }
    if (ch === '\r') {
      continue; // swallow CR; the LF (or EOF) ends the row
    }
    if (ch === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      fieldStart = true;
      continue;
    }
    field += ch;
    fieldStart = false;
  }

  // Flush a trailing field/row that had no terminating newline.
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/**
 * Parse CSV text into row objects keyed by the header columns.
 * Fully-empty lines are skipped.
 *
 * @param {string} text
 * @returns {Record<string, string>[]}
 */
export function parseCsv(text) {
  const rows = parseCsvRows(text);
  if (rows.length === 0) return [];
  const header = rows[0].map((h) => h.trim());
  /** @type {Record<string, string>[]} */
  const out = [];
  for (let r = 1; r < rows.length; r++) {
    const cells = rows[r];
    if (cells.length === 1 && cells[0] === '') continue; // blank line
    /** @type {Record<string, string>} */
    const obj = {};
    for (let c = 0; c < header.length; c++) obj[header[c]] = cells[c] ?? '';
    out.push(obj);
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/* Word pool                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * @typedef {Object} VocabWord
 * @property {string} expression
 * @property {string} reading
 * @property {string} meaning
 * @property {string} guid
 */

/** Collapse internal whitespace/newlines and trim. */
function tidy(/** @type {string} */ s) {
  return String(s ?? '').replace(/\s+/g, ' ').trim();
}

/**
 * Turn parsed CSV rows into a clean, DETERMINISTICALLY-ordered word pool:
 *  - keep only rows with a non-empty expression, reading, meaning and guid;
 *  - de-duplicate by `expression` (first occurrence in guid order wins) so two
 *    questions never target the same word;
 *  - sort by `guid` (code-unit comparison, NOT locale-sensitive) so ordering is
 *    independent of the CSV's own row order.
 *
 * @param {Record<string, string>[]} rows
 * @returns {VocabWord[]}
 */
export function buildWordPool(rows) {
  /** @type {VocabWord[]} */
  const words = [];
  for (const row of rows) {
    const expression = tidy(row.expression);
    const reading = tidy(row.reading);
    const meaning = tidy(row.meaning);
    const guid = String(row.guid ?? '');
    if (!expression || !reading || !meaning || !guid) continue;
    words.push({ expression, reading, meaning, guid });
  }

  // Sort by guid (stable, deterministic), expression as a tiebreaker.
  words.sort((a, b) => {
    if (a.guid < b.guid) return -1;
    if (a.guid > b.guid) return 1;
    if (a.expression < b.expression) return -1;
    if (a.expression > b.expression) return 1;
    return 0;
  });

  // De-duplicate by expression, preserving the deterministic guid order.
  /** @type {Set<string>} */
  const seen = new Set();
  /** @type {VocabWord[]} */
  const uniq = [];
  for (const w of words) {
    if (seen.has(w.expression)) continue;
    seen.add(w.expression);
    uniq.push(w);
  }
  return uniq;
}

/* -------------------------------------------------------------------------- */
/* Paper generation                                                            */
/* -------------------------------------------------------------------------- */

/**
 * Pick 3 distractor values of the given kind, distinct from `correct` and from
 * each other, deterministically. Walks the pool from a seeded start, examining
 * EVERY entry (step 1) so it always finds enough distinct values.
 *
 * @param {VocabWord[]} pool
 * @param {'reading'|'meaning'} kind
 * @param {string} correct
 * @param {number} start  Seeded start index into `pool`.
 * @returns {string[]}    Exactly 3 distinct distractors.
 */
function pickDistractors(pool, kind, correct, start) {
  /** @type {string[]} */
  const distractors = [];
  /** @type {Set<string>} */
  const used = new Set([correct]);
  const len = pool.length;
  for (let k = 0; k < len && distractors.length < 3; k++) {
    const j = (start + k) % len;
    const value = kind === 'reading' ? pool[j].reading : pool[j].meaning;
    if (used.has(value)) continue;
    used.add(value);
    distractors.push(value);
  }
  if (distractors.length < 3) {
    throw new Error(
      `jamsinclair-mit: not enough distinct ${kind} distractors (pool too small: ${len})`
    );
  }
  return distractors;
}

/**
 * Build one vocab `ExamPaper` from a level's word pool. Pure + deterministic.
 *
 * @param {PaperRef} ref                 Paper id/level/title/url.
 * @param {VocabWord[]} pool             Cleaned, guid-sorted, de-duplicated pool.
 * @param {{ fetchedAt?: string, count?: number }} [opts]
 * @returns {ExamPaper}
 */
export function buildVocabPaper(ref, pool, opts = {}) {
  const level = /** @type {JlptLevel} */ (ref.level);
  const count = Math.min(opts.count ?? QUESTIONS_PER_PAPER, pool.length);
  if (count < 4) {
    throw new Error(`jamsinclair-mit: ${ref.id} pool too small to build a paper (${pool.length} words)`);
  }
  const levelOffset = LEVEL_OFFSET[level] ?? 0;
  const stride = Math.max(1, Math.floor(pool.length / count));

  /** @type {ExamQuestion[]} */
  const questions = [];
  for (let qi = 0; qi < count; qi++) {
    const selIdx = qi * stride; // < pool.length for qi < count (see stride def)
    const word = pool[selIdx];

    // ~2/3 reading, ~1/3 meaning: every 3rd question (index ≡ 2 mod 3) is meaning.
    /** @type {'reading'|'meaning'} */
    const kind = qi % 3 === 2 ? 'meaning' : 'reading';
    const correct = kind === 'reading' ? word.reading : word.meaning;

    const start = (selIdx + qi * 7 + levelOffset + 1) % pool.length;
    const distractors = pickDistractors(pool, kind, correct, start);

    // Deterministic answer position so the key isn't always index 0.
    const answerPos = (qi + levelOffset) % 4;
    /** @type {string[]} */
    const options = [];
    let di = 0;
    for (let p = 0; p < 4; p++) {
      options.push(p === answerPos ? correct : distractors[di++]);
    }

    const prompt =
      kind === 'reading'
        ? `「${word.expression}」 の よみかた は どれ ですか。`
        : `「${word.expression}」 の いみ は？`;

    questions.push({
      id: `${ref.id}-q${qi + 1}`,
      prompt,
      options,
      answerIndex: answerPos,
      explanation: `${word.expression}（${word.reading}）= ${word.meaning}`
    });
  }

  /** @type {ExamPaper} */
  const paper = {
    id: ref.id,
    level,
    title: ref.title,
    source: { ...SOURCE_META, fetchedAt: opts.fetchedAt },
    durationMinutes: 20,
    sections: [
      {
        type: 'vocab',
        title: '語彙 (Từ vựng)',
        instructions:
          'Chọn cách đọc (よみかた) hoặc nghĩa đúng. Câu hỏi cách đọc dùng tiếng Nhật; câu hỏi nghĩa dùng tiếng Anh (nguồn không có tiếng Việt).',
        questions
      }
    ]
  };
  return paper;
}

/* -------------------------------------------------------------------------- */
/* Adapter                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Create the jamsinclair-mit source adapter.
 *
 * @param {{ delayMs?: number, userAgent?: string, fetchedAt?: string, baseUrl?: string }} [opts]
 * @returns {ExamSourceAdapter}
 */
export function createJamsinclairAdapter(opts = {}) {
  const baseUrl = (opts.baseUrl || CSV_BASE).replace(/\/$/, '');
  const fetchOpts = { delayMs: opts.delayMs, userAgent: opts.userAgent };
  const fetchedAt = opts.fetchedAt;

  return {
    name: 'jamsinclair-mit',
    license: 'MIT',

    async fetchPaperList() {
      /** @type {PaperRef[]} */
      return LEVELS.map(({ level, file, label }) => ({
        id: `${level.toLowerCase()}-jamsinclair-vocab`,
        level,
        title: `${label} — Từ vựng (jamsinclair MIT)`,
        url: `${baseUrl}/${file}`
      }));
    },

    async fetchAndParse(ref) {
      if (!ref.url) throw new Error(`jamsinclair-mit ref "${ref.id}" has no url`);
      await assertAllowed(ref.url, fetchOpts); // robots.txt
      const body = await politeFetch(ref.url, fetchOpts); // cached + rate-limited
      const rows = parseCsv(body);
      const pool = buildWordPool(rows);
      return buildVocabPaper(ref, pool, { fetchedAt });
    }
  };
}
