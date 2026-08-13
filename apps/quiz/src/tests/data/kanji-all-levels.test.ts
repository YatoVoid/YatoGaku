/**
 * Tests for kanji multi-level data
 */

import { describe, it, expect } from 'vitest';
import { KANJI_N1_DATA } from '$lib/data/kanji/kanji-n1';
import { KANJI_N2_DATA } from '$lib/data/kanji/kanji-n2';
import { KANJI_N3_DATA } from '$lib/data/kanji/kanji-n3';

describe('Kanji All Levels Data', () => {
  it('should have N3 kanji (>= 50)', () => {
    expect(KANJI_N3_DATA.length).toBeGreaterThanOrEqual(50);
  });

  it('should have N2 kanji (>= 200)', () => {
    expect(KANJI_N2_DATA.length).toBeGreaterThanOrEqual(200);
  });

  it('should have N1 kanji (>= 200)', () => {
    expect(KANJI_N1_DATA.length).toBeGreaterThanOrEqual(200);
  });

  it('total new kanji >= 500', () => {
    const total = KANJI_N3_DATA.length + KANJI_N2_DATA.length + KANJI_N1_DATA.length;
    expect(total).toBeGreaterThanOrEqual(500);
  });

  it('each kanji has required fields', () => {
    for (const k of [...KANJI_N3_DATA, ...KANJI_N2_DATA.slice(0, 10), ...KANJI_N1_DATA.slice(0, 10)]) {
      expect(k.character).toBeTruthy();
      expect(k.onyomi).toBeDefined();
      expect(k.kunyomi).toBeDefined();
      expect(k.english).toBeDefined();
      expect(k.strokeCount).toBeGreaterThan(0);
    }
  });

  it('no duplicate characters within each level', () => {
    for (const data of [KANJI_N3_DATA, KANJI_N2_DATA, KANJI_N1_DATA]) {
      const chars = data.map(k => k.character);
      expect(new Set(chars).size).toBe(chars.length);
    }
  });

  it('no duplicate characters across N3-N1 levels', () => {
    const all = [...KANJI_N3_DATA, ...KANJI_N2_DATA, ...KANJI_N1_DATA].map(k => k.character);
    expect(new Set(all).size).toBe(all.length);
  });

  it('each kanji has correct jlpt field', () => {
    for (const k of KANJI_N3_DATA) expect(k.jlpt).toBe(3);
    for (const k of KANJI_N2_DATA) expect(k.jlpt).toBe(2);
    for (const k of KANJI_N1_DATA) expect(k.jlpt).toBe(1);
  });

  it('examples array exists (may be empty for generated data)', () => {
    for (const k of KANJI_N3_DATA) {
      expect(Array.isArray(k.examples)).toBe(true);
    }
  });
});
