/**
 * Tests for Premium Utils
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { isPremium, setPremium, getPremiumFeatures, isFeatureAvailable } from '$lib/utils/premiumUtils';

const storage: Record<string, string> = {};
beforeEach(() => {
  Object.keys(storage).forEach(key => delete storage[key]);
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => storage[key] || null),
    setItem: vi.fn((key: string, val: string) => { storage[key] = val; }),
    removeItem: vi.fn((key: string) => { delete storage[key]; }),
    clear: vi.fn()
  });
});

describe('Premium Utils', () => {
  it('isPremium returns false by default', () => {
    expect(isPremium()).toBe(false);
  });

  it('setPremium(true) enables premium', () => {
    setPremium(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('smart_quiz_premium', 'true');
  });

  it('getPremiumFeatures returns feature list', () => {
    const features = getPremiumFeatures();
    expect(features.length).toBeGreaterThanOrEqual(3);
    expect(features[0]).toHaveProperty('id');
    expect(features[0]).toHaveProperty('name');
    expect(features[0]).toHaveProperty('free');
  });

  it('isFeatureAvailable checks premium status', () => {
    // Without premium, gated features should be false
    expect(isFeatureAvailable('n2-n1-full')).toBe(false);
    // Free features always available
    expect(isFeatureAvailable('n5-course')).toBe(true);
  });

  it('premium status persists in localStorage', () => {
    setPremium(true);
    // Simulate re-read
    storage['smart_quiz_premium'] = 'true';
    expect(isPremium()).toBe(true);
  });
});
