/**
 * Tests for N2/N1 kanji example data quality.
 * Verifies: kana field (not reading), vietnamese field, ≥ 3 examples per kanji.
 */

import { describe, it, expect } from 'vitest';
import { KANJI_N2_DATA } from '$lib/data/kanji/kanji-n2';
import { KANJI_N1_DATA } from '$lib/data/kanji/kanji-n1';

const kanaRegex = /^[\u3040-\u309F\u30A0-\u30FF\u30FC\s・ー]+$/;

describe('N2 Kanji Examples', () => {
  it('every N2 kanji has at least 3 examples', () => {
    for (const k of KANJI_N2_DATA) {
      expect(k.examples.length, `${k.character} has only ${k.examples.length} examples`).toBeGreaterThanOrEqual(3);
    }
  });

  it('each example has kana field (not reading)', () => {
    for (const k of KANJI_N2_DATA) {
      for (const ex of k.examples) {
        expect(ex.kana, `${k.character} example "${ex.word}" missing kana`).toBeTruthy();
        expect((ex as any).reading, `${k.character} example "${ex.word}" should not have reading field`).toBeUndefined();
      }
    }
  });

  it('each example has vietnamese translation', () => {
    for (const k of KANJI_N2_DATA) {
      for (const ex of k.examples) {
        expect(ex.vietnamese, `${k.character} example "${ex.word}" missing vietnamese`).toBeTruthy();
      }
    }
  });

  it('each example has word and meaning', () => {
    for (const k of KANJI_N2_DATA) {
      for (const ex of k.examples) {
        expect(ex.word, `${k.character} example missing word`).toBeTruthy();
        expect(ex.meaning, `${k.character} example missing meaning`).toBeTruthy();
      }
    }
  });

  it('example kana contains valid kana characters', () => {
    for (const k of KANJI_N2_DATA) {
      for (const ex of k.examples) {
        expect(kanaRegex.test(ex.kana), `${k.character} "${ex.word}" invalid kana: "${ex.kana}"`).toBe(true);
      }
    }
  });

  it('at least one example word contains the kanji character', () => {
    for (const k of KANJI_N2_DATA) {
      const hasKanji = k.examples.some(ex => ex.word.includes(k.character));
      expect(hasKanji, `${k.character} has no example word containing the kanji`).toBe(true);
    }
  });

  it('N2 has >= 1200 total examples', () => {
    const total = KANJI_N2_DATA.reduce((s, k) => s + k.examples.length, 0);
    expect(total).toBeGreaterThanOrEqual(1200);
  });
});

describe('N1 Kanji Examples', () => {
  it('every N1 kanji has at least 3 examples', () => {
    for (const k of KANJI_N1_DATA) {
      expect(k.examples.length, `${k.character} has only ${k.examples.length} examples`).toBeGreaterThanOrEqual(3);
    }
  });

  it('each example has kana field (not reading)', () => {
    for (const k of KANJI_N1_DATA) {
      for (const ex of k.examples) {
        expect(ex.kana, `${k.character} example "${ex.word}" missing kana`).toBeTruthy();
        expect((ex as any).reading, `${k.character} example "${ex.word}" should not have reading field`).toBeUndefined();
      }
    }
  });

  it('each example has vietnamese translation', () => {
    for (const k of KANJI_N1_DATA) {
      for (const ex of k.examples) {
        expect(ex.vietnamese, `${k.character} example "${ex.word}" missing vietnamese`).toBeTruthy();
      }
    }
  });

  it('each example has word and meaning', () => {
    for (const k of KANJI_N1_DATA) {
      for (const ex of k.examples) {
        expect(ex.word, `${k.character} example missing word`).toBeTruthy();
        expect(ex.meaning, `${k.character} example missing meaning`).toBeTruthy();
      }
    }
  });

  it('example kana contains valid kana characters', () => {
    for (const k of KANJI_N1_DATA) {
      for (const ex of k.examples) {
        expect(kanaRegex.test(ex.kana), `${k.character} "${ex.word}" invalid kana: "${ex.kana}"`).toBe(true);
      }
    }
  });

  it('at least one example word contains the kanji character', () => {
    for (const k of KANJI_N1_DATA) {
      const hasKanji = k.examples.some(ex => ex.word.includes(k.character));
      expect(hasKanji, `${k.character} has no example word containing the kanji`).toBe(true);
    }
  });

  it('N1 has >= 1200 total examples', () => {
    const total = KANJI_N1_DATA.reduce((s, k) => s + k.examples.length, 0);
    expect(total).toBeGreaterThanOrEqual(1200);
  });
});
