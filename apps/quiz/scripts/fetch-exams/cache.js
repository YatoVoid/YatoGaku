/**
 * Raw-response cache for HTTP sources. Stores each fetched body under
 * `scripts/fetch-exams/.cache/<sha256(url)>` (the directory is git-ignored) so
 * re-runs of the pipeline do NOT re-hit a remote site — good-citizen behavior.
 *
 * The fixture source never touches this; it exists for real HTTP adapters.
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const HERE = dirname(fileURLToPath(import.meta.url));
export const CACHE_DIR = resolve(HERE, '.cache');

/**
 * @param {string} url
 * @returns {string}
 */
function keyFor(url) {
  return createHash('sha256').update(url).digest('hex');
}

/**
 * @param {string} url
 * @returns {string | undefined}  Cached body, or undefined on a miss.
 */
export function readCache(url) {
  const file = join(CACHE_DIR, keyFor(url));
  if (!existsSync(file)) return undefined;
  return readFileSync(file, 'utf8');
}

/**
 * @param {string} url
 * @param {string} body
 * @returns {void}
 */
export function writeCache(url, body) {
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(join(CACHE_DIR, keyFor(url)), body, 'utf8');
}
