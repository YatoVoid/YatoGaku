/**
 * Smoke test to verify test setup is working correctly
 */

import { describe, it, expect } from 'vitest';

describe('Test Setup', () => {
  it('should run basic test', () => {
    expect(true).toBe(true);
  });

  it('should have access to DOM environment', () => {
    expect(typeof document).toBe('object');
    expect(typeof window).toBe('object');
  });

  it('should have localStorage mocked', () => {
    localStorage.setItem('test', 'value');
    expect(localStorage.getItem('test')).toBe('value');

    localStorage.clear();
    expect(localStorage.getItem('test')).toBeNull();
  });

  it('should have matchMedia mocked', () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    expect(mediaQuery).toBeDefined();
    expect(mediaQuery.matches).toBe(false);
  });
});
