/**
 * Tests for MasteryRing component
 */

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import MasteryRing from '$lib/components/common/MasteryRing.svelte';

describe('MasteryRing', () => {
  it('should render SVG element', () => {
    const { container } = render(MasteryRing, { props: { percentage: 50 } });
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should show percentage text', () => {
    const { container } = render(MasteryRing, { props: { percentage: 75 } });
    expect(container.textContent).toContain('75');
  });

  it('should always show percentage (no lock)', () => {
    const { container } = render(MasteryRing, { props: { percentage: 0 } });
    expect(container.textContent).toContain('0');
    expect(container.textContent).not.toContain('🔒');
  });

  it('should handle 0% edge case', () => {
    const { container } = render(MasteryRing, { props: { percentage: 0 } });
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should handle 100% edge case', () => {
    const { container } = render(MasteryRing, { props: { percentage: 100 } });
    expect(container.textContent).toContain('100');
  });
});
