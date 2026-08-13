/**
 * Tests for KanjiTypingQuiz component.
 * Covers: render, submit, correct/wrong feedback, hint, hotkeys, state reset.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import KanjiTypingQuiz from '$lib/components/kanji/KanjiTypingQuiz.svelte';
import type { KanjiItem } from '$lib/types';

vi.mock('$lib/utils/audioUtils', () => ({ playJapaneseAudio: vi.fn() }));

const mockKanji: KanjiItem = {
  character: '会',
  onyomi: ['カイ', 'エ'],
  kunyomi: ['あ.う'],
  strokeCount: 6,
  jlpt: 5,
  vietnamese: 'hội',
  english: 'meet',
  examples: [],
};

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, 'speechSynthesis', {
    value: { speak: vi.fn(), cancel: vi.fn() },
    writable: true, configurable: true,
  });
});

describe('KanjiTypingQuiz — render', () => {
  it('shows the kanji character', () => {
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    expect(screen.getByText('会')).toBeInTheDocument();
  });

  it('has an input field with correct placeholder', () => {
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    expect(screen.getByPlaceholderText(/type the meaning/i)).toBeInTheDocument();
  });

  it('Submit button is disabled when input is empty', () => {
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    expect(screen.getByText(/submit answer/i)).toBeDisabled();
  });

  it('Submit button is enabled when input has text', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'meet');
    expect(screen.getByText(/submit answer/i)).toBeEnabled();
  });

  it('shows hint button initially', () => {
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    expect(screen.getByText(/show hint/i)).toBeInTheDocument();
  });
});

describe('KanjiTypingQuiz — submit correct answer', () => {
  it('shows Correct! feedback', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'meet');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  });

  it('input gets correct class', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    const input = screen.getByPlaceholderText(/type the meaning/i);
    await user.type(input, 'meet');
    await user.click(screen.getByText(/submit answer/i));
    expect(input.className).toContain('correct');
  });

  it('input is disabled after submitting', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    const input = screen.getByPlaceholderText(/type the meaning/i);
    await user.type(input, 'meet');
    await user.click(screen.getByText(/submit answer/i));
    expect(input).toBeDisabled();
  });

  it('shows Next Question button after submitting', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'meet');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/next question/i)).toBeInTheDocument();
  });
});

describe('KanjiTypingQuiz — submit wrong answer', () => {
  it('shows Wrong! feedback', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'wrong');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/wrong!/i)).toBeInTheDocument();
  });

  it('shows correct answer in feedback', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'wrong');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/meet/)).toBeInTheDocument();
  });

  it('input gets wrong class', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    const input = screen.getByPlaceholderText(/type the meaning/i);
    await user.type(input, 'wrong');
    await user.click(screen.getByText(/submit answer/i));
    expect(input.className).toContain('wrong');
  });
});

describe('KanjiTypingQuiz — hint', () => {
  it('clicking hint button shows onyomi', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.click(screen.getByText(/show hint/i));
    expect(screen.getByText(/カイ/)).toBeInTheDocument();
  });

  it('clicking hint button shows kunyomi', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.click(screen.getByText(/show hint/i));
    expect(screen.getByText(/あ\.う/)).toBeInTheDocument();
  });
});

describe('KanjiTypingQuiz — keyboard', () => {
  it('Enter submits when input has text', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    const input = screen.getByPlaceholderText(/type the meaning/i);
    await user.type(input, 'meet');
    await fireEvent.keyDown(window, { key: 'Enter' });
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();
  });

  it('F1 key triggers playJapaneseAudio', async () => {
    const { playJapaneseAudio } = await import('$lib/utils/audioUtils');
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await fireEvent.keyDown(window, { key: 'F1' });
    expect(playJapaneseAudio).toHaveBeenCalledWith('会');
  });

  it('Speak button triggers playJapaneseAudio', async () => {
    const { playJapaneseAudio } = await import('$lib/utils/audioUtils');
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.click(screen.getByText(/speak/i));
    expect(playJapaneseAudio).toHaveBeenCalledWith('会');
  });
});

describe('KanjiTypingQuiz — next question button', () => {
  it('Next Question button appears after correct answer', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'meet');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/next question/i)).toBeEnabled();
  });

  it('Next Question button appears after wrong answer', async () => {
    const user = userEvent.setup();
    render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'nope');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/next question/i)).toBeEnabled();
  });
});

describe('KanjiTypingQuiz — state reset', () => {
  it('resets input and feedback when answer prop changes', async () => {
    const user = userEvent.setup();
    const { rerender } = render(KanjiTypingQuiz, { props: { item: mockKanji, answer: 'meet' } });
    await user.type(screen.getByPlaceholderText(/type the meaning/i), 'meet');
    await user.click(screen.getByText(/submit answer/i));
    expect(screen.getByText(/correct!/i)).toBeInTheDocument();

    await rerender({ item: mockKanji, answer: 'mountain' });
    expect(screen.queryByText(/correct!/i)).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText(/type the meaning/i)).toHaveValue('');
  });
});
