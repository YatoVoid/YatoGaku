import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import { Dialog as Modal } from '$lib/components/ui/dialog';

describe('Dialog primitive', () => {
  it('does not expose a dialog while closed', () => {
    render(Modal as any, { props: { open: false, title: 'Details' } });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('uses the canonical accessible dialog while open', () => {
    render(Modal as any, { props: { open: true, title: 'Details' } });
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByRole('heading', { name: 'Details' })).toBeInTheDocument();
  });

  it('provides a labeled close control', async () => {
    render(Modal as any, { props: { open: true, title: 'Details' } });
    const close = screen.getByRole('button', { name: 'Close dialog' });
    await userEvent.click(close);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('can hide the close control', () => {
    render(Modal as any, { props: { open: true, title: 'Details', showClose: false } });
    expect(screen.queryByRole('button', { name: 'Close dialog' })).not.toBeInTheDocument();
  });
});
