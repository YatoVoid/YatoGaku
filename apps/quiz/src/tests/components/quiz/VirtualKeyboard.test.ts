/**
 * Component tests for VirtualKeyboard.svelte
 * Tests rendering, key interactions, script switching, and special keys
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import VirtualKeyboard from '$lib/components/quiz/VirtualKeyboard.svelte';

describe('VirtualKeyboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Visibility', () => {
    it('should render when visible is true', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      expect(container.querySelector('.virtual-keyboard')).toBeInTheDocument();
    });

    it('should not render when visible is false', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: false } });

      expect(container.querySelector('.virtual-keyboard')).not.toBeInTheDocument();
    });

    it('should be visible by default', () => {
      const { container } = render(VirtualKeyboard);

      expect(container.querySelector('.virtual-keyboard')).toBeInTheDocument();
    });
  });

  describe('Script Tabs', () => {
    it('should render Hiragana tab', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText(/Hiragana/)).toBeInTheDocument();
    });

    it('should render Katakana tab', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText(/Katakana/)).toBeInTheDocument();
    });

    it('should show Hiragana as active by default', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      const tabs = container.querySelectorAll('.keyboard-tab');
      const hiraganaTab = Array.from(tabs).find(t => t.textContent?.includes('Hiragana'));
      expect(hiraganaTab).toHaveClass('active');
    });

    it('should switch to Katakana tab on click', async () => {
      const user = userEvent.setup();
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      const katakanaTab = screen.getByText(/Katakana/);
      await user.click(katakanaTab);

      expect(katakanaTab).toHaveClass('active');

      const hiraganaTab = screen.getByText(/Hiragana/);
      expect(hiraganaTab).not.toHaveClass('active');
    });

    it('should switch back to Hiragana tab', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      // Switch to Katakana
      await user.click(screen.getByText(/Katakana/));
      // Switch back to Hiragana
      await user.click(screen.getByText(/Hiragana/));

      expect(screen.getByText(/Hiragana/)).toHaveClass('active');
    });
  });

  describe('Hiragana Characters', () => {
    it('should render hiragana vowels (あいうえお)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('あ')).toBeInTheDocument();
      expect(screen.getByText('い')).toBeInTheDocument();
      expect(screen.getByText('う')).toBeInTheDocument();
      expect(screen.getByText('え')).toBeInTheDocument();
      expect(screen.getByText('お')).toBeInTheDocument();
    });

    it('should render hiragana ka row (かきくけこ)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('か')).toBeInTheDocument();
      expect(screen.getByText('き')).toBeInTheDocument();
      expect(screen.getByText('く')).toBeInTheDocument();
      expect(screen.getByText('け')).toBeInTheDocument();
      expect(screen.getByText('こ')).toBeInTheDocument();
    });

    it('should render ん character', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('ん')).toBeInTheDocument();
    });
  });

  describe('Katakana Characters', () => {
    it('should render katakana vowels when switched', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      await user.click(screen.getByText(/Katakana/));

      expect(screen.getByText('ア')).toBeInTheDocument();
      expect(screen.getByText('イ')).toBeInTheDocument();
      expect(screen.getByText('ウ')).toBeInTheDocument();
      expect(screen.getByText('エ')).toBeInTheDocument();
      expect(screen.getByText('オ')).toBeInTheDocument();
    });

    it('should render katakana ka row when switched', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      await user.click(screen.getByText(/Katakana/));

      expect(screen.getByText('カ')).toBeInTheDocument();
      expect(screen.getByText('キ')).toBeInTheDocument();
      expect(screen.getByText('ク')).toBeInTheDocument();
      expect(screen.getByText('ケ')).toBeInTheDocument();
      expect(screen.getByText('コ')).toBeInTheDocument();
    });

    it('should render ン character when in katakana mode', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      await user.click(screen.getByText(/Katakana/));

      expect(screen.getByText('ン')).toBeInTheDocument();
    });
  });

  describe('Character Insertion', () => {
    it('should have clickable character buttons', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      const charBtn = screen.getByText('あ');
      expect(charBtn.tagName).toBe('BUTTON');
      expect(charBtn).toHaveClass('keyboard-key');
      // Should not throw when clicked
      await user.click(charBtn);
    });

    it('should have all ka-row characters as buttons', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      ['か', 'き', 'く', 'け', 'こ'].forEach(char => {
        const btn = screen.getByText(char);
        expect(btn.tagName).toBe('BUTTON');
      });
    });

    it('should switch to katakana and show katakana character buttons', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      await user.click(screen.getByText(/Katakana/));

      const charBtn = screen.getByText('ア');
      expect(charBtn.tagName).toBe('BUTTON');
      expect(charBtn).toHaveClass('keyboard-key');
    });
  });

  describe('Special Characters', () => {
    it('should render dakuten character (゛)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('゛')).toBeInTheDocument();
    });

    it('should render handakuten character (゜)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('゜')).toBeInTheDocument();
    });

    it('should render long vowel mark (ー)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('ー')).toBeInTheDocument();
    });

    it('should render small kana button (小)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('小')).toBeInTheDocument();
    });

    it('should render punctuation marks (、。)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('、')).toBeInTheDocument();
      expect(screen.getByText('。')).toBeInTheDocument();
    });

    it('should have clickable special character buttons', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      const btn = screen.getByText('小');
      expect(btn.tagName).toBe('BUTTON');
      await user.click(btn);
    });
  });

  describe('Delete and Clear', () => {
    it('should render delete button (⌫)', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('⌫')).toBeInTheDocument();
    });

    it('should render clear button', () => {
      render(VirtualKeyboard, { props: { visible: true } });

      expect(screen.getByText('CLR')).toBeInTheDocument();
    });

    it('should have clickable delete button', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      const deleteBtn = screen.getByText('⌫');
      expect(deleteBtn.tagName).toBe('BUTTON');
      expect(deleteBtn).toHaveClass('keyboard-key', 'special');
      await user.click(deleteBtn);
    });

    it('should have clickable clear button', async () => {
      const user = userEvent.setup();
      render(VirtualKeyboard, { props: { visible: true } });

      const clearBtn = screen.getByText('CLR');
      expect(clearBtn.tagName).toBe('BUTTON');
      expect(clearBtn).toHaveClass('keyboard-key', 'special');
      await user.click(clearBtn);
    });
  });

  describe('Layout', () => {
    it('should have keyboard grid structure', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      expect(container.querySelector('.keyboard-grid')).toBeInTheDocument();
      expect(container.querySelector('.keyboard-main')).toBeInTheDocument();
      expect(container.querySelector('.keyboard-sidebar')).toBeInTheDocument();
    });

    it('should have empty slots for missing characters', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      const emptyKeys = container.querySelectorAll('.keyboard-key.empty');
      expect(emptyKeys.length).toBeGreaterThan(0);
    });

    it('should have accent class on dakuten and handakuten', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      const accentKeys = container.querySelectorAll('.keyboard-key.accent');
      expect(accentKeys.length).toBe(2); // ゛ and ゜
    });

    it('should have special class on delete and clear buttons', () => {
      const { container } = render(VirtualKeyboard, { props: { visible: true } });

      const specialKeys = container.querySelectorAll('.keyboard-key.special');
      expect(specialKeys.length).toBe(2); // ⌫ and Clear
    });
  });
});
