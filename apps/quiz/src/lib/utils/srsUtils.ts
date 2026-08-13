/**
 * Spaced Repetition System (SM-2 based)
 * Schedules review intervals based on performance
 * Supports vocab and kanji item types
 */

import type { ProgressState } from '$lib/types';
import { browser } from '$app/environment';

const SRS_KEY = 'smart_quiz_srs';
const STREAK_KEY = 'smart_quiz_review_streak';
const REVIEW_STATS_KEY = 'smart_quiz_review_stats';

export type SRSItemType = 'vocab' | 'kanji';

export interface SRSItem {
  itemId: string;
  lessonNumber: number;
  interval: number;      // days until next review
  easeFactor: number;    // 1.3 - 2.5
  nextReview: number;    // timestamp
  repetitions: number;
  lapses?: number;       // lifetime count of failed reviews (for leech detection)
  itemType?: SRSItemType;
}

export interface SRSState {
  items: Record<string, SRSItem>;
}

interface StreakState {
  days: string[];  // ISO date strings of review days
}

interface ReviewStats {
  todayCompleted: number;
  todayTotal: number;
  streak: number;
  lastReviewDate: string;
}

export function loadSRS(): SRSState {
  if (!browser) return { items: {} };
  try {
    const stored = localStorage.getItem(SRS_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return { items: {} };
}

function saveSRS(state: SRSState) {
  if (!browser) return;
  localStorage.setItem(SRS_KEY, JSON.stringify(state));
}

function loadStreak(): StreakState {
  if (!browser) return { days: [] };
  try {
    const stored = localStorage.getItem(STREAK_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return { days: [] };
}

function saveStreak(state: StreakState) {
  if (!browser) return;
  localStorage.setItem(STREAK_KEY, JSON.stringify(state));
}

function getTodayISO(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * SM-2 algorithm: update item after review
 * quality: 0-5 (0-2 = fail, 3-5 = pass)
 * itemType: 'vocab' or 'kanji' (default 'vocab')
 */
export function reviewItem(itemId: string, lessonNumber: number, quality: number, itemType?: SRSItemType): SRSItem {
  const srs = loadSRS();
  const existing = srs.items[itemId] || {
    itemId,
    lessonNumber,
    interval: 0,
    easeFactor: 2.5,
    nextReview: Date.now(),
    repetitions: 0,
    lapses: 0,
    itemType: itemType || 'vocab'
  };

  let { interval, easeFactor, repetitions } = existing;
  let lapses = existing.lapses ?? 0;

  if (quality >= 3) {
    // Correct
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
  } else {
    // Incorrect — reset schedule and record a lapse (drives leech detection)
    repetitions = 0;
    interval = 1;
    lapses++;
  }

  // Update ease factor
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  easeFactor = Math.max(1.3, easeFactor);

  const updated: SRSItem = {
    itemId,
    lessonNumber,
    interval,
    easeFactor,
    nextReview: Date.now() + interval * 86400000,
    repetitions,
    lapses,
    itemType: itemType || existing.itemType || 'vocab'
  };

  srs.items[itemId] = updated;
  saveSRS(srs);
  return updated;
}

/** SM-2 quality at/above which a review counts as a pass. */
export const PASS_QUALITY = 3;
/** Lifetime lapses at which an item is flagged a "leech" (Anki default). */
export const LEECH_THRESHOLD = 8;

/**
 * Convert a binary correct/incorrect result (optionally with response time) into
 * a graded SM-2 quality 0-5, replacing the previous binary 4/1 mapping so the
 * ease factor reflects recall difficulty:
 * - incorrect          -> 1 (failed recall, triggers reset + lapse)
 * - correct + fast     -> 5
 * - correct + normal   -> 4
 * - correct + slow     -> 3
 * Omit responseTimeMs to grade a plain correct answer as 4 (back-compat).
 */
export function computeQuality(
  correct: boolean,
  responseTimeMs?: number,
  opts: { fastMs?: number; slowMs?: number } = {}
): number {
  if (!correct) return 1;
  if (responseTimeMs === undefined) return 4;
  const fast = opts.fastMs ?? 3000;
  const slow = opts.slowMs ?? 8000;
  if (responseTimeMs <= fast) return 5;
  if (responseTimeMs >= slow) return 3;
  return 4;
}

/** True when an item has lapsed enough times to be a "leech" needing intervention. */
export function isLeech(item: Pick<SRSItem, 'lapses'>, threshold: number = LEECH_THRESHOLD): boolean {
  return (item.lapses ?? 0) >= threshold;
}

/** All current SRS items flagged as leeches. */
export function getLeeches(threshold: number = LEECH_THRESHOLD): SRSItem[] {
  return Object.values(loadSRS().items).filter((i) => isLeech(i, threshold));
}

/**
 * Get items due for review (nextReview <= now)
 */
export function getDueItems(progressState: ProgressState): { itemId: string; lessonNumber: number; itemType?: SRSItemType }[] {
  const srs = loadSRS();
  const now = Date.now();
  const due: { itemId: string; lessonNumber: number; itemType?: SRSItemType }[] = [];

  for (const item of Object.values(srs.items)) {
    if (item.nextReview <= now) {
      due.push({ itemId: item.itemId, lessonNumber: item.lessonNumber, itemType: item.itemType });
    }
  }

  // Also add items from progress that haven't been added to SRS yet
  for (const [lessonKey, lesson] of Object.entries(progressState.lessons || {})) {
    for (const vocabId of Object.keys(lesson.vocabProgress || {})) {
      if (!srs.items[vocabId]) {
        due.push({ itemId: vocabId, lessonNumber: parseInt(lessonKey), itemType: 'vocab' });
      }
    }
  }

  return due;
}

/**
 * Count items due for review
 */
export function getDueCount(progressState: ProgressState): number {
  return getDueItems(progressState).length;
}

/**
 * Get due items filtered by type
 */
export function getDueItemsByType(itemType?: SRSItemType): { itemId: string; lessonNumber: number; itemType?: SRSItemType }[] {
  const srs = loadSRS();
  const now = Date.now();
  const due: { itemId: string; lessonNumber: number; itemType?: SRSItemType }[] = [];

  for (const item of Object.values(srs.items)) {
    if (item.nextReview <= now) {
      if (!itemType || item.itemType === itemType) {
        due.push({ itemId: item.itemId, lessonNumber: item.lessonNumber, itemType: item.itemType });
      }
    }
  }

  return due;
}

/**
 * Count due items filtered by type
 */
export function getDueCountByType(itemType?: SRSItemType): number {
  return getDueItemsByType(itemType).length;
}

/**
 * Record that a review was done today
 */
export function recordReviewDay(): void {
  const streak = loadStreak();
  const today = getTodayISO();

  if (!streak.days.includes(today)) {
    streak.days.push(today);
    // Keep only last 365 days
    if (streak.days.length > 365) {
      streak.days = streak.days.slice(-365);
    }
    saveStreak(streak);
  }
}

/**
 * Get current review streak (consecutive days including today)
 */
export function getReviewStreak(): number {
  const streak = loadStreak();
  if (streak.days.length === 0) return 0;

  const sortedDays = [...streak.days].sort().reverse();
  const today = getTodayISO();
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // Check if today or yesterday is in the list (streak can continue if reviewed today or yesterday)
  if (sortedDays[0] !== today && sortedDays[0] !== yesterday) {
    return 0;
  }

  let count = 1;
  for (let i = 1; i < sortedDays.length; i++) {
    const prev = new Date(sortedDays[i - 1]);
    const curr = new Date(sortedDays[i]);
    const diffDays = Math.round((prev.getTime() - curr.getTime()) / 86400000);
    if (diffDays === 1) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

/**
 * Get review stats for today
 */
export function getReviewStats(): ReviewStats {
  const srs = loadSRS();
  const today = getTodayISO();
  const todayStart = new Date(today).getTime();
  const todayEnd = todayStart + 86400000;

  let todayCompleted = 0;
  let todayTotal = 0;

  for (const item of Object.values(srs.items)) {
    // Items that were reviewed today (nextReview was set today, meaning they were just reviewed)
    if (item.nextReview > todayStart && item.repetitions > 0) {
      todayCompleted++;
    }
    // Items due today or overdue
    if (item.nextReview <= todayEnd) {
      todayTotal++;
    }
  }

  return {
    todayCompleted,
    todayTotal,
    streak: getReviewStreak(),
    lastReviewDate: today
  };
}
