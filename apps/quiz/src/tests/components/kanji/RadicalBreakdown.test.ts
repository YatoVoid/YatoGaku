/**
 * Tests for RadicalBreakdown component
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import RadicalBreakdown from '$lib/components/kanji/RadicalBreakdown.svelte';

describe('RadicalBreakdown', () => {
  it('should render kanji radicals', () => {
    const { container } = render(RadicalBreakdown, { props: { character: '会' } });
    const items = container.querySelectorAll('.radical-item');
    expect(items.length).toBeGreaterThan(0);
  });

  it('should show Hán Việt name for radicals', () => {
    const { container } = render(RadicalBreakdown, { props: { character: '会' } });
    expect(container.querySelector('.radical-name')).toBeInTheDocument();
  });

  it('should show fallback for unknown kanji', () => {
    const { container } = render(RadicalBreakdown, { props: { character: '🎉' } });
    expect(container.textContent).toMatch(/no radical|not available/i);
  });

  it('should show radical count header', () => {
    const { container } = render(RadicalBreakdown, { props: { character: '会' } });
    expect(container.textContent).toMatch(/Radicals/);
  });
});
