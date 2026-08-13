/**
 * Tests for srsUtils (Spaced Repetition System)
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { loadSRS, reviewItem, getDueItems, getDueCount } from '$lib/utils/srsUtils';
import type { ProgressState } from '$lib/types';

beforeEach(() => {
  localStorage.clear();
});

function makeState(overrides: Partial<ProgressState> = {}): ProgressState {
  return {
    lessons: {},
    hsk: {},
    settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true },
    ...overrides
  };
}

describe('loadSRS', () => {
  it('should return empty state when no data', () => {
    const srs = loadSRS();
    expect(srs.items).toEqual({});
  });

  it('should load saved SRS data', () => {
    localStorage.setItem('smart_quiz_srs', JSON.stringify({
      items: { 'w1': { itemId: 'w1', lessonNumber: 1, interval: 1, easeFactor: 2.5, nextReview: 1000, repetitions: 1 } }
    }));

    const srs = loadSRS();
    expect(srs.items['w1'].interval).toBe(1);
  });
});

describe('reviewItem', () => {
  it('should create new SRS item on first review', () => {
    const item = reviewItem('w1', 1, 4);
    expect(item.itemId).toBe('w1');
    expect(item.lessonNumber).toBe(1);
    expect(item.interval).toBe(1);
    expect(item.repetitions).toBe(1);
  });

  it('should increase interval on correct answer (quality >= 3)', () => {
    reviewItem('w1', 1, 4); // rep 1, interval 1
    const item2 = reviewItem('w1', 1, 4); // rep 2, interval 6
    expect(item2.interval).toBe(6);
    expect(item2.repetitions).toBe(2);
  });

  it('should reset on incorrect answer (quality < 3)', () => {
    reviewItem('w1', 1, 4);
    reviewItem('w1', 1, 4);
    const item3 = reviewItem('w1', 1, 1); // fail
    expect(item3.interval).toBe(1);
    expect(item3.repetitions).toBe(0);
  });

  it('should update ease factor', () => {
    const item = reviewItem('w1', 1, 5); // highest quality
    expect(item.easeFactor).toBeGreaterThanOrEqual(2.5);
  });

  it('should not let ease factor drop below 1.3', () => {
    reviewItem('w1', 1, 0);
    reviewItem('w1', 1, 0);
    reviewItem('w1', 1, 0);
    const item = reviewItem('w1', 1, 0);
    expect(item.easeFactor).toBeGreaterThanOrEqual(1.3);
  });

  it('should set nextReview in the future', () => {
    const item = reviewItem('w1', 1, 4);
    expect(item.nextReview).toBeGreaterThan(Date.now() - 1000);
  });

  it('should persist to localStorage', () => {
    reviewItem('w1', 1, 4);
    expect(localStorage.getItem('smart_quiz_srs')).toBeDefined();
    const saved = JSON.parse(localStorage.getItem('smart_quiz_srs')!);
    expect(saved.items['w1']).toBeDefined();
  });
});

describe('getDueItems', () => {
  it('should return empty for fresh state', () => {
    const due = getDueItems(makeState());
    expect(due).toEqual([]);
  });

  it('should return items from progress not yet in SRS', () => {
    const state = makeState({
      lessons: {
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'w1': { itemId: 'w1', correctCount: 1, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 1 }
          },
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    const due = getDueItems(state);
    expect(due.length).toBe(1);
    expect(due[0].itemId).toBe('w1');
  });

  it('should return items with past nextReview', () => {
    localStorage.setItem('smart_quiz_srs', JSON.stringify({
      items: {
        'w1': { itemId: 'w1', lessonNumber: 1, interval: 1, easeFactor: 2.5, nextReview: Date.now() - 100000, repetitions: 1 }
      }
    }));

    const due = getDueItems(makeState());
    expect(due.length).toBe(1);
  });

  it('should not return items with future nextReview', () => {
    localStorage.setItem('smart_quiz_srs', JSON.stringify({
      items: {
        'w1': { itemId: 'w1', lessonNumber: 1, interval: 1, easeFactor: 2.5, nextReview: Date.now() + 86400000, repetitions: 1 }
      }
    }));

    const due = getDueItems(makeState());
    expect(due.length).toBe(0);
  });
});

describe('getDueCount', () => {
  it('should return 0 for empty state', () => {
    expect(getDueCount(makeState())).toBe(0);
  });

  it('should match getDueItems length', () => {
    const state = makeState({
      lessons: {
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'w1': { itemId: 'w1', correctCount: 1, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 1 },
            'w2': { itemId: 'w2', correctCount: 1, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 0 }
          },
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    expect(getDueCount(state)).toBe(getDueItems(state).length);
  });
});
