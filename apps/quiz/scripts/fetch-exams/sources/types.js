/**
 * Source-adapter contract for the exam-fetch pipeline.
 *
 * This module carries no runtime code — it only defines the JSDoc typedefs that
 * describe how a source (the local fixture source, or a real public site later)
 * plugs into the orchestrator. A new real source is added by implementing
 * {@link ExamSourceAdapter} (see `../README.md` → "Adding a real source").
 *
 * @typedef {import('../../../src/lib/types/exam').ExamPaper} ExamPaper
 * @typedef {import('../../../src/lib/types/exam').JlptLevel} JlptLevel
 */

/**
 * A lightweight pointer to a paper discoverable from a source, returned by
 * {@link ExamSourceAdapter.fetchPaperList} BEFORE its full content is fetched.
 * Cheap to produce so the orchestrator can plan/report before doing heavy work.
 *
 * @typedef {Object} PaperRef
 * @property {string} id        Stable id the adapter will assign the parsed paper.
 * @property {JlptLevel} level  JLPT level (N5..N1).
 * @property {string} title     Human-readable paper title.
 * @property {string} [url]     Origin URL — set by real HTTP sources.
 * @property {string} [path]    Local file path — set by the fixture source.
 */

/**
 * The plug-in contract every source implements.
 *
 * - `name`    — short source id, also the value of `--source=<name>`.
 * - `license` — default license string stamped onto papers from this source
 *               (e.g. "original", "CC-BY-4.0", "official sample"). NEVER use a
 *               source whose terms forbid reuse (see README legal caveat).
 * - `fetchPaperList()`  — discover available papers (no heavy parsing).
 * - `fetchAndParse(ref)`— fetch + parse one paper into a full {@link ExamPaper}.
 *   Real HTTP sources MUST route network access through `../http.js`
 *   (`politeFetch`) so robots.txt, rate-limit, User-Agent and the raw cache are
 *   all respected.
 *
 * @typedef {Object} ExamSourceAdapter
 * @property {string} name
 * @property {string} license
 * @property {() => Promise<PaperRef[]>} fetchPaperList
 * @property {(ref: PaperRef) => Promise<ExamPaper>} fetchAndParse
 */

export {};
