/**
 * Tests for SkipLink component
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import SkipLink from '$lib/components/common/SkipLink.svelte';

describe('SkipLink', () => {
  it('should render the skip-navigation link', () => {
    render(SkipLink);
    expect(screen.getByRole('link', { name: 'Skip navigation' })).toBeInTheDocument();
  });

  it('should have href="#main-content"', () => {
    render(SkipLink);
    const link = screen.getByRole('link', { name: 'Skip navigation' });
    expect(link.getAttribute('href')).toBe('#main-content');
  });

  it('should have sr-only class', () => {
    render(SkipLink);
    const link = screen.getByRole('link', { name: 'Skip navigation' });
    expect(link).toHaveClass('sr-only');
  });

  it('should have focus classes for visibility on focus', () => {
    render(SkipLink);
    const link = screen.getByRole('link', { name: 'Skip navigation' });
    expect(link.className).toContain('focus:not-sr-only');
  });
});
