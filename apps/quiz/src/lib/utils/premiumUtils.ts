/**
 * Premium Tier Utilities
 * Manages premium status and feature gating
 */

import { browser } from '$app/environment';

const PREMIUM_KEY = 'smart_quiz_premium';

export interface PremiumFeature {
  id: string;
  name: string;
  description: string;
  free: boolean;
}

const FEATURES: PremiumFeature[] = [
  { id: 'n5-course', name: 'N5 Course (25 lessons)', description: 'Basic Japanese', free: true },
  { id: 'n4-course', name: 'N4 Course (25 lessons)', description: 'Intermediate Japanese', free: true },
  { id: 'n3-course', name: 'N3 Course (15 lessons)', description: 'Upper-intermediate Japanese', free: true },
  { id: 'hsk', name: 'HSK 1-5 Chinese', description: '2200+ words', free: true },
  { id: 'kanji-n5-n3', name: 'Kanji N5-N3', description: '325 kanji with stroke order', free: true },
  { id: 'srs-review', name: 'SRS Review', description: 'Spaced repetition', free: true },
  { id: 'n2-n1-full', name: 'N2-N1 Full Vocabulary', description: '500+ items (preview: 50)', free: false },
  { id: 'kanji-n2-n1', name: 'Kanji N2-N1 Full', description: '800 kanji (preview: 50 each)', free: false },
  { id: 'custom-fonts', name: 'Custom Japanese Fonts', description: '4 font options', free: false },
  { id: 'export-import', name: 'Export/Import Progress', description: 'Backup your data', free: false }
];

/**
 * Check if user has premium status
 */
export function isPremium(): boolean {
  if (!browser) return false;
  try {
    return localStorage.getItem(PREMIUM_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Set premium status
 */
export function setPremium(enabled: boolean): void {
  if (!browser) return;
  localStorage.setItem(PREMIUM_KEY, enabled ? 'true' : 'false');
}

/**
 * Get all premium features with their availability
 */
export function getPremiumFeatures(): PremiumFeature[] {
  return FEATURES;
}

/**
 * Check if a specific feature is available to current user
 */
export function isFeatureAvailable(featureId: string): boolean {
  const feature = FEATURES.find(f => f.id === featureId);
  if (!feature) return false;
  return feature.free || isPremium();
}
