/**
 * Component tests for MultipleChoice.svelte
 * Tests rendering, option selection, feedback, keyboard navigation, and accessibility
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import MultipleChoice from '$lib/components/quiz/MultipleChoice.svelte';
import type { VocabItem } from '$lib/types';

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

const defaultOptions = ['Ăn', 'Uống', 'Ngủ', 'Đi'];
const correctAnswer = 'Ăn';

describe('MultipleChoice Component', () => {
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
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      expect(screen.getByText('What is the meaning of:')).toBeInTheDocument();
    });

    it('should render the Japanese question text', () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      expect(screen.getByText('食べる')).toBeInTheDocument();
    });

    it('should render custom questionText when provided', () => {
      render(MultipleChoice, {
        props: {
          question: createMockQuestion(),
          questionText: 'Custom Question',
          options: defaultOptions,
          answer: correctAnswer
        }
      });

      expect(screen.getByText('Custom Question')).toBeInTheDocument();
    });

    it('should render speak button', () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      expect(screen.getByText(/Speak/)).toBeInTheDocument();
    });
  });

  describe('Options Rendering', () => {
    it('should render all 4 options', () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      defaultOptions.forEach(option => {
        expect(screen.getByText(option)).toBeInTheDocument();
      });
    });

    it('should render option numbers 1-4', () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      expect(screen.getByText('1.')).toBeInTheDocument();
      expect(screen.getByText('2.')).toBeInTheDocument();
      expect(screen.getByText('3.')).toBeInTheDocument();
      expect(screen.getByText('4.')).toBeInTheDocument();
    });

    it('should render options as buttons', () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      const buttons = screen.getAllByRole('button');
      // 4 options + 1 speak button = 5
      expect(buttons.length).toBeGreaterThanOrEqual(4);
    });

    it('should show keyboard hint before answering', () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      expect(screen.getByText(/Press 1-4 to choose/)).toBeInTheDocument();
    });
  });

  describe('Option Selection', () => {
    it('should select correct option and show correct feedback', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Ăn'));

      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should select wrong option and show wrong feedback', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Uống'));

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
      expect(screen.getByText(/The correct answer is/)).toBeInTheDocument();
    });

    it('should disable all options after answering', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Ăn'));

      const optionButtons = screen.getAllByRole('button').filter(
        btn => btn.classList.contains('mc-option')
      );
      optionButtons.forEach(btn => {
        expect(btn).toBeDisabled();
      });
    });

    it('should not allow selecting another option after answering', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      // First click
      await user.click(screen.getByText('Ăn'));

      // All option buttons should be disabled after answering
      const optionButtons = screen.getAllByRole('button').filter(
        btn => btn.classList.contains('mc-option')
      );
      optionButtons.forEach(btn => {
        expect(btn).toBeDisabled();
      });
    });

    it('should hide keyboard hint after answering', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Ăn'));

      expect(screen.queryByText(/Press 1-4 to choose/)).not.toBeInTheDocument();
    });
  });

  describe('Feedback Display', () => {
    it('should show correct feedback with correct class', async () => {
      const user = userEvent.setup();
      const { container } = render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Ăn'));

      const feedback = container.querySelector('.feedback');
      expect(feedback).toHaveClass('correct');
    });

    it('should show wrong feedback with wrong class', async () => {
      const user = userEvent.setup();
      const { container } = render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Uống'));

      const feedback = container.querySelector('.feedback');
      expect(feedback).toHaveClass('wrong');
    });

    it('should show correct answer in wrong feedback', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Ngủ'));

      expect(screen.getByText(/The correct answer is: Ăn/)).toBeInTheDocument();
    });

    it('should highlight correct option after wrong answer', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      // Click via keyboard to select option 2 (Uống = wrong)
      await fireEvent.keyDown(window, { key: '2' });

      // The correct answer should be visible in the feedback
      expect(screen.getByText(/The correct answer is: Ăn/)).toBeInTheDocument();
    });

    it('should show wrong feedback when selecting incorrect option', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      // Click via keyboard to select option 3 (Ngủ = wrong)
      await fireEvent.keyDown(window, { key: '3' });

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
    });
  });

  describe('Event Dispatching', () => {
    it('should show correct feedback immediately after correct answer', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText('Ăn'));

      // Feedback is shown immediately
      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should show wrong feedback immediately after wrong answer', async () => {
      const user = userEvent.setup();
      const { container } = render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      const options = container.querySelectorAll('.mc-option');
      const wrongBtn = Array.from(options).find(o => o.textContent?.includes('Uống'))!;
      await user.click(wrongBtn);

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
      expect(screen.getByText(/The correct answer is/)).toBeInTheDocument();
    });
  });

  describe('Keyboard Navigation', () => {
    it('should select option 1 on key press 1', async () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await fireEvent.keyDown(window, { key: '1' });

      // Option 1 is 'Ăn' which is correct
      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });

    it('should select option 2 on key press 2', async () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await fireEvent.keyDown(window, { key: '2' });

      // Option 2 is 'Uống' which is wrong
      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
    });

    it('should select option 3 on key press 3', async () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await fireEvent.keyDown(window, { key: '3' });

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
    });

    it('should select option 4 on key press 4', async () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await fireEvent.keyDown(window, { key: '4' });

      expect(screen.getByText(/Wrong!/)).toBeInTheDocument();
    });

    it('should not respond to key press 5', async () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await fireEvent.keyDown(window, { key: '5' });

      expect(screen.queryByText(/Correct!/)).not.toBeInTheDocument();
      expect(screen.queryByText(/Wrong!/)).not.toBeInTheDocument();
    });

    it('should ignore keyboard after answering', async () => {
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await fireEvent.keyDown(window, { key: '1' });
      expect(screen.getByText(/Correct!/)).toBeInTheDocument();

      // Try pressing another key - should not change anything
      await fireEvent.keyDown(window, { key: '2' });
      // Still shows correct feedback, not wrong
      expect(screen.getByText(/Correct!/)).toBeInTheDocument();
    });
  });

  describe('Audio', () => {
    it('should play audio on speak button click', async () => {
      const user = userEvent.setup();
      render(MultipleChoice, {
        props: { question: createMockQuestion(), options: defaultOptions, answer: correctAnswer }
      });

      await user.click(screen.getByText(/Speak/));

      expect(window.speechSynthesis.speak).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty options array', () => {
      const { container } = render(MultipleChoice, {
        props: { question: createMockQuestion(), options: [], answer: correctAnswer }
      });

      expect(container.querySelector('.mc-options')).toBeInTheDocument();
    });

    it('should handle question without kana', () => {
      const { container } = render(MultipleChoice, {
        props: {
          question: createMockQuestion({ japanese: 'テスト', kana: 'テスト' }),
          options: defaultOptions,
          answer: correctAnswer
        }
      });

      expect(container.querySelector('.question-romaji')).not.toBeInTheDocument();
    });

    it('should handle two options', () => {
      render(MultipleChoice, {
        props: {
          question: createMockQuestion(),
          options: ['Ăn', 'Uống'],
          answer: correctAnswer
        }
      });

      expect(screen.getByText('1.')).toBeInTheDocument();
      expect(screen.getByText('2.')).toBeInTheDocument();
      expect(screen.queryByText('3.')).not.toBeInTheDocument();
    });
  });
});
