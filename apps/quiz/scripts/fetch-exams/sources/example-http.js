/**
 * EXAMPLE real-site source adapter (template).
 *
 * This is a runnable skeleton showing how a public source plugs into the
 * pipeline via the {@link ExamSourceAdapter} contract while staying a good web
 * citizen (robots.txt + rate-limit + User-Agent + raw cache, all from
 * `../http.js`). It deliberately does NOT target any real site — point it at an
 * endpoint that returns the fixture authoring JSON by setting `EXAM_SOURCE_URL`.
 *
 * ⚠️ Legal: only ever configure this against a source whose license/ToS permit
 * reuse (open-licensed datasets, official JLPT samples, or your own content).
 * Never scrape copyrighted past papers. See `../README.md` → "Legal caveat".
 *
 * @typedef {import('../../../src/lib/types/exam').ExamPaper} ExamPaper
 * @typedef {import('./types.js').ExamSourceAdapter} ExamSourceAdapter
 * @typedef {import('./types.js').PaperRef} PaperRef
 */

import { politeFetch, assertAllowed } from '../http.js';
import { parseFixture } from './fixture.js';

/**
 * @param {{ baseUrl?: string, delayMs?: number, userAgent?: string, license?: string }} [opts]
 * @returns {ExamSourceAdapter}
 */
export function createExampleHttpAdapter(opts = {}) {
  const baseUrl = opts.baseUrl || process.env.EXAM_SOURCE_URL || '';
  const fetchOpts = { delayMs: opts.delayMs ?? 1500, userAgent: opts.userAgent };

  /** @returns {string} */
  function requireBase() {
    if (!baseUrl) {
      throw new Error(
        'example-http source needs a base URL. Set EXAM_SOURCE_URL=https://… ' +
          '(an endpoint serving the fixture authoring JSON) — and confirm its ToS permits reuse.'
      );
    }
    return baseUrl.replace(/\/$/, '');
  }

  return {
    name: 'example-http',
    license: opts.license || 'unknown — verify before use',

    async fetchPaperList() {
      const base = requireBase();
      const indexUrl = `${base}/index.json`;
      await assertAllowed(indexUrl, fetchOpts);
      const body = await politeFetch(indexUrl, fetchOpts);
      const list = JSON.parse(body);
      /** @type {PaperRef[]} */
      const refs = (Array.isArray(list) ? list : []).map((/** @type {any} */ e) => ({
        id: String(e.id),
        level: e.level,
        title: String(e.title ?? e.id),
        url: `${base}/${e.id}.json`
      }));
      return refs;
    },

    async fetchAndParse(ref) {
      if (!ref.url) throw new Error(`example-http ref "${ref.id}" has no url`);
      await assertAllowed(ref.url, fetchOpts);
      const body = await politeFetch(ref.url, fetchOpts);
      const raw = JSON.parse(body);
      return parseFixture(raw, { license: this.license, fetchedAt: new Date().toISOString().slice(0, 10) });
    }
  };
}
