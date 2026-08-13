/**
 * Component tests for ComparisonCard.svelte
 * Tests rendering, tags, click interactions, and accessibility
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import ComparisonCard from '$lib/components/grammar/ComparisonCard.svelte';
import type { GrammarComparison } from '$lib/types';

function createMockComparison(overrides: Partial<GrammarComparison> = {}): GrammarComparison {
  return {
    id: 'comp-1',
    title: 'は vs が',
    vietnamese: 'Phân biệt trợ từ は và が',
    english: 'Difference between は and が particles',
    patterns: ['は', 'が'],
    difficulty: 'beginner',
    jlptLevel: 'N5',
    ...overrides
  };
}

describe('ComparisonCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the comparison title', () => {
      render(ComparisonCard, { props: { comparison: createMockComparison() } });

      expect(screen.getByText('は vs が')).toBeInTheDocument();
    });

    it('should render the Vietnamese description', () => {
      render(ComparisonCard, { props: { comparison: createMockComparison() } });

      expect(screen.getByText('Phân biệt trợ từ は và が')).toBeInTheDocument();
    });

    it('should render the English description when available', () => {
      render(ComparisonCard, { props: { comparison: createMockComparison() } });

      expect(screen.getByText('Difference between は and が particles')).toBeInTheDocument();
    });

    it('should not render English description when not provided', () => {
      render(ComparisonCard, {
        props: { comparison: createMockComparison({ english: undefined }) }
      });

      expect(screen.queryByText('Difference between は and が particles')).not.toBeInTheDocument();
    });
  });

  describe('Pattern Badges', () => {
    it('should render all pattern badges', () => {
      render(ComparisonCard, { props: { comparison: createMockComparison() } });

      expect(screen.getByText('は')).toBeInTheDocument();
      expect(screen.getByText('が')).toBeInTheDocument();
    });

    it('should render multiple patterns', () => {
      render(ComparisonCard, {
        props: { comparison: createMockComparison({ patterns: ['は', 'が', 'も'] }) }
      });

      expect(screen.getByText('は')).toBeInTheDocument();
      expect(screen.getByText('が')).toBeInTheDocument();
      expect(screen.getByText('も')).toBeInTheDocument();
    });

    it('should render pattern badges with correct class', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison() }
      });

      const badges = container.querySelectorAll('.comparison-pattern-badge');
      expect(badges.length).toBe(2);
    });
  });

  describe('Tags', () => {
    it('should render JLPT level tag', () => {
      render(ComparisonCard, {
        props: { comparison: createMockComparison({ jlptLevel: 'N5' }) }
      });

      expect(screen.getByText('N5')).toBeInTheDocument();
    });

    it('should render difficulty tag', () => {
      render(ComparisonCard, {
        props: { comparison: createMockComparison({ difficulty: 'beginner' }) }
      });

      expect(screen.getByText('beginner')).toBeInTheDocument();
    });

    it('should render both JLPT and difficulty tags', () => {
      render(ComparisonCard, {
        props: { comparison: createMockComparison({ jlptLevel: 'N4', difficulty: 'intermediate' }) }
      });

      expect(screen.getByText('N4')).toBeInTheDocument();
      expect(screen.getByText('intermediate')).toBeInTheDocument();
    });

    it('should not render tags section when no tags', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison({ jlptLevel: undefined, difficulty: undefined }) }
      });

      expect(container.querySelector('.comparison-card-meta')).not.toBeInTheDocument();
    });

    it('should have correct tag classes', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison() }
      });

      expect(container.querySelector('.tag-jlpt')).toBeInTheDocument();
      expect(container.querySelector('.tag-difficulty')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should be clickable card element', async () => {
      const user = userEvent.setup();
      render(ComparisonCard, {
        props: { comparison: createMockComparison() }
      });

      const card = screen.getByRole('button');
      expect(card).toBeInTheDocument();
      // Should not throw when clicked
      await user.click(card);
    });

    it('should respond to Enter key press', async () => {
      render(ComparisonCard, {
        props: { comparison: createMockComparison() }
      });

      const card = screen.getByRole('button');
      // Should not throw when Enter is pressed
      await fireEvent.keyDown(card, { key: 'Enter' });
    });
  });

  describe('Accessibility', () => {
    it('should have button role', () => {
      render(ComparisonCard, { props: { comparison: createMockComparison() } });

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should have tabindex for keyboard focus', () => {
      render(ComparisonCard, { props: { comparison: createMockComparison() } });

      const card = screen.getByRole('button');
      expect(card).toHaveAttribute('tabindex', '0');
    });
  });

  describe('Edge Cases', () => {
    it('should handle comparison with single pattern', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison({ patterns: ['は'] }) }
      });

      const badges = container.querySelectorAll('.comparison-pattern-badge');
      expect(badges.length).toBe(1);
    });

    it('should handle comparison without english', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison({ english: undefined }) }
      });

      expect(container.querySelector('.comparison-card-description-en')).not.toBeInTheDocument();
    });

    it('should handle comparison with only JLPT tag', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison({ difficulty: undefined }) }
      });

      expect(container.querySelector('.tag-jlpt')).toBeInTheDocument();
      expect(container.querySelector('.tag-difficulty')).not.toBeInTheDocument();
    });

    it('should handle comparison with only difficulty tag', () => {
      const { container } = render(ComparisonCard, {
        props: { comparison: createMockComparison({ jlptLevel: undefined }) }
      });

      expect(container.querySelector('.tag-jlpt')).not.toBeInTheDocument();
      expect(container.querySelector('.tag-difficulty')).toBeInTheDocument();
    });

    it('should handle many patterns', () => {
      const { container } = render(ComparisonCard, {
        props: {
          comparison: createMockComparison({
            patterns: ['は', 'が', 'も', 'の', 'を']
          })
        }
      });

      const badges = container.querySelectorAll('.comparison-pattern-badge');
      expect(badges.length).toBe(5);
    });
  });
});
