/**
 * Tests for progressUtils — mastery calculation and lesson unlocking
 */

import { describe, it, expect } from 'vitest';
import { getLessonMastery, isLessonUnlocked, getNextLesson, getCourseProgress } from '$lib/utils/progressUtils';
import type { ProgressState } from '$lib/types';

function makeState(lessons: Record<number, any> = {}): ProgressState {
  return { lessons, hsk: {}, settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true } };
}

function makeLesson(lessonNumber: number, vocabProgress: Record<string, { masteryLevel: number }>) {
  const vp: Record<string, any> = {};
  for (const [id, { masteryLevel }] of Object.entries(vocabProgress)) {
    vp[id] = { itemId: id, correctCount: 0, wrongCount: 0, lastReviewed: Date.now(), masteryLevel };
  }
  return { lessonNumber, vocabProgress: vp, grammarProgress: {}, lastStudied: Date.now(), totalQuizzes: 0 };
}

describe('getLessonMastery', () => {
  it('should return 0 for lesson with no progress', () => {
    expect(getLessonMastery(makeState(), 'n5', 1)).toBe(0);
  });

  it('should return percentage of items with masteryLevel >= 3', () => {
    const state = makeState({
      1: makeLesson(1, { w1: { masteryLevel: 4 }, w2: { masteryLevel: 2 }, w3: { masteryLevel: 3 }, w4: { masteryLevel: 1 } })
    });
    expect(getLessonMastery(state, 'n5', 1)).toBe(50);
  });

  it('should return 100 when all items mastered', () => {
    const state = makeState({
      1: makeLesson(1, { w1: { masteryLevel: 5 }, w2: { masteryLevel: 3 } })
    });
    expect(getLessonMastery(state, 'n5', 1)).toBe(100);
  });

  it('should handle missing lesson gracefully', () => {
    expect(getLessonMastery(makeState(), 'n5', 99)).toBe(0);
  });
});

describe('isLessonUnlocked', () => {
  it('should always return true — no lesson locking', () => {
    expect(isLessonUnlocked(makeState(), 'n5', 1)).toBe(true);
    expect(isLessonUnlocked(makeState(), 'n5', 2)).toBe(true);
    expect(isLessonUnlocked(makeState(), 'n5', 25)).toBe(true);
  });
});

describe('getNextLesson', () => {
  it('should return 1 for fresh user', () => {
    expect(getNextLesson(makeState(), 'n5')).toBe(1);
  });

  it('should return first non-mastered lesson', () => {
    const state = makeState({
      1: makeLesson(1, { w1: { masteryLevel: 5 }, w2: { masteryLevel: 5 } })
    });
    expect(getNextLesson(state, 'n5')).toBe(2);
  });
});

describe('getCourseProgress', () => {
  it('should return 0/total for fresh user', () => {
    const result = getCourseProgress(makeState(), 'n5');
    expect(result.completed).toBe(0);
    expect(result.total).toBeGreaterThan(0);
  });

  it('should count lessons with mastery >= 70% as completed', () => {
    const state = makeState({
      1: makeLesson(1, { w1: { masteryLevel: 5 }, w2: { masteryLevel: 4 }, w3: { masteryLevel: 3 } })
    });
    const result = getCourseProgress(state, 'n5');
    expect(result.completed).toBe(1);
  });

  it('should calculate percentage', () => {
    const result = getCourseProgress(makeState(), 'n5');
    expect(result.percentage).toBe(0);
  });
});
