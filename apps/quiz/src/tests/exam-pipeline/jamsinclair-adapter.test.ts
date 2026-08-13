/**
 * Unit tests for the jamsinclair-mit source adapter
 * (`scripts/fetch-exams/sources/jamsinclair-mit.js`).
 *
 * Covers, WITHOUT network:
 *  - the CSV parser (quoted fields with embedded commas, escaped quotes, a guid
 *    column that itself contains commas, CRLF endings, blank lines);
 *  - the word-pool builder (empty-row filtering, de-dupe by expression, stable
 *    guid ordering → order-independence);
 *  - the deterministic paper generator (identical output across two runs, valid
 *    per the schema/validator, distinct distractors, correct answerIndex, the
 *    ~2/3 reading / ~1/3 meaning mix);
 *  - the adapter's `fetchPaperList()` (one ref per level N5→N1, correct ids/urls);
 *  - the orchestrator merge helpers (`mergePapers`, `readExistingPapers`).
 */

import { describe, it, expect } from 'vitest';
import { writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  parseCsv,
  parseCsvRows,
  buildWordPool,
  buildVocabPaper,
  createJamsinclairAdapter,
  CSV_BASE,
  QUESTIONS_PER_PAPER
} from '../../../scripts/fetch-exams/sources/jamsinclair-mit.js';
import { validatePaper } from '../../../scripts/fetch-exams/validate.js';
import { readExistingPapers, mergePapers, writePapersFile } from '../../../scripts/fetch-exams/generate.js';
import type { JlptLevel, ExamPaper } from '$lib/types/exam';

/** A small CSV exercising every tricky case in the real source data. */
const SAMPLE_CSV = [
  'expression,reading,meaning,tags,guid',
  '会う,あう,"to meet, to see",JLPT JLPT_5 JLPT_N5,abc1', // quoted meaning w/ comma
  '煮える,にえる,"to boil, to cook",JLPT JLPT_3,"bik,,M3"', // guid w/ embedded commas
  '字,じ,"a ""character""",JLPT,gd01', // escaped quotes inside a quoted field
  'ああ,ああ,"Ah!, Oh!",JLPT,gd02', // kana word: expression == reading
  '青,あお,blue,JLPT,gd03',
  '赤,あか,red,JLPT,gd04',
  '白,しろ,white,JLPT,gd05',
  '黒,くろ,black,JLPT,gd06'
].join('\r\n'); // CRLF line endings

describe('parseCsvRows / parseCsv — RFC-4180-ish parsing', () => {
  it('keeps embedded commas inside a quoted meaning field', () => {
    const rows = parseCsv(SAMPLE_CSV);
    const au = rows.find((r) => r.expression === '会う');
    expect(au?.meaning).toBe('to meet, to see');
    expect(au?.reading).toBe('あう');
  });

  it('handles a quoted guid that itself contains commas', () => {
    const rows = parseCsv(SAMPLE_CSV);
    const nieru = rows.find((r) => r.expression === '煮える');
    expect(nieru?.guid).toBe('bik,,M3');
    expect(nieru?.meaning).toBe('to boil, to cook');
  });

  it('unescapes doubled quotes ("") inside a quoted field', () => {
    const rows = parseCsv(SAMPLE_CSV);
    const ji = rows.find((r) => r.expression === '字');
    expect(ji?.meaning).toBe('a "character"');
  });

  it('parses every data row (8 rows, header stripped)', () => {
    const rows = parseCsv(SAMPLE_CSV);
    expect(rows).toHaveLength(8);
    expect(Object.keys(rows[0])).toEqual(['expression', 'reading', 'meaning', 'tags', 'guid']);
  });

  it('skips blank lines and tolerates a missing trailing newline', () => {
    const rows = parseCsv('expression,reading,meaning,tags,guid\n\na,b,c,d,e\n\n');
    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({ expression: 'a', guid: 'e' });
  });

  it('parseCsvRows returns header + data rows', () => {
    const grid = parseCsvRows('h1,h2\nx,y');
    expect(grid).toEqual([
      ['h1', 'h2'],
      ['x', 'y']
    ]);
  });
});

