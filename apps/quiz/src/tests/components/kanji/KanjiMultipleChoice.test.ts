/**
 * Tests for KanjiMultipleChoice component.
 * Covers: render, option selection, correct/wrong feedback, hotkeys.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import KanjiMultipleChoice from '$lib/components/kanji/KanjiMultipleChoice.svelte';
import type { KanjiItem } from '$lib/types';

vi.mock('$lib/utils/audioUtils', () => ({ playJapaneseAudio: vi.fn() }));

const mockKanji: KanjiItem = {
  character: '会',
  onyomi: ['カイ'],
  kunyomi: ['あ.う'],
  strokeCount: 6,
  jlpt: 5,
  vietnamese: 'hội',
  english: 'meet',
  examples: [],
};

const mockOptions = ['hội', 'sơn', 'thủy', 'hỏa'];
const correctAnswer = 'hội';

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, 'speechSynthesis', {
    value: { speak: vi.fn(), cancel: vi.fn() },
    writable: true, configurable: true,
  });
});

describe('KanjiMultipleChoice — render', () => {
  it('shows the kanji character', () => {
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    expect(screen.getByText('会')).toBeInTheDocument();
  });

  it('renders all 4 options', () => {
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    for (const opt of mockOptions) {
      expect(screen.getByText(opt)).toBeInTheDocument();
    }
  });

  it('shows numbered labels 1-4', () => {
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    expect(screen.getByText('1.')).toBeInTheDocument();
    expect(screen.getByText('4.')).toBeInTheDocument();
  });

  it('shows hint text before answering', () => {
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    expect(screen.getByText(/press 1-4/i)).toBeInTheDocument();
  });
});

describe('KanjiMultipleChoice — selection', () => {
  it('correct answer shows Correct! feedback', async () => {
    const user = userEvent.setup();
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText(correctAnswer));
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  });

  it('wrong answer shows Wrong! feedback', async () => {
    const user = userEvent.setup();
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText('sơn'));
    expect(screen.getByText(/wrong!/i)).toBeInTheDocument();
  });

  it('correct answer text shown in wrong feedback', async () => {
    const user = userEvent.setup();
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText('sơn'));
    // Wrong feedback shows "The correct answer is: hội"
    expect(screen.getByText(/The correct answer is:/i)).toBeInTheDocument();
  });

  it('shows feedback div after answering', async () => {
    const user = userEvent.setup();
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText(correctAnswer));
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  });

  it('shows wrong feedback when incorrect', async () => {
    const user = userEvent.setup();
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText('sơn'));
    expect(screen.getByText(/wrong!/i)).toBeInTheDocument();
  });

  it('cannot select again after answering', async () => {
    const user = userEvent.setup();
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText(correctAnswer));
    // All option buttons should be disabled
    const buttons = screen.getAllByRole('button').filter(b => mockOptions.includes(b.textContent?.trim() || ''));
    for (const btn of buttons) {
      expect(btn).toBeDisabled();
    }
  });
});

describe('KanjiMultipleChoice — keyboard', () => {
  it('key 1 selects first option (shows feedback)', async () => {
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await fireEvent.keyDown(window, { key: '1' });
    // First option is 'hội' = correct, shows "Correct!" feedback
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  });

  it('key 2 selects second option (shows feedback)', async () => {
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await fireEvent.keyDown(window, { key: '2' });
    // Second option is 'sơn' = wrong, shows "Wrong!" feedback
    expect(screen.getByText(/wrong!/i)).toBeInTheDocument();
  });

  it('F1 triggers playJapaneseAudio', async () => {
    const { playJapaneseAudio } = await import('$lib/utils/audioUtils');
    render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await fireEvent.keyDown(window, { key: 'F1' });
    expect(playJapaneseAudio).toHaveBeenCalledWith('会');
  });
});

describe('KanjiMultipleChoice — state reset', () => {
  it('resets selection when answer prop changes', async () => {
    const user = userEvent.setup();
    const { rerender } = render(KanjiMultipleChoice, { props: { item: mockKanji, options: mockOptions, answer: correctAnswer } });
    await user.click(screen.getByText(correctAnswer));
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();

    await rerender({ item: mockKanji, options: ['a', 'b', 'c', 'd'], answer: 'a' });
    expect(screen.queryByText(/correct!/i)).not.toBeInTheDocument();
  });
});
