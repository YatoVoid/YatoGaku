import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import Card from '$lib/components/ui/card/card.svelte';

describe('Card primitive', () => {
  it.each([['sm', 'p-3'], ['md', 'p-4'], ['lg', 'p-6']] as const)('maps %s padding', (padding, expected) => {
    const { container } = render(Card as any, { props: { padding } });
    expect(container.querySelector('[data-slot="card"]')).toHaveClass(expected);
  });

  it('uses button semantics only when clickable', async () => {
    const { rerender } = render(Card as any, { props: { clickable: false } });
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    await rerender({ clickable: true });
    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
  });

  it('forwards activation', async () => {
    const onclick = vi.fn();
    render(Card as any, { props: { clickable: true, onclick } });
    await userEvent.click(screen.getByRole('button'));
    expect(onclick).toHaveBeenCalledOnce();
  });
});
