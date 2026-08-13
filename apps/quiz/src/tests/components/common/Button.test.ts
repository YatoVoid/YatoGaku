import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import Button from '$lib/components/ui/button/button.svelte';

describe('Button primitive', () => {
  it.each([
    ['primary', 'default'], ['accent', 'default'], ['secondary', 'secondary'],
    ['success', 'success'], ['danger', 'destructive'], ['outline', 'outline']
  ] as const)('maps %s to the canonical %s variant', (variant, expected) => {
    render(Button as any, { props: { variant } });
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', expected);
  });

  it.each([['sm', 'sm'], ['md', 'default'], ['lg', 'lg']] as const)('maps %s size', (size, expected) => {
    render(Button as any, { props: { size } });
    expect(screen.getByRole('button')).toHaveAttribute('data-size', expected);
  });

  it('renders a link when href is provided', () => {
    render(Button as any, { props: { href: '/test' } });
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('preserves disabled behavior', () => {
    render(Button as any, { props: { disabled: true } });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('forwards click events', async () => {
    const onclick = vi.fn();
    render(Button as any, { props: { onclick } });
    await userEvent.click(screen.getByRole('button'));
    expect(onclick).toHaveBeenCalledOnce();
  });
});
