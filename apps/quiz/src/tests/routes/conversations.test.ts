/**
 * Tests for the Conversations page component.
 * Covers: level selection, expand/collapse, patterns/dialogue/cultural note rendering.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import ConversationsPage from '../../routes/conversations/+page.svelte';

// ── Mocks ────────────────────────────────────────────────────────────────────

vi.mock('$lib/utils/audioUtils', () => ({
  playJapaneseAudio: vi.fn()
}));

vi.mock('$lib/utils/kanaUtils', () => ({
  kanaToRomaji: (k: string) => `romaji:${k}`
}));

vi.mock('$lib/components/common/Breadcrumb.svelte', () => ({
  default: vi.fn()
}));

vi.mock('$lib/data/conversations', () => ({
  getConversations: vi.fn((level: string) => {
    if (level === 'n5') return [
      {
        id: 'n5-conv-01',
        title: 'Self-introduction',
        titleJp: '自己紹介',
        level: 'N5',
        situation: 'Meeting someone new',
        patterns: [
          {
            japanese: 'はじめまして',
            kana: 'はじめまして',
            vietnamese: 'Nice to meet you (pattern)',
            memoryTip: 'Remember: hajimemashite'
          }
        ],
        dialogue: [
          { speaker: 'A', japanese: 'はじめまして', kana: 'はじめまして', vietnamese: 'Nice to meet you' },
          { speaker: 'B', japanese: 'こちらこそ', kana: 'こちらこそ', vietnamese: 'Likewise' }
        ],
        culturalNote: 'Japanese people bow when greeting'
      },
      {
        id: 'n5-conv-02',
        title: 'Asking for directions',
        titleJp: '道を聞く',
        level: 'N5',
        situation: 'Standing on the street',
        patterns: [
          {
            japanese: '〜はどこですか',
            kana: '〜はどこですか',
            vietnamese: 'Where is ~?',
            memoryTip: 'Remember: doko = where'
          }
        ],
        dialogue: [
          { speaker: 'A', japanese: 'すみません', kana: 'すみません', vietnamese: 'Excuse me' },
          { speaker: 'B', japanese: 'はい', kana: 'はい', vietnamese: 'Yes' }
        ]
        // No culturalNote — tests the optional branch
      }
    ];
    if (level === 'n4') return [
      {
        id: 'n4-conv-01',
        title: 'Buying a ticket',
        titleJp: '切符を買う',
        level: 'N4',
        situation: 'At the train station',
        patterns: [
          { japanese: '〜まで', kana: '〜まで', vietnamese: 'To ~', memoryTip: 'made = to/until' }
        ],
        dialogue: [
          { speaker: 'A', japanese: 'すみません', kana: 'すみません', vietnamese: 'Excuse me' },
          { speaker: 'B', japanese: 'はい', kana: 'はい', vietnamese: 'Yes' }
        ]
      }
    ];
    return [];
  })
}));

// ── Setup ─────────────────────────────────────────────────────────────────────

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, 'speechSynthesis', {
    value: { speak: vi.fn(), cancel: vi.fn() },
    writable: true,
    configurable: true
  });
});

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('Conversations Page', () => {
  describe('initial render', () => {
    it('renders the page title', () => {
      render(ConversationsPage);
      expect(screen.getByText('Conversation Patterns')).toBeInTheDocument();
    });

    it('renders all 5 level buttons', () => {
      render(ConversationsPage);
      ['N5', 'N4', 'N3', 'N2', 'N1'].forEach(level => {
        expect(screen.getByText(level)).toBeInTheDocument();
      });
    });

    it('shows N5 conversations by default', () => {
      render(ConversationsPage);
      expect(screen.getByText('Self-introduction')).toBeInTheDocument();
      expect(screen.getByText('Asking for directions')).toBeInTheDocument();
    });

    it('N5 is selected by default (aria-checked)', () => {
      render(ConversationsPage);
      const n5Button = screen.getByRole('radio', { name: /N5/ });
      expect(n5Button).toHaveAttribute('aria-checked', 'true');
    });

    it('all cards start collapsed (no pattern content visible)', () => {
      render(ConversationsPage);
      expect(screen.queryByText('Patterns')).not.toBeInTheDocument();
    });
  });

  describe('level selector', () => {
    it('switches to N4 conversations on click', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByRole('radio', { name: /N4/ }));

      expect(screen.getByText('Buying a ticket')).toBeInTheDocument();
      expect(screen.queryByText('Self-introduction')).not.toBeInTheDocument();
    });

    it('N4 button becomes aria-checked after click', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByRole('radio', { name: /N4/ }));

      expect(screen.getByRole('radio', { name: /N4/ })).toHaveAttribute('aria-checked', 'true');
      expect(screen.getByRole('radio', { name: /N5/ })).toHaveAttribute('aria-checked', 'false');
    });

    it('collapses expanded card when switching level', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      // Expand a card
      await user.click(screen.getByText('Self-introduction'));
      expect(screen.getByText('Patterns')).toBeInTheDocument();

      // Switch level
      await user.click(screen.getByRole('radio', { name: /N4/ }));

      // Expanded content should be gone
      expect(screen.queryByText('Patterns')).not.toBeInTheDocument();
    });
  });

  describe('expand/collapse', () => {
    it('expands a card on click', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));

      expect(screen.getByText('Patterns')).toBeInTheDocument();
      expect(screen.getByText('Conversations')).toBeInTheDocument();
    });

    it('sets aria-expanded on the toggle button', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      const btn = screen.getAllByRole('button')[0]; // first card toggle
      expect(btn).toHaveAttribute('aria-expanded', 'false');

      await user.click(btn);
      expect(btn).toHaveAttribute('aria-expanded', 'true');
    });

    it('collapses an expanded card on second click', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));
      await user.click(screen.getByText('Self-introduction'));

      expect(screen.queryByText('Patterns')).not.toBeInTheDocument();
    });

    it('only one card is expanded at a time', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));
      await user.click(screen.getByText('Asking for directions'));

      // Count "Patterns" section headers — should be exactly 1
      expect(screen.getAllByText('Patterns')).toHaveLength(1);
    });
  });

  describe('expanded content', () => {
    it('renders sentence patterns with japanese and vietnamese', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));

      // Japanese text appears in both pattern and dialogue — use getAllByText
      expect(screen.getAllByText('はじめまして').length).toBeGreaterThanOrEqual(1);
      expect(screen.getByText('Nice to meet you')).toBeInTheDocument();
    });

    it('renders romaji via kanaToRomaji', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));

      expect(screen.getAllByText('romaji:はじめまして').length).toBeGreaterThanOrEqual(1);
    });

    it('renders memory tip', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));

      expect(screen.getByText('Remember: hajimemashite')).toBeInTheDocument();
    });

    it('renders dialogue speakers and lines', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));

      expect(screen.getByText('A:')).toBeInTheDocument();
      expect(screen.getByText('B:')).toBeInTheDocument();
      expect(screen.getByText('Nice to meet you')).toBeInTheDocument();
    });

    it('renders cultural note when present', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Self-introduction'));

      expect(screen.getByText('Japanese people bow when greeting')).toBeInTheDocument();
    });

    it('does not render cultural note section when absent', async () => {
      const user = userEvent.setup();
      render(ConversationsPage);

      await user.click(screen.getByText('Asking for directions')); // no culturalNote

      expect(screen.queryByText('Japanese people bow when greeting')).not.toBeInTheDocument();
    });
  });
});
