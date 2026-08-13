# `fetch-exams` — build-time exam-paper pipeline

A **source-agnostic, build-time** pipeline that produces the static exam data for
the "làm đề" (mock JLPT) feature. It runs locally/in CI, validates everything,
and regenerates the typed data module the UI reads. No runtime backend — the app
stays fully offline-first.

```
source adapter ──▶ fetchPaperList() ──▶ fetchAndParse(ref) ──▶ validate ──▶ generate
   (fixture | http)        PaperRef[]            ExamPaper            (fail on            papers.ts
                                                                      any issue)
```

## Quick start

```bash
cd svelte-app
npm run fetch-exams            # default --source=fixture → regenerates src/lib/data/exams/papers.ts
npm run fetch-exams -- --dry-run   # fetch + validate only, do NOT write
node scripts/fetch-exams/fetch-exams.js --help
```

The generated `src/lib/data/exams/papers.ts` is **machine-owned** (DO NOT EDIT by
hand). The UI imports only from `src/lib/data/exams/index.ts`, never the data
file directly, so the data layer and UI stay decoupled.

## Layout

| File | Role |
|------|------|
| `fetch-exams.js` | Orchestrator / CLI. Picks a source, runs it, validates, regenerates. |
| `validate.js` | Pure validator (`validatePaper` / `validatePapers`). The fail-gate. |
| `generate.js` | Renders the validated papers into `papers.ts` (sorted N5→N1). |
| `sources/types.js` | The `ExamSourceAdapter` + `PaperRef` contract (JSDoc). |
| `sources/fixture.js` | Local, no-network source — parses `fixtures/*.json` → `ExamPaper`. |
| `sources/example-http.js` | Template for a real HTTP source (good-citizen demo). |
| `sources/jamsinclair-mit.js` | Real MIT source — fetches the jamsinclair JLPT vocab CSVs → generated vocab papers. |
| `sources/index.js` | Registry mapping `--source=<name>` → adapter. |
| `http.js` `robots.js` `cache.js` | Good-citizen HTTP layer (see below). |
| `fixtures/*.json` | Committed original sample papers (one+ per level). |
| `.cache/` | Raw-response cache for HTTP sources (git-ignored). |

## CLI options

| Flag | Default | Notes |
|------|---------|-------|
| `--source=<name>` | `fixture` | One or more registered sources, comma-separated. Registered: `fixture`, `example-http`, `jamsinclair-mit`. |
| `--no-merge` | off (merge **on**) | Clean rebuild — write ONLY the produced sources' papers. By default a run **merges** its papers into the existing `papers.ts` by id (see below). |
| `--delay=<ms>` | `1000` | Min delay between live HTTP requests (HTTP sources only). |
| `--user-agent=<str>` | built-in bot UA | Override the bot User-Agent (HTTP sources only). |
| `--dry-run` | off | Fetch + validate, but don't write `papers.ts`. |
| `--help` | — | Usage. |

The pipeline exits **non-zero** if any paper fails validation, and never writes a
partial/invalid `papers.ts`.

### Merge vs. clean rebuild

`papers.ts` aggregates papers from **multiple sources** (the bundled originals +
real sources like `jamsinclair-mit`). To keep them all without one source
clobbering another, a run **merges by default**: it reads the current
`papers.ts`, replaces only the papers whose `id` it just produced, and keeps the
rest. This makes every run **idempotent** (deterministic data + stable sort +
replace-by-id ⇒ running twice yields no diff) and order-independent:

```bash
npm run fetch-exams -- --source=jamsinclair-mit          # add/refresh jamsinclair papers, keep the originals
npm run fetch-exams -- --source=fixture                  # refresh the originals, keep jamsinclair papers
npm run fetch-exams -- --source=fixture,jamsinclair-mit  # run both in one pass (full set)
npm run fetch-exams -- --source=fixture --no-merge        # CLEAN rebuild: originals only (drops other sources)
```

> Note: with `npm run`, script flags must come after `--` so npm forwards them
> (`npm run fetch-exams -- --source=…`), otherwise npm swallows them as its own
> config.

## Validation rules (`validate.js`)

Each `ExamPaper` must satisfy:

- non-empty `sections`; every section has **≥1 question**;
- every question: non-empty `prompt`, **≥2 non-empty options**, an **integer
  `answerIndex` within `0..options.length-1`**;
- a question's `passageId` (if present) **resolves to a passage in its own
  section**, and only `reading` sections may carry passage-linked questions;
- structural sanity: non-empty `id`/`title`, valid `level` (N5–N1), positive
  `durationMinutes`, present `source.name`; question ids unique within a paper;
  paper ids unique across the set.

The validator is a pure function (no I/O, no throw) — unit-tested in
`src/tests/exam-pipeline/validate.test.ts`.

## The fixture source

`sources/fixture.js` reads local `fixtures/*.json` so the whole pipeline is
runnable and testable today with **no network**. The fixture authoring format is
intentionally lighter than the runtime `ExamPaper`, so the adapter does real
parse work:

