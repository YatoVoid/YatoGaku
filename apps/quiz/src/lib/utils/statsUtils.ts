/**
 * Statistics utility functions
 * Compute stats from progress store data
 */

import type { ProgressState, LessonProgress, ItemProgress } from '$lib/types';

export interface OverviewStats {
  totalLessons: number;
  totalWords: number;
  totalCorrect: number;
  totalWrong: number;
  accuracy: number;
  masteryDistribution: number[]; // index 0-5 = count at each mastery level
}

export interface LessonStats {
  lessonNumber: number;
  wordCount: number;
  accuracy: number;
  avgMastery: number;
  lastStudied: number;
}

export function computeOverviewStats(state: ProgressState): OverviewStats {
  const distribution = [0, 0, 0, 0, 0, 0]; // levels 0-5
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalWords = 0;

  const allLessons = { ...(state.lessons || {}), ...(state.hsk || {}) };

  for (const lesson of Object.values(allLessons)) {
    const items = Object.values(lesson.vocabProgress || {});
    totalWords += items.length;
    for (const item of items) {
      totalCorrect += item.correctCount;
      totalWrong += item.wrongCount;
      distribution[item.masteryLevel]++;
    }
  }

  const totalAttempts = totalCorrect + totalWrong;
  return {
    totalLessons: Object.keys(allLessons).length,
    totalWords,
    totalCorrect,
    totalWrong,
    accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0,
    masteryDistribution: distribution
  };
}

export function computeLessonStats(state: ProgressState): LessonStats[] {
  const results: LessonStats[] = [];

  for (const [key, lesson] of Object.entries(state.lessons || {})) {
    const items = Object.values(lesson.vocabProgress || {});
    if (items.length === 0) continue;

    const correct = items.reduce((s, i) => s + i.correctCount, 0);
    const wrong = items.reduce((s, i) => s + i.wrongCount, 0);
    const total = correct + wrong;
    const avgMastery = items.reduce((s, i) => s + i.masteryLevel, 0) / items.length;

    results.push({
      lessonNumber: parseInt(key),
      wordCount: items.length,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
      avgMastery: Math.round(avgMastery * 10) / 10,
      lastStudied: lesson.lastStudied
    });
  }

  return results.sort((a, b) => a.lessonNumber - b.lessonNumber);
}

export function getMasteryLabel(level: number): string {
  const labels = ['New', 'Learning', 'Familiar', 'Good', 'Strong', 'Mastered'];
  return labels[level] || 'Unknown';
}

export function getMasteryColor(level: number): string {
  const colors = ['#94a3b8', '#f59e0b', '#3b82f6', '#22c55e', '#8b5cf6', '#ec4899'];
  return colors[level] || '#94a3b8';
}

export function formatLastStudied(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}
