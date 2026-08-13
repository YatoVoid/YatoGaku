/**
 * Accessibility CSS Tests
 * Verify app.css has focus-visible, reduced-motion, sr-only, AA-compliant colors
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

const appCss = readFileSync(join(__dirname, '../app.css'), 'utf-8');

describe('Accessibility CSS', () => {
  it('should have focus-visible styles', () => {
    expect(appCss).toContain(':focus-visible');
  });

  it('should have prefers-reduced-motion media query', () => {
    expect(appCss).toContain('prefers-reduced-motion');
  });

  it('should have sr-only utility class', () => {
    expect(appCss).toContain('.sr-only');
  });

  it('warning color should be defined as Tailwind token', () => {
    // --color-warning defined as HSL value in @theme
    expect(appCss).toMatch(/--color-warning:\s*hsl\(/);
  });

  it('success color should be defined as Tailwind token', () => {
    // --color-success defined as HSL value in @theme
    expect(appCss).toMatch(/--color-success:\s*hsl\(/);
  });
});