- a question's correct answer may be given as the option **string** (`"answer":
  "とうきょう"`) or a 0-based **index** (`"answer": 1` / `"answerIndex": 1`) — the
  adapter computes `answerIndex`;
- question/passage `id`s may be omitted — the adapter generates stable ids
  (`<paperId>-s<n>-q<n>`, `<paperId>-s<n>-<passageKey>`);
- a reading question references a passage by a local `passage` **key**, which the
  adapter rewrites to the generated global `passageId`.

Fixtures ship one or more **original** sample papers for **every level N5→N1**
(`source.license: "original"`). They are short, hand-authored samples — not
copies of real exams (see the legal caveat).

## The `jamsinclair-mit` source (real, MIT)

`sources/jamsinclair-mit.js` is a **real** source adapter. It fetches the
**MIT-licensed** JLPT vocabulary CSVs from
[`jamsinclair/open-anki-jlpt-decks`](https://github.com/jamsinclair/open-anki-jlpt-decks)
(`src/{n5,n4,n3,n2,n1}.csv`, columns `expression,reading,meaning,tags,guid`) and
**generates** one vocab paper per level (N5→N1).

```bash
# Fetch + generate the five jamsinclair papers, merged with the originals:
npm run fetch-exams -- --source=jamsinclair-mit
```

What it does:

1. **Fetch** — each level's CSV is fetched through the good-citizen `http.js`
   layer (robots.txt check + rate-limit + bot User-Agent + raw cache).
2. **Parse** — a proper RFC-4180-ish CSV parser handles quoted fields with
   embedded commas, escaped quotes (`""`), and even a `guid` column that itself
   contains commas.
3. **Generate** — ~24 multiple-choice questions per paper in a single `vocab`
   section, mixing:
   - **~2/3 reading questions** (language-neutral): `「会う」 の よみかた は どれ ですか。`
     — options are the correct kana reading + 3 distractor readings from other
     words in the SAME level;
   - **~1/3 meaning questions**: `「会う」 の いみ は？` — options are the correct
     English gloss + 3 distractor glosses.
   Distractors are de-duplicated (distinct from the answer and from each other),
   and the answer position varies per question.

**Determinism / idempotency.** Generation uses **no `Math.random`** and does not
depend on CSV row order: the word pool is sorted by `guid`, de-duplicated by
`expression`, questions are picked by a fixed stride, and distractor starts +
answer positions are derived from the question index and a per-level offset.
Re-running the pipeline produces byte-identical papers, and the merge step
(replace-by-id) keeps it idempotent against `papers.ts`.

### Attribution

Data: **[jamsinclair/open-anki-jlpt-decks](https://github.com/jamsinclair/open-anki-jlpt-decks)**,
licensed **MIT**. Every generated paper carries this in its required `source`
field (`name` / `url` / `license: "MIT"` / `fetchedAt`), so provenance stays
traceable per the schema contract.

### ⚠️ Limitation — meanings are English

The source dataset has **no Vietnamese**. Therefore:

- **Reading questions** are language-neutral (Japanese only) — the recommended,
  fully-localized question type.
- **Meaning questions** use the dataset's **English** glosses as options.

Vietnamese meaning enrichment (translating/curating the glosses, or sourcing a
JLPT vocab dataset with Vietnamese) is **future work**. Until then, reading
questions carry the localization weight and meaning questions remain English.

## Adding a real source adapter

A real public-site source is a plug-in: implement `ExamSourceAdapter`
(`sources/types.js`) and register it in `sources/index.js`. Use
`sources/example-http.js` as the template.

```js
// sources/my-source.js
import { politeFetch, assertAllowed } from '../http.js';

/** @returns {import('./types.js').ExamSourceAdapter} */
export function createMySource(opts = {}) {
  return {
    name: 'my-source',
    license: 'CC-BY-4.0',                 // the source's actual license — verify it!
    async fetchPaperList() {
      const url = 'https://example.org/exams/index.json';
      await assertAllowed(url, opts);     // robots.txt check
      const body = await politeFetch(url, opts);
      return JSON.parse(body).map((e) => ({ id: e.id, level: e.level, title: e.title, url: e.url }));
    },
    async fetchAndParse(ref) {
      await assertAllowed(ref.url, opts);
      const body = await politeFetch(ref.url, opts);  // cached + rate-limited
      return /* parse `body` (HTML/JSON) into an ExamPaper */;
    }
  };
}
```

```js
// sources/index.js — register it
const REGISTRY = {
  fixture: (ctx) => createFixtureAdapter({ fetchedAt: ctx.fetchedAt }),
  'my-source': (ctx) => createMySource({ delayMs: ctx.delayMs, userAgent: ctx.userAgent })
};
```

Then: `npm run fetch-exams -- --source=my-source`. Validation runs unchanged, so
your parsed papers must satisfy the same rules.

## Good-citizen HTTP behavior

Real sources route every request through `http.js`, which gives you, for free:

- **robots.txt** — `assertAllowed(url)` fetches + honors the site's robots.txt
  for our User-Agent (per-UA groups, `Allow`/`Disallow`, longest-match,
  `*`/`$` wildcards). Fetching a disallowed path throws.
- **Rate-limit** — `politeFetch` waits at least `--delay` ms (default 1000)
  between live requests.
- **User-Agent** — an identifying bot UA is sent on every request (overridable
  via `--user-agent`).
- **Raw-response cache** — bodies are cached under `.cache/<sha256(url)>` (this
  directory is git-ignored) so re-runs do **not** re-hit the remote site.

The fixture source bypasses all of this (local files only).

## ⚠️ Legal caveat — read before adding a source

JLPT past papers and most commercial prep materials are **copyrighted**. Only
fetch from sources whose **license or Terms of Service explicitly permit reuse**:

- **open-licensed** datasets (e.g. CC-BY / CC-BY-SA — keep the attribution);
- **official sample questions** published for free reuse by the JLPT bodies;
- **your own original** content (like the bundled fixtures).

**Never scrape copyrighted past papers**, paywalled material, or any site whose
ToS forbids automated access — even if technically reachable. Every `ExamPaper`
carries a required `source` (`name` / `url` / `license`) so provenance stays
traceable; set `license` honestly. When in doubt, don't fetch it.
