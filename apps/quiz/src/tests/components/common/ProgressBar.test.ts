import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import { Progress as ProgressBar } from '$lib/components/ui/progress';

describe('Progress primitive', () => {
  it('maps current and total to accessible progress semantics', () => {
    const { container } = render(ProgressBar as any, { props: { current: 5, total: 10 } });
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '5');
    expect(container.querySelector('[data-slot="progress-indicator"]')).toHaveStyle({ transform: 'scaleX(0.5)' });
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-label', '5 / 10 (50%)');
  });

  it('handles zero totals without invalid values', () => {
    const { container } = render(ProgressBar as any, { props: { current: 1, total: 0 } });
    expect(container.querySelector('[data-slot="progress-indicator"]')).toHaveStyle({ transform: 'scaleX(0)' });
  });

  it('supports hidden and inside labels', async () => {
    const { rerender } = render(ProgressBar as any, { props: { current: 2, total: 10, showText: false } });
    expect(screen.queryByText(/2 \/ 10/)).not.toBeInTheDocument();
    await rerender({ current: 5, total: 10, showText: true, textPosition: 'inside' });
    expect(screen.getByText('50%')).toBeInTheDocument();
  });
});
