/**
 * Tests for Font Utils
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAvailableFonts, getCurrentFont, setFont, getFontCSSValue } from '$lib/utils/fontUtils';

beforeEach(() => {
  vi.stubGlobal('localStorage', {
    getItem: vi.fn(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  });
});

describe('Font Utils', () => {
  it('getAvailableFonts returns at least 3 options', () => {
    const fonts = getAvailableFonts();
    expect(fonts.length).toBeGreaterThanOrEqual(3);
    expect(fonts[0]).toHaveProperty('id');
    expect(fonts[0]).toHaveProperty('name');
    expect(fonts[0]).toHaveProperty('family');
  });

  it('getCurrentFont returns default when nothing saved', () => {
    const font = getCurrentFont();
    expect(font).toBe('system');
  });

  it('setFont saves to localStorage', () => {
    setFont('noto-sans-jp');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('getFontCSSValue returns valid CSS font-family', () => {
    const css = getFontCSSValue('noto-sans-jp');
    expect(css).toContain('Noto Sans JP');
    expect(typeof css).toBe('string');
  });
});
