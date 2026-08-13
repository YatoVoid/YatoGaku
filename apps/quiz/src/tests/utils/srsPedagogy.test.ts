/**
 * Tests for SRS pedagogy enhancements (Wave 3 PR 3.2):
 * graded quality from response time + lapse tracking + leech detection.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  computeQuality,
  isLeech,
  getLeeches,
  reviewItem,
  LEECH_THRESHOLD
} from '$lib/utils/srsUtils';

beforeEach(() => {
  localStorage.clear();
});

describe('computeQuality', () => {
  it('incorrect -> 1 (failed recall / triggers reset)', () => {
    expect(computeQuality(false)).toBe(1);
  });

  it('incorrect ignores response time', () => {
    expect(computeQuality(false, 100)).toBe(1);
  });

  it('correct without timing -> 4 (preserves prior binary behavior)', () => {
    expect(computeQuality(true)).toBe(4);
  });

  it('correct + fast -> 5', () => {
    expect(computeQuality(true, 1500)).toBe(5);
  });

  it('correct + normal -> 4', () => {
    expect(computeQuality(true, 5000)).toBe(4);
  });

  it('correct + slow -> 3', () => {
    expect(computeQuality(true, 9000)).toBe(3);
  });

  it('respects custom fast/slow thresholds', () => {
    expect(computeQuality(true, 900, { fastMs: 1000 })).toBe(5);
    expect(computeQuality(true, 1200, { fastMs: 1000 })).toBe(4);
    expect(computeQuality(true, 4000, { slowMs: 3500 })).toBe(3);
  });

  it('always returns a pass-grade (>=3) for correct answers', () => {
    for (const rt of [0, 1000, 3000, 5000, 8000, 20000]) {
      expect(computeQuality(true, rt)).toBeGreaterThanOrEqual(3);
    }
  });
});

describe('isLeech', () => {
  it('is false below threshold', () => {
    expect(isLeech({ lapses: LEECH_THRESHOLD - 1 })).toBe(false);
  });

  it('is true at/above threshold', () => {
    expect(isLeech({ lapses: LEECH_THRESHOLD })).toBe(true);
    expect(isLeech({ lapses: LEECH_THRESHOLD + 3 })).toBe(true);
  });

  it('treats missing lapses as 0', () => {
    expect(isLeech({ lapses: undefined })).toBe(false);
    expect(isLeech({})).toBe(false);
  });

  it('honors a custom threshold', () => {
    expect(isLeech({ lapses: 3 }, 3)).toBe(true);
    expect(isLeech({ lapses: 2 }, 3)).toBe(false);
  });
});

describe('reviewItem lapse tracking', () => {
  it('increments lapses on failure but not on pass', () => {
    let item = reviewItem('w1', 1, 1); // fail
    expect(item.lapses).toBe(1);

    item = reviewItem('w1', 1, 5); // pass
    expect(item.lapses).toBe(1);

    item = reviewItem('w1', 1, 2); // fail
    expect(item.lapses).toBe(2);
  });

  it('new items start with 0 lapses on a passing first review', () => {
    const item = reviewItem('w2', 1, 4);
    expect(item.lapses).toBe(0);
  });
});

describe('getLeeches', () => {
  it('returns items that reached the leech threshold', () => {
    for (let i = 0; i < LEECH_THRESHOLD; i++) reviewItem('leech1', 1, 1);
    reviewItem('healthy1', 1, 5);

    const ids = getLeeches().map((i) => i.itemId);
    expect(ids).toContain('leech1');
    expect(ids).not.toContain('healthy1');
  });

  it('returns empty when no item has lapsed enough', () => {
    reviewItem('a', 1, 1);
    reviewItem('b', 1, 4);
    expect(getLeeches()).toEqual([]);
  });
});
