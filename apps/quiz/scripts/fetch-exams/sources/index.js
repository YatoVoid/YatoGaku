/**
 * Source registry — maps a `--source=<name>` flag to an adapter factory.
 *
 * To add a real source: implement {@link ExamSourceAdapter} (see `./types.js`
 * and the `./example-http.js` template) and register its factory here.
 *
 * @typedef {import('./types.js').ExamSourceAdapter} ExamSourceAdapter
 */

import { createFixtureAdapter } from './fixture.js';
import { createExampleHttpAdapter } from './example-http.js';
import { createJamsinclairAdapter } from './jamsinclair-mit.js';

/**
 * @typedef {Object} SourceContext
 * @property {number} [delayMs]
 * @property {string} [userAgent]
 * @property {string} [fetchedAt]
 */

/** @type {Record<string, (ctx: SourceContext) => ExamSourceAdapter>} */
const REGISTRY = {
  fixture: (ctx) => createFixtureAdapter({ fetchedAt: ctx.fetchedAt }),
  'example-http': (ctx) => createExampleHttpAdapter({ delayMs: ctx.delayMs, userAgent: ctx.userAgent }),
  'jamsinclair-mit': (ctx) =>
    createJamsinclairAdapter({ delayMs: ctx.delayMs, userAgent: ctx.userAgent, fetchedAt: ctx.fetchedAt })
};

/** @returns {string[]} */
export function listSources() {
  return Object.keys(REGISTRY);
}

/**
 * @param {string} name
 * @param {SourceContext} [ctx]
 * @returns {ExamSourceAdapter}
 */
export function getSource(name, ctx = {}) {
  const factory = REGISTRY[name];
  if (!factory) {
    throw new Error(`unknown source "${name}". Available: ${listSources().join(', ')}`);
  }
  return factory(ctx);
}
