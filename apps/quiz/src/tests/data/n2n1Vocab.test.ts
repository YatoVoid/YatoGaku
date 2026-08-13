/**
 * Tests for N2 and N1 Vocabulary Reference Data
 * TDD: Write tests first, then implement
 */

import { describe, it, expect } from 'vitest';
import { N2_VOCAB_DATA, getN2VocabByGroup } from '$lib/data/vocab/n2';
import { N1_VOCAB_DATA, getN1VocabByGroup } from '$lib/data/vocab/n1';
import { KANJI_N2_DATA } from '$lib/data/kanji/kanji-n2';
import { KANJI_N1_DATA } from '$lib/data/kanji/kanji-n1';

describe('N2 Vocabulary', () => {
  it('has at least 200 vocabulary items', () => {
    expect(N2_VOCAB_DATA.length).toBeGreaterThanOrEqual(200);
  });

  it('each item has japanese, kana, vietnamese, english', () => {
    for (const item of N2_VOCAB_DATA.slice(0, 50)) {
      expect(item.japanese).toBeTruthy();
      expect(item.kana).toBeTruthy();
      expect(item.vietnamese).toBeTruthy();
      expect(item.english).toBeTruthy();
    }
  });

  it('items are grouped by category', () => {
    const groups = getN2VocabByGroup();
    expect(Object.keys(groups).length).toBeGreaterThanOrEqual(3);
  });

  it('N2 kanji have at least 1 example each (sample)', () => {
    const sample = KANJI_N2_DATA.slice(0, 50);
    for (const k of sample) {
      expect(k.examples.length).toBeGreaterThanOrEqual(1);
    }
  });
});

describe('N1 Vocabulary', () => {
  it('has at least 200 vocabulary items', () => {
    expect(N1_VOCAB_DATA.length).toBeGreaterThanOrEqual(200);
  });

  it('each item has japanese, kana, vietnamese, english', () => {
    for (const item of N1_VOCAB_DATA.slice(0, 50)) {
      expect(item.japanese).toBeTruthy();
      expect(item.kana).toBeTruthy();
      expect(item.vietnamese).toBeTruthy();
      expect(item.english).toBeTruthy();
    }
  });

  it('items are grouped by category', () => {
    const groups = getN1VocabByGroup();
    expect(Object.keys(groups).length).toBeGreaterThanOrEqual(3);
  });

  it('N1 kanji have at least 1 example each (sample)', () => {
    const sample = KANJI_N1_DATA.slice(0, 50);
    for (const k of sample) {
      expect(k.examples.length).toBeGreaterThanOrEqual(1);
    }
  });
});
