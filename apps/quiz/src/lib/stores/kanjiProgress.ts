import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export interface KanjiLessonProgress {
  bestScore: number;
  total: number;
  lastStudied: number;
}

export type KanjiProgressState = Record<number, KanjiLessonProgress>;
const KEY = 'smartquiz_kanji_progress';

function load(): KanjiProgressState {
  if (!browser) return {};
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
}

export const kanjiProgressStore = writable<KanjiProgressState>(load());

if (browser) kanjiProgressStore.subscribe(value => localStorage.setItem(KEY, JSON.stringify(value)));

export function recordKanjiLesson(lesson: number, score: number, total: number) {
  kanjiProgressStore.update(state => ({
    ...state,
    [lesson]: {
      bestScore: Math.max(state[lesson]?.bestScore ?? 0, score),
      total: Math.max(state[lesson]?.total ?? 0, total),
      lastStudied: Date.now()
    }
  }));
}

export function getKanjiMastery(progress: KanjiProgressState, lesson: number): number {
  const item = progress[lesson];
  return item?.total ? Math.round((item.bestScore / item.total) * 100) : 0;
}

export function getRecentKanjiLesson(progress: KanjiProgressState): number | null {
  const entries = Object.entries(progress);
  if (!entries.length) return null;
  return Number(entries.sort(([, a], [, b]) => b.lastStudied - a.lastStudied)[0][0]);
}
