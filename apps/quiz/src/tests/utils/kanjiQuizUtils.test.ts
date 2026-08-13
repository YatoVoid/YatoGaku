/**
 * Tests for kanjiQuizUtils — generateKanjiQuestions, generateKanjiMCOptions
 */

import { describe, it, expect } from 'vitest';
import { generateKanjiQuestions, generateKanjiMCOptions } from '$lib/utils/kanjiQuizUtils';
import type { KanjiItem } from '$lib/types';

const makeKanji = (character: string, overrides: Partial<KanjiItem> = {}): KanjiItem => ({
  character,
  onyomi: ['カイ'],
  kunyomi: ['あ.う'],
  strokeCount: 6,
  jlpt: 5,
  vietnamese: `viet-${character}`,
  english: `english-${character}`,
  examples: [{ word: `${character}社`, kana: 'かいしゃ', meaning: 'company', vietnamese: 'công ty' }],
  ...overrides,
});

const mockKanji: KanjiItem[] = [
  makeKanji('会', { onyomi: ['カイ'], vietnamese: 'hội', english: 'meet' }),
  makeKanji('山', { onyomi: ['サン'], kunyomi: ['やま'], vietnamese: 'sơn', english: 'mountain' }),
  makeKanji('水', { onyomi: ['スイ'], kunyomi: ['みず'], vietnamese: 'thủy', english: 'water' }),
  makeKanji('火', { onyomi: ['カ'], kunyomi: ['ひ'], vietnamese: 'hỏa', english: 'fire' }),
  makeKanji('木', { onyomi: ['モク'], kunyomi: ['き'], vietnamese: 'mộc', english: 'tree' }),
];

describe('generateKanjiQuestions', () => {
  it('returns one question per kanji by default', () => {
    const qs = generateKanjiQuestions(mockKanji, 'kanji-vi');
    expect(qs.length).toBe(mockKanji.length);
  });

  it('respects count parameter', () => {
    const qs = generateKanjiQuestions(mockKanji, 'kanji-vi', 2);
    expect(qs.length).toBe(2);
  });

  it('each question has id, question, answer, item', () => {
    const qs = generateKanjiQuestions(mockKanji, 'kanji-vi');
    for (const q of qs) {
      expect(q.id).toBeTruthy();
      expect(q.question).toBeTruthy();
      expect(q.answer).toBeTruthy();
      expect(q.item).toBeTruthy();
    }
  });

  it('kanji-vi: question is kanji character, answer is vietnamese', () => {
    const qs = generateKanjiQuestions(
      [makeKanji('会', { vietnamese: 'hội' })],
      'kanji-vi'
    );
    expect(qs[0].question).toBe('会');
    expect(qs[0].answer).toBe('hội');
  });

  it('kanji-en: answer is english meaning', () => {
    const qs = generateKanjiQuestions(
      [makeKanji('山', { english: 'mountain' })],
      'kanji-en'
    );
    expect(qs[0].answer).toBe('mountain');
  });

  it('kanji-reading: answer is first onyomi', () => {
    const qs = generateKanjiQuestions(
      [makeKanji('会', { onyomi: ['カイ', 'エ'] })],
      'kanji-reading'
    );
    expect(qs[0].answer).toBe('カイ');
  });

  it('kanji-reading: falls back to kunyomi when no onyomi', () => {
    const qs = generateKanjiQuestions(
      [makeKanji('訓', { onyomi: [], kunyomi: ['くん'] })],
      'kanji-reading'
    );
    expect(qs[0].answer).toBe('くん');
  });

  it('kanji-romaji: returns a non-empty string', () => {
    const qs = generateKanjiQuestions(
      [makeKanji('会', { onyomi: ['カイ'] })],
      'kanji-romaji'
    );
    expect(typeof qs[0].answer).toBe('string');
    expect(qs[0].answer.length).toBeGreaterThan(0);
  });
});

describe('generateKanjiMCOptions', () => {
  it('returns 4 options by default', () => {
    const opts = generateKanjiMCOptions('hội', mockKanji, 'kanji-vi');
    expect(opts.length).toBe(4);
  });

  it('includes the correct answer', () => {
    const opts = generateKanjiMCOptions('hội', mockKanji, 'kanji-vi');
    expect(opts).toContain('hội');
  });

  it('all options are unique', () => {
    const opts = generateKanjiMCOptions('hội', mockKanji, 'kanji-vi');
    expect(new Set(opts).size).toBe(opts.length);
  });

  it('respects custom optionsCount', () => {
    const opts = generateKanjiMCOptions('hội', mockKanji, 'kanji-vi', 3);
    expect(opts.length).toBe(3);
  });
});
