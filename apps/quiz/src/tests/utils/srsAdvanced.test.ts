/**
 * Tests for Advanced SRS Extension
 * TDD: Write tests first, then implement
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  reviewItem,
  getDueItems,
  getDueCount,
  getDueItemsByType,
  getDueCountByType,
  getReviewStreak,
  recordReviewDay,
  getReviewStats,
  loadSRS
} from '$lib/utils/srsUtils';
import type { ProgressState } from '$lib/types';

// Mock localStorage
const storage: Record<string, string> = {};
beforeEach(() => {
  Object.keys(storage).forEach(key => delete storage[key]);
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => storage[key] || null),
    setItem: vi.fn((key: string, val: string) => { storage[key] = val; }),
    removeItem: vi.fn((key: string) => { delete storage[key]; }),
    clear: vi.fn()
  });
});

const emptyProgress: ProgressState = {
  lessons: {},
  hsk: {},
  settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true }
};

describe('SRS Extension', () => {
  it('reviewItem supports itemType field', () => {
    const result = reviewItem('kanji_悪', 0, 4, 'kanji');
    expect(result.itemType).toBe('kanji');
    expect(result.interval).toBe(1);
  });

  it('getDueItemsByType filters by item type (vocab/kanji)', () => {
    // Add a vocab and a kanji item
    reviewItem('vocab_食べる', 1, 4, 'vocab');
    reviewItem('kanji_悪', 0, 4, 'kanji');

    // Set both to be due now
    const srs = loadSRS();
    for (const key of Object.keys(srs.items)) {
      srs.items[key].nextReview = Date.now() - 1000;
    }
    localStorage.setItem('smart_quiz_srs', JSON.stringify(srs));

    const vocabDue = getDueItemsByType('vocab');
    const kanjiDue = getDueItemsByType('kanji');
    expect(vocabDue.length).toBeGreaterThanOrEqual(1);
    expect(kanjiDue.length).toBeGreaterThanOrEqual(1);
    expect(vocabDue.every(i => i.itemType === 'vocab')).toBe(true);
    expect(kanjiDue.every(i => i.itemType === 'kanji')).toBe(true);
  });

  it('getDueCountByType returns correct count per type', () => {
    reviewItem('v1', 1, 4, 'vocab');
    reviewItem('k1', 0, 4, 'kanji');

    const srs = loadSRS();
    for (const key of Object.keys(srs.items)) {
      srs.items[key].nextReview = Date.now() - 1000;
    }
    localStorage.setItem('smart_quiz_srs', JSON.stringify(srs));

    const vocabCount = getDueCountByType('vocab');
    const kanjiCount = getDueCountByType('kanji');
    expect(vocabCount).toBeGreaterThanOrEqual(1);
    expect(kanjiCount).toBeGreaterThanOrEqual(1);
  });

  it('getReviewStreak returns consecutive review days', () => {
    // No reviews yet → streak 0
    expect(getReviewStreak()).toBe(0);

    // Record today
    recordReviewDay();
    expect(getReviewStreak()).toBeGreaterThanOrEqual(1);
  });

  it('getReviewStats returns daily stats', () => {
    const stats = getReviewStats();
    expect(stats).toHaveProperty('todayCompleted');
    expect(stats).toHaveProperty('todayTotal');
    expect(stats).toHaveProperty('streak');
    expect(typeof stats.todayCompleted).toBe('number');
  });
});

describe('Review Page Support', () => {
  it('getDueItems returns items with itemType', () => {
    reviewItem('test1', 1, 4, 'vocab');
    const srs = loadSRS();
    srs.items['test1'].nextReview = Date.now() - 1000;
    localStorage.setItem('smart_quiz_srs', JSON.stringify(srs));

    const due = getDueItems(emptyProgress);
    const found = due.find(d => d.itemId === 'test1');
    expect(found).toBeDefined();
    expect(found?.itemType).toBe('vocab');
  });

  it('handles empty SRS state gracefully', () => {
    const due = getDueItems(emptyProgress);
    expect(Array.isArray(due)).toBe(true);

    const stats = getReviewStats();
    expect(stats.streak).toBe(0);
    expect(stats.todayCompleted).toBe(0);
  });

  it('recordReviewDay is idempotent within same day', () => {
    recordReviewDay();
    recordReviewDay();
    recordReviewDay();
    expect(getReviewStreak()).toBe(1);
  });

  it('getDueItemsByType returns all when type is undefined', () => {
    reviewItem('a1', 1, 4, 'vocab');
    reviewItem('b1', 0, 4, 'kanji');
    const srs = loadSRS();
    for (const key of Object.keys(srs.items)) {
      srs.items[key].nextReview = Date.now() - 1000;
    }
    localStorage.setItem('smart_quiz_srs', JSON.stringify(srs));

    const all = getDueItemsByType();
    expect(all.length).toBeGreaterThanOrEqual(2);
  });
});
