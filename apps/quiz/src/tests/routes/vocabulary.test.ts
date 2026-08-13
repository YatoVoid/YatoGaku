/**
 * Tests for the vocabulary selection feature on the vocabulary page.
 * Covers: toggleItem, toggleFiltered, clearSelection, allFilteredSelected, practice navigation.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import { goto } from '$app/navigation';
import VocabPage from '../../routes/course/[courseId]/lesson/[id]/vocabulary/+page.svelte';
import type { VocabItem } from '$lib/types';

// ------------------------------------------------------------
// Fixtures
// ------------------------------------------------------------

const mockVocab: VocabItem[] = [
  { japanese: '食べる', kana: 'たべる', vietnamese: 'Ăn', english: 'to eat', type: 'main' },
  { japanese: '飲む',   kana: 'のむ',   vietnamese: 'Uống', english: 'to drink', type: 'main' },
  { japanese: '寝る',   kana: 'ねる',   vietnamese: 'Ngủ', english: 'to sleep', type: 'additional' }
];

// ------------------------------------------------------------
// Module mocks
// ------------------------------------------------------------

vi.mock('$lib/data/courses', () => ({
  getCourse: vi.fn(() => ({
    metadata: { title: 'N5 Course' },
    getLessonData: vi.fn(() => ({
      lessonNumber: 1,
      title: 'Bài 1',
      vocabulary: mockVocab,
      grammar: []
    }))
  }))
}));

vi.mock('$lib/utils/kanaUtils', () => ({
  kanaToRomaji: (k: string) => k
}));

vi.mock('$lib/utils/audioUtils', () => ({
  playJapaneseAudio: vi.fn()
}));

// ------------------------------------------------------------
// Browser API stubs
// ------------------------------------------------------------

// sessionStorage mock (jsdom doesn't support it fully in all environments)
const sessionStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (k: string) => store[k] ?? null,
    setItem: (k: string, v: string) => { store[k] = v; },
    removeItem: (k: string) => { delete store[k]; },
    clear: () => { store = {}; }
  };
})();

Object.defineProperty(globalThis, 'sessionStorage', {
  value: sessionStorageMock,
  writable: true,
  configurable: true
});

beforeEach(() => {
  vi.clearAllMocks();
  sessionStorageMock.clear();
  // Enable hasAudio (onMount checks speechSynthesis)
  Object.defineProperty(window, 'speechSynthesis', {
    value: { speak: vi.fn(), cancel: vi.fn() },
    writable: true,
    configurable: true
  });
  (window as any).SpeechSynthesisUtterance = class {
    lang = ''; rate = 1;
    constructor(public text?: string) {}
  };
});

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function getVocabCards(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>('.vocab-card'));
}

function renderPage() {
  return render(VocabPage);
}

// ------------------------------------------------------------
// Tests
// ------------------------------------------------------------

describe('Vocabulary Page - Selection Feature', () => {

  describe('initial state', () => {
    it('renders all vocab cards', () => {
      const { container } = renderPage();
      expect(getVocabCards(container)).toHaveLength(3);
    });

    it('all cards start unselected', () => {
      const { container } = renderPage();
      getVocabCards(container).forEach(card => {
        expect(card).toHaveAttribute('aria-checked', 'false');
        expect(card).not.toHaveClass('selected');
      });
    });

    it('practice bar is hidden when nothing is selected', () => {
      renderPage();
      expect(screen.queryByText('Flashcard')).not.toBeInTheDocument();
    });
  });

  describe('toggleItem — individual card click', () => {
    it('selects a card on click', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);

      expect(getVocabCards(container)[0]).toHaveAttribute('aria-checked', 'true');
      expect(getVocabCards(container)[0]).toHaveClass('selected');
    });

    it('deselects a card on second click', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();
      const card = getVocabCards(container)[0];

      await user.click(card);
      await user.click(card);

      expect(card).toHaveAttribute('aria-checked', 'false');
      expect(card).not.toHaveClass('selected');
    });

    it('selecting multiple cards keeps others selected', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();
      const [card1, card2] = getVocabCards(container);

      await user.click(card1);
      await user.click(card2);

      expect(card1).toHaveAttribute('aria-checked', 'true');
      expect(card2).toHaveAttribute('aria-checked', 'true');
    });

    it('Space key toggles card selection', async () => {
      const { container } = renderPage();
      const card = getVocabCards(container)[0];

      card.focus();
      await fireEvent.keyDown(card, { key: ' ' });

      expect(card).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('practice bar visibility', () => {
    it('shows practice bar when one item is selected', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);

      expect(screen.getByText('Flashcard')).toBeInTheDocument();
      expect(screen.getByText('Trắc nghiệm')).toBeInTheDocument();
      expect(screen.getByText('Nhập chữ')).toBeInTheDocument();
    });

    it('shows correct count in practice bar', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(getVocabCards(container)[1]);

      const practiceBar = screen.getByTitle('Bỏ chọn tất cả').closest('.practice-bar')!;
      expect(within(practiceBar as HTMLElement).getByText('2')).toBeInTheDocument();
    });

    it('hides practice bar after deselecting all items', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();
      const card = getVocabCards(container)[0];

      await user.click(card);
      await user.click(card);

      expect(screen.queryByText('Flashcard')).not.toBeInTheDocument();
    });
  });

  describe('toggleFiltered — select/deselect all', () => {
    it('selects all visible items on "Chọn tất cả" click', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(screen.getByText(/Chọn tất cả/));

      getVocabCards(container).forEach(card => {
        expect(card).toHaveAttribute('aria-checked', 'true');
      });
    });

    it('deselects all when all are already selected', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(screen.getByText(/Chọn tất cả/));
      await user.click(screen.getByText(/Bỏ chọn/));

      getVocabCards(container).forEach(card => {
        expect(card).toHaveAttribute('aria-checked', 'false');
      });
    });

    it('button label changes to "Bỏ chọn" when all items selected', async () => {
      const user = userEvent.setup();
      renderPage();

      await user.click(screen.getByText(/Chọn tất cả/));

      expect(screen.getByText(/Bỏ chọn/)).toBeInTheDocument();
    });

    it('button label reverts to "Chọn tất cả" after partial deselect', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(screen.getByText(/Chọn tất cả/));

      // Deselect one card to make it partial
      await user.click(getVocabCards(container)[0]);

      expect(screen.getByText(/Chọn tất cả/)).toBeInTheDocument();
    });
  });

  describe('clearSelection', () => {
    it('"Xóa chọn" button clears all selected', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(screen.getByText(/Chọn tất cả/));
      await user.click(screen.getByText('Xóa chọn'));

      getVocabCards(container).forEach(card => {
        expect(card).toHaveAttribute('aria-checked', 'false');
      });
    });

    it('✕ button in practice bar clears selection', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(screen.getByTitle('Bỏ chọn tất cả'));

      expect(screen.queryByText('Flashcard')).not.toBeInTheDocument();
    });

    it('"Xóa chọn" button is only visible when something is selected', async () => {
      renderPage();
      expect(screen.queryByText('Xóa chọn')).not.toBeInTheDocument();
    });
  });

  describe('practice navigation', () => {
    it('saves selected vocab to sessionStorage and navigates to flashcard', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);  // select 食べる
      await user.click(screen.getByText('Flashcard'));

      const stored = JSON.parse(sessionStorageMock.getItem('smartquiz_custom_vocab') ?? '[]');
      expect(stored).toHaveLength(1);
      expect(stored[0].japanese).toBe('食べる');
      expect(goto).toHaveBeenCalledWith(expect.stringContaining('/quiz/flashcard'));
    });

    it('navigates to multiple-choice quiz', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(screen.getByText('Trắc nghiệm'));

      expect(goto).toHaveBeenCalledWith(expect.stringContaining('/quiz/multiple-choice'));
    });

    it('navigates to typing quiz', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(screen.getByText('Nhập chữ'));

      expect(goto).toHaveBeenCalledWith(expect.stringContaining('/quiz/typing'));
    });

    it('saves all selected items (multiple) to sessionStorage', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(getVocabCards(container)[1]);
      await user.click(screen.getByText('Flashcard'));

      const stored = JSON.parse(sessionStorageMock.getItem('smartquiz_custom_vocab') ?? '[]');
      expect(stored).toHaveLength(2);
    });
  });

  describe('selected count display', () => {
    it('shows selected count in selection bar', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(getVocabCards(container)[1]);

      expect(screen.getByText('2 đã chọn')).toBeInTheDocument();
    });

    it('selected count updates on deselect', async () => {
      const user = userEvent.setup();
      const { container } = renderPage();

      await user.click(getVocabCards(container)[0]);
      await user.click(getVocabCards(container)[1]);
      await user.click(getVocabCards(container)[0]); // deselect first

      expect(screen.getByText('1 đã chọn')).toBeInTheDocument();
    });
  });
});