describe('buildWordPool — clean, deterministic word pool', () => {
  it('drops rows missing expression/reading/meaning/guid', () => {
    const pool = buildWordPool([
      { expression: '本', reading: 'ほん', meaning: 'book', guid: 'g1' },
      { expression: '', reading: 'x', meaning: 'y', guid: 'g2' }, // no expression
      { expression: '机', reading: 'つくえ', meaning: '', guid: 'g3' }, // no meaning
      { expression: '猫', reading: 'ねこ', meaning: 'cat', guid: '' } // no guid
    ]);
    expect(pool.map((w) => w.expression)).toEqual(['本']);
  });

  it('de-duplicates by expression (first in guid order wins)', () => {
    const pool = buildWordPool([
      { expression: '生', reading: 'なま', meaning: 'raw', guid: 'g9' },
      { expression: '生', reading: 'せい', meaning: 'life', guid: 'g1' }
    ]);
    expect(pool).toHaveLength(1);
    expect(pool[0].reading).toBe('せい'); // guid g1 < g9
  });

  it('sorts by guid so the result is independent of input row order', () => {
    const rows = [
      { expression: '三', reading: 'さん', meaning: 'three', guid: 'g3' },
      { expression: '一', reading: 'いち', meaning: 'one', guid: 'g1' },
      { expression: '二', reading: 'に', meaning: 'two', guid: 'g2' }
    ];
    const a = buildWordPool(rows);
    const b = buildWordPool([...rows].reverse());
    expect(a).toEqual(b);
    expect(a.map((w) => w.guid)).toEqual(['g1', 'g2', 'g3']);
  });
});

/** Build a synthetic pool of `n` distinct words (enough for distractors). */
function synthPool(n: number) {
  const rows = Array.from({ length: n }, (_, i) => ({
    expression: `語${i}`,
    reading: `よみ${i}`,
    meaning: `meaning ${i}`,
    tags: 'JLPT',
    guid: `g${String(i).padStart(4, '0')}`
  }));
  return buildWordPool(rows);
}

const REF = { id: 'n5-jamsinclair-vocab', level: 'N5' as JlptLevel, title: 'N5 — test', url: 'x' };

describe('buildVocabPaper — deterministic generation', () => {
  it('produces byte-identical papers across two runs (idempotent)', () => {
    const pool = synthPool(60);
    const a = buildVocabPaper(REF, pool, { fetchedAt: '2026-06-21' });
    const b = buildVocabPaper(REF, pool, { fetchedAt: '2026-06-21' });
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });

  it('is independent of the source CSV row order', () => {
    const rows = Array.from({ length: 60 }, (_, i) => ({
      expression: `語${i}`,
      reading: `よみ${i}`,
      meaning: `meaning ${i}`,
      tags: 'JLPT',
      guid: `g${String(i).padStart(4, '0')}`
    }));
    const p1 = buildVocabPaper(REF, buildWordPool(rows), { fetchedAt: '2026-06-21' });
    const p2 = buildVocabPaper(REF, buildWordPool([...rows].reverse()), { fetchedAt: '2026-06-21' });
    expect(JSON.stringify(p1)).toBe(JSON.stringify(p2));
  });

  it('generates ~24 questions in a single vocab section', () => {
    const paper = buildVocabPaper(REF, synthPool(120), { fetchedAt: '2026-06-21' });
    expect(paper.sections).toHaveLength(1);
    expect(paper.sections[0].type).toBe('vocab');
    expect(paper.sections[0].questions).toHaveLength(QUESTIONS_PER_PAPER);
  });

  it('passes the pipeline validator with zero issues', () => {
    const paper = buildVocabPaper(REF, synthPool(80), { fetchedAt: '2026-06-21' });
    expect(validatePaper(paper)).toEqual([]);
  });

  it('stamps MIT provenance + correct id/level/title/duration', () => {
    const paper = buildVocabPaper(REF, synthPool(80), { fetchedAt: '2026-06-21' });
    expect(paper.id).toBe('n5-jamsinclair-vocab');
    expect(paper.level).toBe('N5');
    expect(paper.durationMinutes).toBe(20);
    expect(paper.source).toMatchObject({
      name: 'jamsinclair/open-anki-jlpt-decks',
      license: 'MIT',
      url: 'https://github.com/jamsinclair/open-anki-jlpt-decks'
    });
  });

  it('every question has 4 DISTINCT options and a unique id', () => {
    const paper = buildVocabPaper(REF, synthPool(80), { fetchedAt: '2026-06-21' });
    const seenIds = new Set<string>();
    for (const q of paper.sections[0].questions) {
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4); // distractors distinct from answer + each other
      expect(seenIds.has(q.id)).toBe(false);
      seenIds.add(q.id);
    }
  });

  it('answerIndex points to the correct reading/meaning for the prompted word', () => {
    const pool = synthPool(80);
    const byExpr = new Map(pool.map((w) => [w.expression, w]));
    const paper = buildVocabPaper(REF, pool, { fetchedAt: '2026-06-21' });
    for (const q of paper.sections[0].questions) {
      const m = q.prompt.match(/「(.+?)」/);
      expect(m).not.toBeNull();
      const word = byExpr.get(m![1]);
      expect(word).toBeDefined();
      const isReading = q.prompt.includes('よみかた');
      const expected = isReading ? word!.reading : word!.meaning;
      expect(q.options[q.answerIndex]).toBe(expected);
    }
  });

  it('mixes ~2/3 reading and ~1/3 meaning questions', () => {
    const paper = buildVocabPaper(REF, synthPool(120), { fetchedAt: '2026-06-21' });
    const qs = paper.sections[0].questions;
    const reading = qs.filter((q) => q.prompt.includes('よみかた')).length;
    const meaning = qs.filter((q) => q.prompt.includes('いみ')).length;
    expect(reading + meaning).toBe(qs.length);
    expect(meaning).toBe(Math.floor(qs.length / 3)); // 24 → 8 meaning, 16 reading
    expect(reading).toBeGreaterThan(meaning);
  });

  it('does NOT place every answer at index 0 (deterministic spread)', () => {
    const paper = buildVocabPaper(REF, synthPool(80), { fetchedAt: '2026-06-21' });
    const positions = new Set(paper.sections[0].questions.map((q) => q.answerIndex));
    expect(positions.size).toBeGreaterThan(1);
  });
});

