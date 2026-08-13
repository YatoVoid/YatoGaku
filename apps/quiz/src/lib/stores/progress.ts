/**
 * Progress Store
 * Manages user progress with localStorage sync
 */

import { writable } from 'svelte/store';
import type { ProgressState } from '$lib/types';
import { browser } from '$app/environment';

const STORAGE_KEY = 'minna_vocab_progress';

// Load initial state from localStorage
function loadProgress(): ProgressState {
  if (!browser) {
    return {
      lessons: {},
      hsk: {},
      settings: {
        defaultDirection: 'ja-vi',
        autoPlay: false,
        showEnglish: true
      }
    };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load progress from localStorage:', error);
  }

  return {
    lessons: {},
    hsk: {},
    settings: {
      defaultDirection: 'ja-vi',
      autoPlay: false,
      showEnglish: true
    }
  };
}

// Create store with localStorage persistence
export const progressStore = writable<ProgressState>(loadProgress());

// Subscribe to changes and sync to localStorage
if (browser) {
  progressStore.subscribe(value => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to save progress to localStorage:', error);
    }
  });
}

// Actions
export function updateLessonProgress(lessonNumber: number, vocabId: string, correct: boolean) {
  progressStore.update(state => {
    const lesson = state.lessons[lessonNumber] || {
      lessonNumber,
      vocabProgress: {},
      grammarProgress: {},
      lastStudied: Date.now(),
      totalQuizzes: 0
    };

    const item = lesson.vocabProgress[vocabId] || {
      itemId: vocabId,
      correctCount: 0,
      wrongCount: 0,
      lastReviewed: Date.now(),
      masteryLevel: 0
    };

    if (correct) {
      item.correctCount++;
      item.masteryLevel = Math.min(5, item.masteryLevel + 1);
    } else {
      item.wrongCount++;
      item.masteryLevel = Math.max(0, item.masteryLevel - 1);
    }

    item.lastReviewed = Date.now();
    lesson.vocabProgress[vocabId] = item;
    lesson.lastStudied = Date.now();

    return {
      ...state,
      lessons: {
        ...state.lessons,
        [lessonNumber]: lesson
      }
    };
  });
}

export function updateSettings(settings: Partial<ProgressState['settings']>) {
  progressStore.update(state => ({
    ...state,
    settings: {
      ...state.settings,
      ...settings
    }
  }));
}

export function clearProgress() {
  if (browser) {
    localStorage.removeItem(STORAGE_KEY);
    progressStore.set({
      lessons: {},
      hsk: {},
      settings: {
        defaultDirection: 'ja-vi',
        autoPlay: false,
        showEnglish: true
      }
    });
  }
}

// Export progress as JSON
export function exportProgress(): string {
  let data: ProgressState = {
    lessons: {},
    hsk: {},
    settings: { defaultDirection: 'ja-vi', autoPlay: false, showEnglish: true }
  };
  progressStore.subscribe(v => { data = v; })();
  return JSON.stringify({
    version: 1,
    exportedAt: new Date().toISOString(),
    data
  }, null, 2);
}

// Import progress from JSON string — returns true on success
export function importProgress(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    if (!parsed.data || !parsed.data.settings) {
      return false;
    }
    const state: ProgressState = parsed.data;
    // Validate structure
    if (typeof state.lessons !== 'object' || typeof state.hsk !== 'object') {
      return false;
    }
    progressStore.set(state);
    return true;
  } catch {
    return false;
  }
}
