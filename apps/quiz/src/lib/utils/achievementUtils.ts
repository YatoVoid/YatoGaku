/**
 * Achievement & Streak utilities
 * Tracks daily study streaks and unlockable achievements
 */

import type { ProgressState } from '$lib/types';
import { browser } from '$app/environment';

const STREAK_KEY = 'smart_quiz_streak';

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string; // YYYY-MM-DD
  totalDays: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function loadStreak(): StreakData {
  if (!browser) return { currentStreak: 0, longestStreak: 0, lastStudyDate: '', totalDays: 0 };
  try {
    const stored = localStorage.getItem(STREAK_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return { currentStreak: 0, longestStreak: 0, lastStudyDate: '', totalDays: 0 };
}

function saveStreak(data: StreakData) {
  if (!browser) return;
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

export function recordStudySession(): StreakData {
  const streak = loadStreak();
  const t = today();

  if (streak.lastStudyDate === t) return streak; // Already recorded today

  if (streak.lastStudyDate === yesterday()) {
    streak.currentStreak++;
  } else if (streak.lastStudyDate !== t) {
    streak.currentStreak = 1;
  }

  streak.lastStudyDate = t;
  streak.totalDays++;
  streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);

  saveStreak(streak);
  return streak;
}

export function checkAchievements(state: ProgressState, streak: StreakData): Achievement[] {
  const allItems = Object.values(state.lessons).flatMap(l => Object.values(l.vocabProgress));
  const totalCorrect = allItems.reduce((s, i) => s + i.correctCount, 0);
  const totalWords = allItems.length;
  const mastered = allItems.filter(i => i.masteryLevel >= 5).length;
  const lessonsCount = Object.keys(state.lessons).length;

  const achievements: Achievement[] = [
    {
      id: 'first-quiz',
      title: 'First Steps',
      description: 'Complete your first quiz',
      icon: '🎯',
      unlocked: totalCorrect > 0
    },
    {
      id: '50-correct',
      title: 'Half Century',
      description: 'Answer 50 questions correctly',
      icon: '⭐',
      unlocked: totalCorrect >= 50
    },
    {
      id: '200-correct',
      title: 'Scholar',
      description: 'Answer 200 questions correctly',
      icon: '🏆',
      unlocked: totalCorrect >= 200
    },
    {
      id: '500-correct',
      title: 'Master',
      description: 'Answer 500 questions correctly',
      icon: '👑',
      unlocked: totalCorrect >= 500
    },
    {
      id: '10-words',
      title: 'Vocabulary Builder',
      description: 'Practice 10 different words',
      icon: '📖',
      unlocked: totalWords >= 10
    },
    {
      id: '50-words',
      title: 'Word Collector',
      description: 'Practice 50 different words',
      icon: '📚',
      unlocked: totalWords >= 50
    },
    {
      id: '100-words',
      title: 'Lexicon',
      description: 'Practice 100 different words',
      icon: '🗂️',
      unlocked: totalWords >= 100
    },
    {
      id: '5-mastered',
      title: 'First Mastery',
      description: 'Master 5 words (level 5)',
      icon: '💎',
      unlocked: mastered >= 5
    },
    {
      id: '25-mastered',
      title: 'Diamond Collection',
      description: 'Master 25 words',
      icon: '💎💎',
      unlocked: mastered >= 25
    },
    {
      id: '3-lessons',
      title: 'Explorer',
      description: 'Study 3 different lessons',
      icon: '🗺️',
      unlocked: lessonsCount >= 3
    },
    {
      id: '10-lessons',
      title: 'Adventurer',
      description: 'Study 10 different lessons',
      icon: '🧭',
      unlocked: lessonsCount >= 10
    },
    {
      id: 'streak-3',
      title: 'Consistent',
      description: '3-day study streak',
      icon: '🔥',
      unlocked: streak.longestStreak >= 3
    },
    {
      id: 'streak-7',
      title: 'Dedicated',
      description: '7-day study streak',
      icon: '🔥🔥',
      unlocked: streak.longestStreak >= 7
    },
    {
      id: 'streak-30',
      title: 'Unstoppable',
      description: '30-day study streak',
      icon: '🔥🔥🔥',
      unlocked: streak.longestStreak >= 30
    }
  ];

  return achievements;
}