describe('createJamsinclairAdapter — discovery (no network)', () => {
  it('lists one ref per level N5→N1 with correct ids + CSV urls', async () => {
    const adapter = createJamsinclairAdapter();
    expect(adapter.name).toBe('jamsinclair-mit');
    expect(adapter.license).toBe('MIT');
    const refs = await adapter.fetchPaperList();
    expect(refs.map((r) => r.level)).toEqual(['N5', 'N4', 'N3', 'N2', 'N1']);
    expect(refs.map((r) => r.id)).toEqual([
      'n5-jamsinclair-vocab',
      'n4-jamsinclair-vocab',
      'n3-jamsinclair-vocab',
      'n2-jamsinclair-vocab',
      'n1-jamsinclair-vocab'
    ]);
    expect(refs[0].url).toBe(`${CSV_BASE}/n5.csv`);
  });
});

describe('generate.js — merge helpers (orchestrator)', () => {
  it('mergePapers replaces by id and keeps everything else', () => {
    const existing = [
      { id: 'a', level: 'N5' },
      { id: 'b', level: 'N4' }
    ] as unknown as ExamPaper[];
    const produced = [
      { id: 'b', level: 'N4', title: 'new' },
      { id: 'c', level: 'N3' }
    ] as unknown as ExamPaper[];
    const merged = mergePapers(existing, produced);
    expect(merged.map((p) => p.id)).toEqual(['a', 'b', 'c']);
    expect(merged.find((p) => p.id === 'b')).toMatchObject({ title: 'new' });
  });

  it('mergePapers is idempotent (re-merging produced changes nothing)', () => {
    const existing = [{ id: 'a', level: 'N5' }] as unknown as ExamPaper[];
    const produced = [{ id: 'b', level: 'N4' }] as unknown as ExamPaper[];
    const once = mergePapers(existing, produced);
    const twice = mergePapers(once, produced);
    expect(JSON.stringify(twice)).toBe(JSON.stringify(once));
  });

  it('readExistingPapers round-trips a written papers.ts', () => {
    const file = join(tmpdir(), `papers-roundtrip-${process.pid}.ts`);
    const paper = buildVocabPaper(REF, synthPool(40), { fetchedAt: '2026-06-21' });
    try {
      writePapersFile([paper], file);
      const back = readExistingPapers(file);
      expect(back).toHaveLength(1);
      expect(back[0]).toEqual(paper);
    } finally {
      rmSync(file, { force: true });
    }
  });

  it('readExistingPapers returns [] for a missing file', () => {
    expect(readExistingPapers(join(tmpdir(), 'does-not-exist-xyz.ts'))).toEqual([]);
  });
});
