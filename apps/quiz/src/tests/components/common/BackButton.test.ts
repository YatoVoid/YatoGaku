/**
 * Component tests for BackButton.svelte
 * Tests hierarchical navigation, icon/text display, and accessibility
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import BackButton from '$lib/components/common/BackButton.svelte';
import { goto } from '$app/navigation';

describe('BackButton Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render with default props', () => {
      render(BackButton);

      const button = screen.getByRole('button', { name: 'Go back' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('ui-button');
    });

    it('should render icon by default', () => {
      const { container } = render(BackButton);

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render text by default', () => {
      const { container } = render(BackButton);

      const text = container.querySelector('.back-text');
      expect(text).toBeInTheDocument();
      expect(text?.textContent).toBe('Back');
    });
  });

  describe('Icon Display', () => {
    it('should show icon when showIcon is true', () => {
      const { container } = render(BackButton, {
        props: { showIcon: true }
      });

      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should hide icon when showIcon is false', () => {
      const { container } = render(BackButton, {
        props: { showIcon: false }
      });

      const svg = container.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });
  });

  describe('Text Display', () => {
    it('should show default text "Back"', () => {
      const { container } = render(BackButton);

      const text = container.querySelector('.back-text');
      expect(text?.textContent).toBe('Back');
    });

    it('should show custom text', () => {
      const { container } = render(BackButton, {
        props: { text: 'Return' }
      });

      const text = container.querySelector('.back-text');
      expect(text?.textContent).toBe('Return');
    });

    it('should hide text when text prop is empty', () => {
      const { container } = render(BackButton, {
        props: { text: '' }
      });

      const text = container.querySelector('.back-text');
      expect(text).not.toBeInTheDocument();
    });

    it('should support multi-word text', () => {
      const { container } = render(BackButton, {
        props: { text: 'Go Back Home' }
      });

      const text = container.querySelector('.back-text');
      expect(text?.textContent).toBe('Go Back Home');
    });
  });

  describe('Navigation Behavior', () => {
    it('should call goto to parent path on click', async () => {
      const user = userEvent.setup();
      render(BackButton);

      const button = screen.getByRole('button');
      await user.click(button);

      // Default page mock has pathname '/', parent of '/' is '/'
      expect(goto).toHaveBeenCalledTimes(1);
    });

    it('should navigate to explicit href when provided', async () => {
      const user = userEvent.setup();
      render(BackButton, {
        props: { href: '/lesson/1' }
      });

      const button = screen.getByRole('button');
      await user.click(button);

      expect(goto).toHaveBeenCalledWith('/lesson/1');
    });
  });

  describe('Accessibility', () => {
    it('should have button role', () => {
      render(BackButton);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should have aria-label', () => {
      render(BackButton);

      const button = screen.getByRole('button', { name: 'Go back' });
      expect(button).toHaveAttribute('aria-label', 'Go back');
    });

    it('should be keyboard accessible', () => {
      render(BackButton);

      const button = screen.getByRole('button');
      button.focus();

      expect(document.activeElement).toBe(button);
    });
  });

  describe('Combined Props', () => {
    it('should handle icon only (no text)', () => {
      const { container } = render(BackButton, {
        props: { showIcon: true, text: '' }
      });

      const svg = container.querySelector('svg');
      const text = container.querySelector('.back-text');

      expect(svg).toBeInTheDocument();
      expect(text).not.toBeInTheDocument();
    });

    it('should handle text only (no icon)', () => {
      const { container } = render(BackButton, {
        props: { showIcon: false, text: 'Back' }
      });

      const svg = container.querySelector('svg');
      const text = container.querySelector('.back-text');

      expect(svg).not.toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });

    it('should handle all props together', () => {
      const { container } = render(BackButton, {
        props: {
          showIcon: true,
          text: 'Return',
          href: '/dashboard'
        }
      });

      const svg = container.querySelector('svg');
      const text = container.querySelector('.back-text');
      const button = screen.getByRole('button');

      expect(svg).toBeInTheDocument();
      expect(text?.textContent).toBe('Return');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle multiple clicks', async () => {
      const user = userEvent.setup();
      render(BackButton);

      const button = screen.getByRole('button');
      await user.click(button);
      await user.click(button);
      await user.click(button);

      expect(goto).toHaveBeenCalledTimes(3);
    });

    it('should render without text or icon', () => {
      const { container } = render(BackButton, {
        props: { showIcon: false, text: '' }
      });

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();

      const icon = container.querySelector('.back-icon');
      const text = container.querySelector('.back-text');

      expect(icon).not.toBeInTheDocument();
      expect(text).not.toBeInTheDocument();
    });
  });
});
