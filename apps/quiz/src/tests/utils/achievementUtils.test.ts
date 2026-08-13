/**
 * Tests for achievementUtils
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadStreak,
  recordStudySession,
  checkAchievements
} from '$lib/utils/achievementUtils';
import type { StreakData } from '$lib/utils/achievementUtils';
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

function emptyStreak(): StreakData {
  return { currentStreak: 0, longestStreak: 0, lastStudyDate: '', totalDays: 0 };
}

describe('loadStreak', () => {
  it('should return empty streak when no data', () => {
    const streak = loadStreak();
    expect(streak.currentStreak).toBe(0);
    expect(streak.longestStreak).toBe(0);
    expect(streak.totalDays).toBe(0);
  });

  it('should load saved streak', () => {
    const data: StreakData = { currentStreak: 5, longestStreak: 10, lastStudyDate: '2026-03-20', totalDays: 30 };
    localStorage.setItem('smart_quiz_streak', JSON.stringify(data));

    const streak = loadStreak();
    expect(streak.currentStreak).toBe(5);
    expect(streak.longestStreak).toBe(10);
    expect(streak.totalDays).toBe(30);
  });
});

describe('recordStudySession', () => {
  it('should start streak at 1 on first study', () => {
    const streak = recordStudySession();
    expect(streak.currentStreak).toBe(1);
    expect(streak.totalDays).toBe(1);
  });

  it('should not increment if already recorded today', () => {
    const first = recordStudySession();
    const second = recordStudySession();
    expect(second.currentStreak).toBe(first.currentStreak);
    expect(second.totalDays).toBe(first.totalDays);
  });

  it('should save to localStorage', () => {
    recordStudySession();
    expect(localStorage.getItem('smart_quiz_streak')).toBeDefined();
    const saved = JSON.parse(localStorage.getItem('smart_quiz_streak')!);
    expect(saved.currentStreak).toBe(1);
  });
});

describe('checkAchievements', () => {
  it('should return all locked for empty state', () => {
    const achievements = checkAchievements(makeState(), emptyStreak());
    const unlocked = achievements.filter(a => a.unlocked);
    expect(unlocked.length).toBe(0);
  });

  it('should unlock first-quiz when correctCount > 0', () => {
    const state = makeState({
      lessons: {
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'w1': { itemId: 'w1', correctCount: 1, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 0 }
          },
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    const achievements = checkAchievements(state, emptyStreak());
    const firstQuiz = achievements.find(a => a.id === 'first-quiz');
    expect(firstQuiz?.unlocked).toBe(true);
  });

  it('should unlock 50-correct milestone', () => {
    const state = makeState({
      lessons: {
        1: {
          lessonNumber: 1,
          vocabProgress: {
            'w1': { itemId: 'w1', correctCount: 50, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 3 }
          },
          grammarProgress: {},
          lastStudied: Date.now(),
          totalQuizzes: 0
        }
      }
    });

    const achievements = checkAchievements(state, emptyStreak());
    const halfCentury = achievements.find(a => a.id === '50-correct');
    expect(halfCentury?.unlocked).toBe(true);
  });

  it('should unlock streak achievements', () => {
    const streak: StreakData = { currentStreak: 7, longestStreak: 7, lastStudyDate: '2026-03-23', totalDays: 10 };
    const achievements = checkAchievements(makeState(), streak);

    expect(achievements.find(a => a.id === 'streak-3')?.unlocked).toBe(true);
    expect(achievements.find(a => a.id === 'streak-7')?.unlocked).toBe(true);
    expect(achievements.find(a => a.id === 'streak-30')?.unlocked).toBe(false);
  });

  it('should unlock word count achievements', () => {
    const vocabProgress: Record<string, any> = {};
    for (let i = 0; i < 50; i++) {
      vocabProgress[`w${i}`] = { itemId: `w${i}`, correctCount: 1, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 0 };
    }

    const state = makeState({
      lessons: {
        1: { lessonNumber: 1, vocabProgress, grammarProgress: {}, lastStudied: Date.now(), totalQuizzes: 0 }
      }
    });

    const achievements = checkAchievements(state, emptyStreak());
    expect(achievements.find(a => a.id === '10-words')?.unlocked).toBe(true);
    expect(achievements.find(a => a.id === '50-words')?.unlocked).toBe(true);
    expect(achievements.find(a => a.id === '100-words')?.unlocked).toBe(false);
  });

  it('should unlock mastery achievements', () => {
    const vocabProgress: Record<string, any> = {};
    for (let i = 0; i < 5; i++) {
      vocabProgress[`w${i}`] = { itemId: `w${i}`, correctCount: 10, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 5 };
    }

    const state = makeState({
      lessons: {
        1: { lessonNumber: 1, vocabProgress, grammarProgress: {}, lastStudied: Date.now(), totalQuizzes: 0 }
      }
    });

    const achievements = checkAchievements(state, emptyStreak());
    expect(achievements.find(a => a.id === '5-mastered')?.unlocked).toBe(true);
    expect(achievements.find(a => a.id === '25-mastered')?.unlocked).toBe(false);
  });

  it('should unlock lesson count achievements', () => {
    const lessons: Record<number, any> = {};
    for (let i = 1; i <= 3; i++) {
      lessons[i] = {
        lessonNumber: i,
        vocabProgress: { [`w${i}`]: { itemId: `w${i}`, correctCount: 1, wrongCount: 0, lastReviewed: Date.now(), masteryLevel: 0 } },
        grammarProgress: {},
        lastStudied: Date.now(),
        totalQuizzes: 0
      };
    }

    const achievements = checkAchievements(makeState({ lessons }), emptyStreak());
    expect(achievements.find(a => a.id === '3-lessons')?.unlocked).toBe(true);
    expect(achievements.find(a => a.id === '10-lessons')?.unlocked).toBe(false);
  });

  it('should return 14 achievements total', () => {
    const achievements = checkAchievements(makeState(), emptyStreak());
    expect(achievements.length).toBe(14);
  });
});
