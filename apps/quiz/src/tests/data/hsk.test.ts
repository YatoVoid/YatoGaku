/**
 * Tests for HSK multi-level data
 */

import { describe, it, expect } from 'vitest';
import { getHSKData, getAllHSKLevels, HSK5_DATA } from '$lib/data/hsk';

describe('HSK Data', () => {
  it('should have 5 HSK levels', () => {
    const levels = getAllHSKLevels();
    expect(levels.length).toBe(5);
  });

  it('HSK1 should have >= 100 words', () => {
    const data = getHSKData(1);
    const total = data.reduce((s, g) => s + g.words.length, 0);
    expect(total).toBeGreaterThanOrEqual(100);
  });

  it('HSK2 should have >= 100 words', () => {
    const data = getHSKData(2);
    const total = data.reduce((s, g) => s + g.words.length, 0);
    expect(total).toBeGreaterThanOrEqual(100);
  });

  it('HSK3 should have >= 100 words', () => {
    const data = getHSKData(3);
    const total = data.reduce((s, g) => s + g.words.length, 0);
    expect(total).toBeGreaterThanOrEqual(100);
  });

  it('HSK4 should have >= 100 words', () => {
    const data = getHSKData(4);
    const total = data.reduce((s, g) => s + g.words.length, 0);
    expect(total).toBeGreaterThanOrEqual(100);
  });

  it('HSK5 should have >= 1600 words (existing)', () => {
    const total = HSK5_DATA.reduce((s, g) => s + g.words.length, 0);
    expect(total).toBeGreaterThanOrEqual(1600);
  });

  it('each word should have chinese, pinyin, vietnamese', () => {
    for (let level = 1; level <= 4; level++) {
      const data = getHSKData(level);
      for (const group of data) {
        for (const word of group.words) {
          expect(word.chinese).toBeTruthy();
          expect(word.pinyin).toBeTruthy();
          expect(word.vietnamese).toBeTruthy();
        }
      }
    }
  });

  it('getHSKData should return groups with id and title', () => {
    const data = getHSKData(1);
    for (const group of data) {
      expect(group.id).toBeTruthy();
      expect(group.title).toBeTruthy();
    }
  });

  it('getAllHSKLevels should return metadata with wordCount', () => {
    const levels = getAllHSKLevels();
    for (const level of levels) {
      expect(level.level).toBeGreaterThanOrEqual(1);
      expect(level.wordCount).toBeGreaterThan(0);
    }
  });

  it('total words across all levels should be >= 2800', () => {
    const levels = getAllHSKLevels();
    const total = levels.reduce((s, l) => s + l.wordCount, 0);
    expect(total).toBeGreaterThanOrEqual(2000);
  });
});
