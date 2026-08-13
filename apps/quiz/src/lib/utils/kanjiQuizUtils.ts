/**
 * Kanji Quiz Utility Functions
 * Generate questions, shuffle options, handle kanji-specific quiz logic
 */

import type { KanjiItem } from '$lib/types';
import { shuffleArray } from './quizUtils';
import { kanaToRomaji } from './kanaUtils';

export type KanjiQuizDirection = 'kanji-vi' | 'kanji-en' | 'kanji-reading' | 'kanji-romaji';

export interface KanjiQuizQuestion {
  id: string;
  question: string;
  answer: string;
  options?: string[];
  item: KanjiItem;
}

/**
 * Get question and answer based on direction
 */
function getKanjiQA(
  item: KanjiItem,
  direction: KanjiQuizDirection
): { question: string; answer: string } {
  switch (direction) {
    case 'kanji-vi':
      return { question: item.character, answer: item.vietnamese };
    case 'kanji-en':
      return { question: item.character, answer: item.english };
    case 'kanji-reading':
      // Primary reading: onyomi first, fallback to kunyomi
      const reading = item.onyomi[0] || item.kunyomi[0] || '';
      return { question: item.character, answer: reading };
    case 'kanji-romaji':
      // Convert primary reading to romaji
      const readingKana = item.onyomi[0] || item.kunyomi[0] || '';
      return { question: item.character, answer: kanaToRomaji(readingKana) };
    default:
      return { question: item.character, answer: item.vietnamese };
  }
}

/**
 * Generate kanji quiz questions from kanji items
 */
export function generateKanjiQuestions(
  kanjiItems: KanjiItem[],
  direction: KanjiQuizDirection,
  count?: number
): KanjiQuizQuestion[] {
  const shuffled = shuffleArray(kanjiItems);
  const selected = count ? shuffled.slice(0, count) : shuffled;

  return selected.map((item, index) => {
    const { question, answer } = getKanjiQA(item, direction);

    return {
      id: `kq-${index}`,
      question,
      answer,
      item
    };
  });
}

/**
 * Generate multiple choice options for kanji quiz
 */
export function generateKanjiMCOptions(
  correctAnswer: string,
  allItems: KanjiItem[],
  direction: KanjiQuizDirection,
  optionsCount = 4
): string[] {
  const allAnswers = allItems.map(item => {
    const { answer } = getKanjiQA(item, direction);
    return answer;
  });

  // Remove duplicates and the correct answer
  const uniqueAnswers = [...new Set(allAnswers)].filter(a => a !== correctAnswer);

  // Shuffle and take (optionsCount - 1) wrong answers
  const wrongAnswers = shuffleArray(uniqueAnswers).slice(0, optionsCount - 1);

  // Combine with correct answer and shuffle
  return shuffleArray([correctAnswer, ...wrongAnswers]);
}
