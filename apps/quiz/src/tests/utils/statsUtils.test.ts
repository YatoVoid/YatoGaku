/**
 * Tests for statsUtils
 */

import { describe, it, expect } from 'vitest';
import {
  computeOverviewStats,
  computeLessonStats,
  getMasteryLabel,
  getMasteryColor,
  formatLastStudied
} from '$lib/utils/statsUtils';
import type { ProgressState } from '$lib/types';

function makeState(overrides: Partial<ProgressState> = {}): ProgressState {
  return {
    lessons: {},
    hsk: {},
    settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true },
    ...overrides
  };
}

describe('computeOverviewStats', () => {
  it('should return zero stats for empty state', () => {
    const stats = computeOverviewStats(makeState());
    expect(stats.totalLessons).toBe(0);
    expect(stats.totalWords).toBe(0);
    expect(stats.totalCorrect).toBe(0);
    expect(stats.totalWrong).toBe(0);
    expect(stats.accuracy).toBe(0);
    expect(stats.masteryDistribution).toEqual([0, 0, 0, 0, 0, 0]);
  });

  it('should compute stats from lesson progress', () => {
    const state = makeState({
      lessons: {
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'word1': { itemId: 'word1', correctCount: 8, wrongCount: 2, lastReviewed: Date.now(), masteryLevel: 3 },
            'word2': { itemId: 'word2', correctCount: 5, wrongCount: 5, lastReviewed: Date.now(), masteryLevel: 1 }
          },
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    const stats = computeOverviewStats(state);
    expect(stats.totalLessons).toBe(1);
    expect(stats.totalWords).toBe(2);
    expect(stats.totalCorrect).toBe(13);
    expect(stats.totalWrong).toBe(7);
    expect(stats.accuracy).toBe(65);
    expect(stats.masteryDistribution[1]).toBe(1);
    expect(stats.masteryDistribution[3]).toBe(1);
  });

  it('should include hsk progress', () => {
    const state = makeState({
      hsk: {
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'hsk1': { itemId: 'hsk1', correctCount: 3, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 5 }
          },
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    const stats = computeOverviewStats(state);
    expect(stats.totalLessons).toBe(1);
    expect(stats.totalWords).toBe(1);
    expect(stats.masteryDistribution[5]).toBe(1);
  });
});

describe('computeLessonStats', () => {
  it('should return empty for no lessons', () => {
    expect(computeLessonStats(makeState())).toEqual([]);
  });

  it('should compute lesson stats sorted by lesson number', () => {
    const state = makeState({
      lessons: {
        3: {
          lessonNumber: 3,
          vocabProgress: {
            'w1': { itemId: 'w1', correctCount: 4, wrongCount: 1, lastReviewed: Date.now(), masteryLevel: 2 }
          },
          grammarProgress: {},
          lastStudied: 1000,
          totalQuizzes: 0
        },
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'w2': { itemId: 'w2', correctCount: 10, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 5 }
          },
          grammarProgress: {},
          lastStudied: 2000,
          totalQuizzes: 0
        }
      }
    });

    const stats = computeLessonStats(state);
    expect(stats.length).toBe(2);
    expect(stats[0].lessonNumber).toBe(1);
    expect(stats[0].accuracy).toBe(100);
    expect(stats[0].avgMastery).toBe(5);
    expect(stats[1].lessonNumber).toBe(3);
    expect(stats[1].accuracy).toBe(80);
  });

  it('should skip lessons with no vocab progress', () => {
    const state = makeState({
      lessons: {
        1: {
          lessonNumber: 1,
          vocabProgress: {},
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    expect(computeLessonStats(state)).toEqual([]);
  });
});

describe('getMasteryLabel', () => {
  it('should return correct labels', () => {
    expect(getMasteryLabel(0)).toBe('New');
    expect(getMasteryLabel(1)).toBe('Learning');
    expect(getMasteryLabel(2)).toBe('Familiar');
    expect(getMasteryLabel(3)).toBe('Good');
    expect(getMasteryLabel(4)).toBe('Strong');
    expect(getMasteryLabel(5)).toBe('Mastered');
  });

  it('should return Unknown for invalid level', () => {
    expect(getMasteryLabel(6)).toBe('Unknown');
    expect(getMasteryLabel(-1)).toBe('Unknown');
  });
});

describe('getMasteryColor', () => {
  it('should return a color for each level', () => {
    for (let i = 0; i <= 5; i++) {
      expect(getMasteryColor(i)).toMatch(/^#[0-9a-f]{6}$/);
    }
  });

  it('should return default for invalid level', () => {
    expect(getMasteryColor(99)).toBe('#94a3b8');
  });
});

describe('formatLastStudied', () => {
  it('should return "Just now" for recent timestamps', () => {
    expect(formatLastStudied(Date.now())).toBe('Just now');
  });

  it('should return minutes ago', () => {
    expect(formatLastStudied(Date.now() - 5 * 60000)).toBe('5m ago');
  });

  it('should return hours ago', () => {
    expect(formatLastStudied(Date.now() - 3 * 3600000)).toBe('3h ago');
  });

  it('should return days ago', () => {
    expect(formatLastStudied(Date.now() - 2 * 86400000)).toBe('2d ago');
  });

  it('should return date for old timestamps', () => {
    const old = Date.now() - 30 * 86400000;
    const result = formatLastStudied(old);
    expect(result).not.toContain('ago');
  });
});
