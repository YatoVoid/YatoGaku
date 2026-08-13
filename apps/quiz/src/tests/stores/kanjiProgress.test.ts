import { beforeEach, describe, expect, it, vi } from 'vitest';
import { get } from 'svelte/store';
import { getKanjiMastery, getRecentKanjiLesson, kanjiProgressStore, recordKanjiLesson } from '$lib/stores/kanjiProgress';

describe('kanji progress', () => {
  beforeEach(() => { kanjiProgressStore.set({}); vi.restoreAllMocks(); });

  it('keeps the best score while updating recency', () => {
    vi.spyOn(Date, 'now').mockReturnValueOnce(100).mockReturnValueOnce(200);
    recordKanjiLesson(2, 8, 10);
    recordKanjiLesson(2, 5, 10);
    expect(get(kanjiProgressStore)[2]).toEqual({ bestScore: 8, total: 10, lastStudied: 200 });
  });

  it('computes mastery and the most recent lesson', () => {
    const state = { 1: { bestScore: 3, total: 4, lastStudied: 10 }, 2: { bestScore: 1, total: 2, lastStudied: 20 } };
    expect(getKanjiMastery(state, 1)).toBe(75);
    expect(getRecentKanjiLesson(state)).toBe(2);
  });
});
