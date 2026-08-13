/**
 * Tests for progress store export/import functions
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { exportProgress, importProgress, progressStore } from '$lib/stores/progress';
import { get } from 'svelte/store';

beforeEach(() => {
  localStorage.clear();
  progressStore.set({
    lessons: {},
    hsk: {},
    settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true }
  });
});

describe('exportProgress', () => {
  it('should return valid JSON', () => {
    const json = exportProgress();
    expect(() => JSON.parse(json)).not.toThrow();
  });

  it('should include version and exportedAt', () => {
    const parsed = JSON.parse(exportProgress());
    expect(parsed.version).toBe(1);
    expect(parsed.exportedAt).toBeTruthy();
  });

  it('should include current store data', () => {
    const parsed = JSON.parse(exportProgress());
    expect(parsed.data).toBeDefined();
    expect(parsed.data.settings).toBeDefined();
    expect(parsed.data.lessons).toBeDefined();
    expect(parsed.data.hsk).toBeDefined();
  });

  it('should reflect store changes', () => {
    progressStore.set({
      lessons: {
        1: { lessonNumber: 1, vocabProgress: {}, grammarProgress: {}, lastStudied: 0, totalQuizzes: 5 }
      },
      hsk: {},
      settings: { defaultDirection: 'vi-ja', autoPlay: true, showEnglish: false }
    });

    const parsed = JSON.parse(exportProgress());
    expect(parsed.data.settings.defaultDirection).toBe('vi-ja');
    expect(parsed.data.lessons[1].totalQuizzes).toBe(5);
  });
});

describe('importProgress', () => {
  it('should return true and update store on valid JSON', () => {
    const json = JSON.stringify({
      version: 1,
      exportedAt: '2026-01-01',
      data: {
        lessons: { 1: { lessonNumber: 1, vocabProgress: {}, grammarProgress: {}, lastStudied: 0, totalQuizzes: 3 } },
        hsk: {},
        settings: { defaultDirection: 'vi-ja', autoPlay: true, showEnglish: false }
      }
    });

    expect(importProgress(json)).toBe(true);
    const state = get(progressStore);
    expect(state.settings.defaultDirection).toBe('vi-ja');
    expect(state.settings.autoPlay).toBe(true);
  });

  it('should return false on invalid JSON', () => {
    expect(importProgress('not json')).toBe(false);
  });

  it('should return false on missing data field', () => {
    expect(importProgress(JSON.stringify({ version: 1 }))).toBe(false);
  });

  it('should return false on missing settings', () => {
    expect(importProgress(JSON.stringify({ data: { lessons: {} } }))).toBe(false);
  });

  it('should return false on invalid structure', () => {
    expect(importProgress(JSON.stringify({
      data: { lessons: 'invalid', hsk: {}, settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true } }
    }))).toBe(false);
  });

  it('should roundtrip with exportProgress', () => {
    progressStore.set({
      lessons: {
        5: { lessonNumber: 5, vocabProgress: { 'abc': { itemId: 'abc', correctCount: 10, wrongCount: 2, lastReviewed: 999, masteryLevel: 3 } }, grammarProgress: {}, lastStudied: 1000, totalQuizzes: 7 }
      },
      hsk: {},
      settings: { defaultDirection: 'ja-en', autoPlay: false, showEnglish: true }
    });

    const exported = exportProgress();
    progressStore.set({ lessons: {}, hsk: {}, settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true } });

    expect(importProgress(exported)).toBe(true);
    const state = get(progressStore);
    expect(state.settings.defaultDirection).toBe('ja-en');
    expect(state.lessons[5].vocabProgress['abc'].correctCount).toBe(10);
  });
});
