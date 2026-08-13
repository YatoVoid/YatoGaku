/**
 * Component tests for TypingQuiz.svelte
 * Tests input rendering, answer validation, keyboard interactions, and virtual keyboard
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import TypingQuiz from '$lib/components/quiz/TypingQuiz.svelte';
import type { VocabItem } from '$lib/types';

// Mock the stores
vi.mock('$lib/stores', async () => {
  const { writable } = await import('svelte/store');
  const store = writable({
    darkMode: false,
    showVirtualKeyboard: false,
    activeModal: null,
    breadcrumbs: []
  });
  return {
    uiStore: store,
    showVirtualKeyboard: vi.fn(),
    hideVirtualKeyboard: vi.fn(),
    toggleVirtualKeyboard: vi.fn()
  };
});

function createMockQuestion(overrides: Partial<VocabItem> = {}): VocabItem {
  return {
    japanese: '食べる',
    kana: 'たべる',
    vietnamese: 'Ăn',
    english: 'to eat',
    type: 'main',
    ...overrides
  };
}

describe('TypingQuiz Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(window, 'speechSynthesis', {
      value: { speak: vi.fn(), cancel: vi.fn() },
      writable: true
    });
    window.SpeechSynthesisUtterance = class {
      lang = '';
      rate = 1;
      constructor(public text?: string) {}
    } as any;
  });

  describe('Rendering', () => {
    it('should render the question label', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      expect(screen.getByText('Type the answer:')).toBeInTheDocument();
    });

    it('should render the question text', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      expect(screen.getByText('食べる')).toBeInTheDocument();
    });

    it('should render English text when available', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion({ english: 'to eat' }), answer: '食べる' }
      });

      expect(screen.getByText('to eat')).toBeInTheDocument();
    });

    it('should not render English when not available', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion({ english: '' }), answer: '食べる' }
      });

      expect(screen.queryByText('to eat')).not.toBeInTheDocument();
    });

    it('should render text input', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      expect(input).toBeInTheDocument();
    });

    it('should render submit button', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      expect(screen.getByText('Submit Answer')).toBeInTheDocument();
    });

    it('should render speak button', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      expect(screen.getByText(/Speak/)).toBeInTheDocument();
    });

    it('should render keyboard toggle button', () => {
      const { container } = render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      // The keyboard toggle button has aria-label "Toggle keyboard"
      const kbButton = container.querySelector('button[aria-label="Toggle keyboard"]');
      expect(kbButton).toBeTruthy();
    });
  });

  describe('Input Behavior', () => {
    it('should accept text input', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'test' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'test');

      expect(input).toHaveValue('test');
    });

    it('should have submit button disabled when input is empty', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      const submitBtn = screen.getByText('Submit Answer');
      expect(submitBtn).toBeDisabled();
    });

    it('should enable submit button when input has text', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'something');

      const submitBtn = screen.getByText('Submit Answer');
      expect(submitBtn).not.toBeDisabled();
    });
  });

  describe('Answer Validation', () => {
    it('should show correct feedback for correct answer', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should show wrong feedback for incorrect answer', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'nomu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
    });

    it('should show correct answer in wrong feedback', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'nomu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/The correct answer is: taberu/)).toBeInTheDocument();
    });

    it('should be case-insensitive', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'Taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should trim whitespace', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, '  taberu  ');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should not submit empty input', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      // Submit button should be disabled
      const submitBtn = screen.getByText('Submit Answer');
      expect(submitBtn).toBeDisabled();
    });

    it('should not submit whitespace-only input', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, '   ');
      await user.click(screen.getByText('Submit Answer'));

      // Should not show feedback since whitespace-only is treated as empty
      expect(screen.queryByText(/Correct!/)).not.toBeInTheDocument();
      expect(screen.queryByText(/Wrong!/)).not.toBeInTheDocument();
    });
  });

  describe('Keyboard Submit', () => {
    it('should submit on Enter key', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      // Enter dispatches on window (svelte:window on:keydown)
      await fireEvent.keyDown(window, { key: 'Enter' });

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should show Next Question button after answering', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Next Question/)).toBeInTheDocument();
    });
  });

  describe('Event Dispatching', () => {
    it('should show correct feedback after correct answer submission', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should show wrong feedback after wrong answer submission', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'wrong');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
      expect(screen.getByText(/The correct answer is: taberu/)).toBeInTheDocument();
    });
  });

  describe('Post-Answer State', () => {
    it('should disable input after answering', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(input).toBeDisabled();
    });

    it('should hide submit button after answering', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.queryByText('Submit Answer')).not.toBeInTheDocument();
    });

    it('should show correct input class for correct answer', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'taberu');
      await user.click(screen.getByText('Submit Answer'));

      expect(input).toHaveClass('correct');
    });

    it('should show wrong input class for wrong answer', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: 'taberu' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, 'nomu');
      await user.click(screen.getByText('Submit Answer'));

      expect(input).toHaveClass('wrong');
    });
  });

  describe('Hint Feature', () => {
    it('should show hint button', () => {
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      expect(screen.getByText(/Show Romaji Hint/)).toBeInTheDocument();
    });

    it('should show kana hint when hint button is clicked', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion({ kana: 'たべる' }), answer: '食べる' }
      });

      await user.click(screen.getByText(/Show Romaji Hint/));

      expect(screen.getByText('たべる')).toBeInTheDocument();
    });

    it('should hide hint button after clicking', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion({ kana: 'たべる' }), answer: '食べる' }
      });

      await user.click(screen.getByText(/Show Romaji Hint/));

      expect(screen.queryByText(/Show Romaji Hint/)).not.toBeInTheDocument();
    });
  });

  describe('Audio', () => {
    it('should play audio on speak button click', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      await user.click(screen.getByText(/Speak/));

      expect(window.speechSynthesis.speak).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle question without english', () => {
      const { container } = render(TypingQuiz, {
        props: { question: createMockQuestion({ english: '' }), answer: '食べる' }
      });

      expect(container.querySelector('.question-romaji')).not.toBeInTheDocument();
    });

    it('should handle Japanese answer with exact match', async () => {
      const user = userEvent.setup();
      render(TypingQuiz, {
        props: { question: createMockQuestion(), answer: '食べる' }
      });

      const input = screen.getByPlaceholderText('Type your answer...');
      await user.type(input, '食べる');
      await user.click(screen.getByText('Submit Answer'));

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });
  });
});
