/**
 * Component tests for FlashCard.svelte
 * Tests rendering, flip behavior, keyboard interactions, navigation, and accessibility
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import FlashCard from '$lib/components/quiz/FlashCard.svelte';
import type { VocabItem } from '$lib/types';

function createMockItem(overrides: Partial<VocabItem> = {}): VocabItem {
  return {
    japanese: '食べる',
    kana: 'たべる',
    vietnamese: 'Ăn',
    english: 'to eat',
    type: 'main',
    example: '毎日ご飯を食べます。',
    ...overrides
  };
}

describe('FlashCard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock speechSynthesis
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

  describe('Rendering - Front Side', () => {
    it('should render the Japanese text', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      expect(screen.getByText('食べる')).toBeInTheDocument();
    });

    it('should render custom questionText when provided', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item, questionText: 'Custom Question' } });

      expect(screen.getByText('Custom Question')).toBeInTheDocument();
    });

    it('should show flip hint text', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      expect(screen.getByText('Space to flip · F1 to speak')).toBeInTheDocument();
    });

    it('should render speak button', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      expect(screen.getByText(/Speak/)).toBeInTheDocument();
    });
  });

  describe('Rendering - Back Side', () => {
    it('should render Vietnamese meaning', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      expect(screen.getByText('Ăn')).toBeInTheDocument();
    });

    it('should render custom answerText when provided', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item, answerText: 'to eat' } });

      expect(screen.getByText('to eat')).toBeInTheDocument();
    });

    it('should render example when available', () => {
      const item = createMockItem({ example: '毎日ご飯を食べます。' });
      render(FlashCard, { props: { item } });

      expect(screen.getByText('毎日ご飯を食べます。')).toBeInTheDocument();
    });

    it('should not render example when not provided', () => {
      const item = createMockItem({ example: undefined });
      const { container } = render(FlashCard, { props: { item } });

      expect(container.querySelector('.fc-example')).not.toBeInTheDocument();
    });
  });

  describe('Flip Behavior', () => {
    it('should not have flipped class by default', () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard');
      expect(card).not.toHaveClass('flipped');
    });

    it('should flip on click', async () => {
      const user = userEvent.setup();
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard')!;
      await user.click(card);

      expect(card).toHaveClass('flipped');
    });

    it('should toggle flip on multiple clicks', async () => {
      const user = userEvent.setup();
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard')!;
      await user.click(card);
      expect(card).toHaveClass('flipped');

      await user.click(card);
      expect(card).not.toHaveClass('flipped');
    });

    it('should start flipped when flipped prop is true', () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item, flipped: true } });

      const card = container.querySelector('.flashcard');
      expect(card).toHaveClass('flipped');
    });
  });

  describe('Keyboard Interactions', () => {
    it('should flip on Space key', async () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard')!;
      await fireEvent.keyDown(card, { code: 'Space' });

      expect(card).toHaveClass('flipped');
    });

    it('should flip on Enter key', async () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard')!;
      await fireEvent.keyDown(card, { code: 'Enter' });

      expect(card).toHaveClass('flipped');
    });

    it('should not flip on other keys', async () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard')!;
      await fireEvent.keyDown(card, { code: 'KeyA' });

      expect(card).not.toHaveClass('flipped');
    });
  });

  describe('Navigation Controls', () => {
    it('should render Wrong button', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      expect(screen.getByText(/Wrong/)).toBeInTheDocument();
    });

    it('should render Correct button', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      expect(screen.getByText(/Correct/)).toBeInTheDocument();
    });

    it('should render Correct button that is clickable', async () => {
      const user = userEvent.setup();
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      const correctBtn = screen.getByText(/Correct/);
      expect(correctBtn).toBeInTheDocument();
      expect(correctBtn.tagName).toBe('BUTTON');
      expect(correctBtn).not.toBeDisabled();
    });

    it('should render Wrong button that is clickable', async () => {
      const user = userEvent.setup();
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      const wrongBtn = screen.getByText(/Wrong/);
      expect(wrongBtn).toBeInTheDocument();
      expect(wrongBtn.tagName).toBe('BUTTON');
      expect(wrongBtn).not.toBeDisabled();
    });

    it('should have correct button with success class', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      const correctBtn = screen.getByText(/Correct/);
      expect(correctBtn).toHaveAttribute('data-variant', 'success');
    });

    it('should have wrong button with danger class', () => {
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      const wrongBtn = screen.getByText(/Wrong/);
      expect(wrongBtn).toHaveAttribute('data-variant', 'destructive');
    });
  });

  describe('Audio', () => {
    it('should call speechSynthesis on speak button click', async () => {
      const user = userEvent.setup();
      const item = createMockItem();
      render(FlashCard, { props: { item } });

      const speakBtn = screen.getByText(/Speak/);
      await user.click(speakBtn);

      expect(window.speechSynthesis.speak).toHaveBeenCalled();
    });

    it('should not flip card when speak button is clicked', async () => {
      const user = userEvent.setup();
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const speakBtn = screen.getByText(/Speak/);
      await user.click(speakBtn);

      const card = container.querySelector('.flashcard');
      expect(card).not.toHaveClass('flipped');
    });
  });

  describe('Accessibility', () => {
    it('should have button role on card', () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard');
      expect(card).toHaveAttribute('role', 'button');
    });

    it('should have aria-label for flip', () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard');
      expect(card).toHaveAttribute('aria-label', 'Flip card');
    });

    it('should have tabindex for keyboard focus', () => {
      const item = createMockItem();
      const { container } = render(FlashCard, { props: { item } });

      const card = container.querySelector('.flashcard');
      expect(card).toHaveAttribute('tabindex', '0');
    });
  });

  describe('Edge Cases', () => {
    it('should handle item without kana', () => {
      const item = createMockItem({ japanese: 'テスト', kana: 'テスト' });
      const { container } = render(FlashCard, { props: { item } });

      // kana same as japanese - should not show kana separately
      expect(container.querySelectorAll('.fc-kana').length).toBe(0);
    });

    it('should handle item without example', () => {
      const item = createMockItem({ example: undefined });
      const { container } = render(FlashCard, { props: { item } });

      expect(container.querySelector('.fc-example')).not.toBeInTheDocument();
    });

    it('should handle item without english', () => {
      const item = createMockItem({ english: '' });
      render(FlashCard, { props: { item } });

      // Empty string still renders but is empty
      expect(screen.queryByText('to eat')).not.toBeInTheDocument();
    });
  });
});
