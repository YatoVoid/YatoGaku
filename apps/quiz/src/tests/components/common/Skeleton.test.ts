import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte/svelte5';
import { Skeleton } from '$lib/components/ui/skeleton';
import SkeletonCard from '$lib/components/common/SkeletonCard.svelte';

describe('Skeleton primitive', () => {
  it('maps dimensions and accessibility to the canonical skeleton', () => {
    const { container } = render(Skeleton as any, { props: { width: '200px', height: '2rem', rounded: true } });
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toHaveStyle({ width: '200px', height: '2rem' });
    expect(el).toHaveAttribute('role', 'status');
    expect(el).toHaveAttribute('aria-label', 'Loading');
    expect(el).toHaveClass('rounded-pill');
  });

  it('keeps composed skeleton cards on the canonical primitive', () => {
    const { container } = render(SkeletonCard);
    expect(container.querySelectorAll('[data-slot="skeleton"]').length).toBeGreaterThanOrEqual(4);
  });
});
