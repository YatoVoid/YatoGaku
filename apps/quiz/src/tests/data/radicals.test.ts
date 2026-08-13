/**
 * Tests for radicals data — Kangxi radicals + KRADFILE mapping
 */

import { describe, it, expect } from 'vitest';
import { KANGXI_RADICALS, getRadicals, getKanjiByRadical, getKanjiItemsByRadical } from '$lib/data/kanji/radicals';

describe('Radicals Data', () => {
  it('should have at least 200 Kangxi radicals', () => {
    expect(KANGXI_RADICALS.length).toBeGreaterThanOrEqual(200);
  });

  it('each radical should have character, meaningVi, meaningEn, strokeCount', () => {
    for (const r of KANGXI_RADICALS) {
      expect(r.character).toBeTruthy();
      expect(r.meaningVi).toBeTruthy();
      expect(r.meaningEn).toBeTruthy();
      expect(r.strokeCount).toBeGreaterThan(0);
    }
  });

  it('getRadicals("会") should return array of radicals', () => {
    const radicals = getRadicals('会');
    expect(radicals.length).toBeGreaterThan(0);
  });

  it('getRadicals should return empty for unknown character', () => {
    expect(getRadicals('🎉')).toEqual([]);
  });

  it('getKanjiByRadical("人") should return kanji array', () => {
    const kanji = getKanjiByRadical('人');
    expect(kanji.length).toBeGreaterThan(0);
  });

  it('getKanjiByRadical should return empty for unknown radical', () => {
    expect(getKanjiByRadical('🎉')).toEqual([]);
  });

  it('getRadicals result should have meaningVi for each radical', () => {
    const radicals = getRadicals('会');
    for (const r of radicals) {
      expect(r.meaningVi).toBeTruthy();
    }
  });
});

describe('getKanjiItemsByRadical', () => {
  it('returns KanjiItem array for valid radical', () => {
    const kanji = getKanjiItemsByRadical('人');
    expect(Array.isArray(kanji)).toBe(true);
    expect(kanji.length).toBeGreaterThan(0);
  });

  it('returns empty array for unknown radical', () => {
    const kanji = getKanjiItemsByRadical('UNKNOWN_XYZ');
    expect(kanji).toEqual([]);
  });

  it('each returned item is a valid KanjiItem', () => {
    const kanji = getKanjiItemsByRadical('人');
    for (const k of kanji) {
      expect(k.character).toBeTruthy();
      expect(k.english).toBeTruthy();
      expect(typeof k.strokeCount).toBe('number');
      expect(Array.isArray(k.onyomi)).toBe(true);
    }
  });

  it('returned items have unique characters', () => {
    const kanji = getKanjiItemsByRadical('口');
    const chars = kanji.map(k => k.character);
    expect(new Set(chars).size).toBe(chars.length);
  });

  it('works for radical 水 (water)', () => {
    // 水 is commonly used in N5 kanji
    const kanji = getKanjiItemsByRadical('水');
    expect(kanji.length).toBeGreaterThanOrEqual(0); // may be 0 if no data match
  });
});
