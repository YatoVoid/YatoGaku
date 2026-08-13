#!/usr/bin/env node
/**
 * Orchestrator / CLI entry for the build-time exam-fetch pipeline.
 *
 *   npm run fetch-exams                  # default --source=fixture
 *   node scripts/fetch-exams/fetch-exams.js --source=fixture
 *   node scripts/fetch-exams/fetch-exams.js --dry-run        # validate, don't write
 *   node scripts/fetch-exams/fetch-exams.js --delay=2000 --user-agent="Bot/1.0"
 *
 * Flow: pick source → fetchPaperList → fetchAndParse each → VALIDATE all →
 * (fail non-zero on any issue) → sort N5→N1 → regenerate
 * `src/lib/data/exams/papers.ts`.
 *
 * Good-citizen HTTP behavior (robots.txt, rate-limit, User-Agent, raw cache)
 * lives in `http.js` and is used by real source adapters; the default fixture
 * source reads local files only.
 *
 * @typedef {import('../../src/lib/types/exam').ExamPaper} ExamPaper
 */

import { getSource, listSources } from './sources/index.js';
import { validateAll, formatIssues } from './validate.js';
import { writePapersFile, sortPapers, readExistingPapers, mergePapers } from './generate.js';

/**
 * @param {string[]} argv
 * @returns {Record<string, string|boolean>}
 */
function parseArgs(argv) {
  /** @type {Record<string, string|boolean>} */
  const args = {};
  for (const a of argv) {
    if (!a.startsWith('--')) continue;
    const body = a.slice(2);
    const eq = body.indexOf('=');
    if (eq === -1) args[body] = true;
    else args[body.slice(0, eq)] = body.slice(eq + 1);
  }
  return args;
}

const HELP = `fetch-exams — build-time exam paper pipeline

Usage:
  node scripts/fetch-exams/fetch-exams.js [options]

Options:
  --source=<name>      Source adapter(s), comma-separated (default: fixture).
                       Available: ${listSources().join(', ')}
                       e.g. --source=jamsinclair-mit  or  --source=fixture,jamsinclair-mit
  --no-merge           Clean rebuild: write ONLY the produced sources' papers.
                       (Default: MERGE produced papers into papers.ts by id, so a
                        single-source run keeps papers contributed by other sources.)
  --delay=<ms>         Min delay between live HTTP requests (default 1000). HTTP sources only.
  --user-agent=<str>   Override the bot User-Agent. HTTP sources only.
  --dry-run            Fetch + validate but do NOT write papers.ts.
  --help               Show this help.
`;

/** @returns {Promise<number>} Exit code. */
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    process.stdout.write(HELP);
    return 0;
  }

  const sourceArg = typeof args.source === 'string' ? args.source : 'fixture';
  const sourceNames = sourceArg
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const delayMs = typeof args.delay === 'string' ? Number(args.delay) : undefined;
  const userAgent = typeof args['user-agent'] === 'string' ? args['user-agent'] : undefined;
  const dryRun = args['dry-run'] === true;
  const merge = args['no-merge'] !== true;
  const fetchedAt = new Date().toISOString().slice(0, 10);

  console.log(
    `[fetch-exams] source=${sourceNames.join(',')}${merge ? '' : ' (no-merge)'}${dryRun ? ' (dry-run)' : ''}`
  );

  /** @type {import('./sources/types.js').ExamSourceAdapter[]} */
  const sources = [];
  try {
    for (const name of sourceNames) {
      sources.push(getSource(name, { delayMs, userAgent, fetchedAt }));
    }
  } catch (err) {
    console.error(`[fetch-exams] ${(err instanceof Error ? err.message : String(err))}`);
    return 1;
  }

  // Run every requested source; concatenate the papers they produce.
  /** @type {ExamPaper[]} */
  let produced;
  try {
    produced = [];
    for (const source of sources) {
      const refs = await source.fetchPaperList();
      console.log(`[fetch-exams] discovered ${refs.length} paper(s) from "${source.name}"`);
      for (const ref of refs) {
        produced.push(await source.fetchAndParse(ref));
      }
    }
  } catch (err) {
    console.error(`[fetch-exams] fetch/parse failed: ${(err instanceof Error ? err.message : String(err))}`);
    return 1;
  }

  // MERGE (default): keep papers contributed by other sources, replace by id.
  // --no-merge: clean rebuild from only the produced papers.
  /** @type {ExamPaper[]} */
  let papers;
  try {
    papers = merge ? mergePapers(readExistingPapers(), produced) : produced;
  } catch (err) {
    console.error(`[fetch-exams] merge failed: ${(err instanceof Error ? err.message : String(err))}`);
    return 1;
  }
  if (merge) {
    const kept = papers.length - produced.length;
    console.log(`[fetch-exams] merged: ${produced.length} produced + ${kept} kept from papers.ts`);
  }

  // Validate — pipeline FAILS on any malformed paper.
  const { ok, issues } = validateAll(papers);
  if (!ok) {
    console.error(`[fetch-exams] ✗ validation failed (${issues.length} issue(s)):`);
    console.error(formatIssues(issues));
    return 1;
  }

  // Report what we have, grouped by level.
  const sorted = sortPapers(papers);
  const byLevel = new Map();
  let totalQuestions = 0;
  for (const p of sorted) {
    const q = p.sections.reduce((n, s) => n + s.questions.length, 0);
    totalQuestions += q;
    byLevel.set(p.level, (byLevel.get(p.level) || 0) + 1);
  }
  const levelSummary = ['N5', 'N4', 'N3', 'N2', 'N1']
    .map((l) => `${l}:${byLevel.get(l) || 0}`)
    .join('  ');
  console.log(`[fetch-exams] ✓ ${sorted.length} paper(s), ${totalQuestions} question(s) — ${levelSummary}`);

  if (dryRun) {
    console.log('[fetch-exams] dry-run: papers.ts NOT written.');
    return 0;
  }

  const written = writePapersFile(sorted);
  console.log(`[fetch-exams] ✓ regenerated ${written.replace(process.cwd() + '/', '')}`);
  return 0;
}

main()
  .then((code) => process.exit(code))
  .catch((err) => {
    console.error('[fetch-exams] unexpected error:', err);
    process.exit(1);
  });
