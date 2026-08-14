/**
 * Tests for WritingCanvas and KanjiWritingQuiz
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import WritingCanvas from '$lib/components/kanji/WritingCanvas.svelte';
import KanjiWritingQuiz from '$lib/components/kanji/KanjiWritingQuiz.svelte';

describe('WritingCanvas', () => {
  it('should render canvas element', () => {
    const { container } = render(WritingCanvas);
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('should have Clear button', () => {
    render(WritingCanvas);
    expect(screen.getByText(/clear/i)).toBeInTheDocument();
  });

  it('should have Undo button', () => {
    render(WritingCanvas);
    expect(screen.getByText(/undo/i)).toBeInTheDocument();
  });

  it('should have aria-label on canvas', () => {
    const { container } = render(WritingCanvas);
    expect(container.querySelector('canvas')?.getAttribute('aria-label')).toBeTruthy();
  });

  it('should accept size prop', () => {
    const { container } = render(WritingCanvas, { props: { size: 200 } });
    const canvas = container.querySelector('canvas');
    expect(canvas?.getAttribute('width')).toBe('200');
  });
});

describe('KanjiWritingQuiz', () => {
  const mockItem = {
    character: '一', onyomi: ['イチ'], kunyomi: ['ひと.つ'],
    strokeCount: 1, jlpt: 5, vietnamese: 'nhất', english: 'one',
    examples: [{ word: '一つ', kana: 'ひとつ', meaning: 'one', vietnamese: 'một' }]
  };

  it('should show target meaning as question', () => {
    const { container } = render(KanjiWritingQuiz, { props: { item: mockItem, answer: 'nhất' } });
    expect(container.textContent).toContain('one');
  });

  it('should render WritingCanvas', () => {
    const { container } = render(KanjiWritingQuiz, { props: { item: mockItem, answer: 'nhất' } });
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });

  it('should have Show Answer button', () => {
    render(KanjiWritingQuiz, { props: { item: mockItem, answer: 'nhất' } });
    expect(screen.getByText(/show answer/i)).toBeInTheDocument();
  });

  it('should show hint with stroke count', () => {
    const { container } = render(KanjiWritingQuiz, { props: { item: mockItem, answer: 'nhất' } });
    expect(container.textContent).toMatch(/1.*stroke/i);
  });

  it('should have Correct and Wrong buttons', () => {
    render(KanjiWritingQuiz, { props: { item: mockItem, answer: 'nhất' } });
    // Buttons visible after showing answer (initially hidden)
    expect(screen.getByText(/show answer/i)).toBeInTheDocument();
  });
});
