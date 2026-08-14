/**
 * Component tests for GrammarCard.svelte
 * Tests rendering, tags, selection, interactions, and accessibility
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import GrammarCard from '$lib/components/grammar/GrammarCard.svelte';
import type { GrammarPattern } from '$lib/types';

function createMockPattern(overrides: Partial<GrammarPattern> = {}): GrammarPattern {
  return {
    pattern: '～てください',
    vietnamese: 'Xin hãy...',
    english: 'Please do...',
    type: 'main',
    explanation: 'Used for polite requests',
    examples: [
      { japanese: '食べてください', vietnamese: 'Xin hãy ăn' }
    ],
    lessonNumber: 5,
    lessonTitle: 'Bài 5',
    meta: {
      jlptLevel: 'N5',
      difficulty: 'beginner',
      tips: 'Use with て-form'
    },
    ...overrides
  };
}

describe('GrammarCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the grammar pattern', () => {
      render(GrammarCard, { props: { pattern: createMockPattern() } });

      expect(screen.getByText('～てください')).toBeInTheDocument();
    });

    it('should render the Vietnamese meaning', () => {
      render(GrammarCard, { props: { pattern: createMockPattern() } });

      expect(screen.getByText('Xin hãy...')).toBeInTheDocument();
    });

    it('should render the English meaning when available', () => {
      render(GrammarCard, { props: { pattern: createMockPattern() } });

      expect(screen.getByText('Please do...')).toBeInTheDocument();
    });

    it('should not render English meaning when not provided', () => {
      render(GrammarCard, { props: { pattern: createMockPattern({ english: '' }) } });

      expect(screen.queryByText('Please do...')).not.toBeInTheDocument();
    });

    it('should render detail button', () => {
      render(GrammarCard, { props: { pattern: createMockPattern() } });

      expect(screen.getByText(/Details/)).toBeInTheDocument();
    });
  });

  describe('Tags', () => {
    it('should render JLPT level tag', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ meta: { jlptLevel: 'N5' } }) }
      });

      expect(screen.getByText('N5')).toBeInTheDocument();
    });

    it('should render lesson number tag', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ lessonNumber: 5 }) }
      });

      expect(screen.getByText('Lesson 5')).toBeInTheDocument();
    });

    it('should render both JLPT and lesson tags', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ lessonNumber: 3, meta: { jlptLevel: 'N4' } }) }
      });

      expect(screen.getByText('N4')).toBeInTheDocument();
      expect(screen.getByText('Lesson 3')).toBeInTheDocument();
    });

    it('should not render JLPT tag when not provided', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ meta: null }) }
      });

      expect(screen.queryByText('N5')).not.toBeInTheDocument();
    });

    it('should not render lesson tag when not provided', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ lessonNumber: undefined }) }
      });

      expect(screen.queryByText(/Lesson/)).not.toBeInTheDocument();
    });

    it('should have correct tag classes', () => {
      const { container } = render(GrammarCard, {
        props: { pattern: createMockPattern() }
      });

      expect(container.querySelector('.tag-jlpt')).toBeInTheDocument();
      expect(container.querySelector('.tag-lesson')).toBeInTheDocument();
    });
  });

  describe('Selection', () => {
    it('should not be selected by default', () => {
      const { container } = render(GrammarCard, {
        props: { pattern: createMockPattern() }
      });

      expect(container.querySelector('.grammar-card')).not.toHaveClass('selected');
    });

    it('should have selected class when selected prop is true', () => {
      const { container } = render(GrammarCard, {
        props: { pattern: createMockPattern(), selected: true }
      });

      expect(container.querySelector('.grammar-card')).toHaveClass('selected');
    });

    it('should render checkbox', () => {
      render(GrammarCard, { props: { pattern: createMockPattern() } });

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('should have checkbox checked when selected', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern(), selected: true }
      });

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('should have checkbox unchecked when not selected', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern(), selected: false }
      });

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Interactions', () => {
    it('should have clickable checkbox for toggle', async () => {
      const user = userEvent.setup();
      render(GrammarCard, {
        props: { pattern: createMockPattern() }
      });

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
      // Should not throw when clicked
      await user.click(checkbox);
    });

    it('should have clickable detail button', async () => {
      const user = userEvent.setup();
      render(GrammarCard, {
        props: { pattern: createMockPattern() }
      });

      const detailBtn = screen.getByText(/Details/);
      expect(detailBtn.tagName).toBe('BUTTON');
      // Should not throw when clicked
      await user.click(detailBtn);
    });
  });

  describe('Tips Button', () => {
    it('should render tips button when tips are available', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ meta: { tips: 'Some tip' } }) }
      });

      expect(screen.getByText(/Tips/)).toBeInTheDocument();
    });

    it('should not render tips button when no tips', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ meta: { jlptLevel: 'N5' } }) }
      });

      expect(screen.queryByText(/Tips/)).not.toBeInTheDocument();
    });

    it('should not render tips button when meta is null', () => {
      render(GrammarCard, {
        props: { pattern: createMockPattern({ meta: null }) }
      });

      expect(screen.queryByText(/Tips/)).not.toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle pattern without meta', () => {
      const { container } = render(GrammarCard, {
        props: { pattern: createMockPattern({ meta: null }) }
      });

      // Should still render without errors
      expect(container.querySelector('.grammar-card')).toBeInTheDocument();
    });

    it('should handle pattern without lesson number and meta', () => {
      const { container } = render(GrammarCard, {
        props: { pattern: createMockPattern({ lessonNumber: undefined, meta: null }) }
      });

      const tags = container.querySelectorAll('.tag');
      expect(tags.length).toBe(0);
    });

    it('should handle empty english', () => {
      const { container } = render(GrammarCard, {
        props: { pattern: createMockPattern({ english: '' }) }
      });

      expect(container.querySelector('.pattern-meaning-en')).not.toBeInTheDocument();
    });
  });
});
