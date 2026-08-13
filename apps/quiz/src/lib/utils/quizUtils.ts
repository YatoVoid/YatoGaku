/**
 * Quiz Utility Functions
 * Generate questions, shuffle options, calculate scores
 */

import type { VocabItem, QuizQuestion, QuizDirection } from '$lib/types';
import { kanaToRomaji } from './kanaUtils';

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate quiz questions from vocabulary items
 */
export function generateQuestions(
  vocabItems: VocabItem[],
  direction: QuizDirection,
  count?: number
): QuizQuestion[] {
  const shuffled = shuffleArray(vocabItems);
  const selected = count ? shuffled.slice(0, count) : shuffled;

  return selected.map((item, index) => {
    const { question, answer } = getQuestionAndAnswer(item, direction);

    return {
      id: `q-${index}`,
      question,
      answer,
      item
    };
  });
}

/**
 * Get question and answer based on direction
 */
function getQuestionAndAnswer(
  item: VocabItem,
  direction: QuizDirection
): { question: string; answer: string } {
  switch (direction) {
    case 'ja-vi':
      return { question: item.japanese, answer: item.vietnamese };
    case 'vi-ja':
      return { question: item.vietnamese, answer: item.japanese };
    case 'ja-en':
      return { question: item.japanese, answer: item.english };
    case 'en-ja':
      return { question: item.english, answer: item.japanese };
    case 'ja-romaji':
      return { question: item.japanese, answer: kanaToRomaji(item.kana) };
    case 'vi-romaji':
      return { question: item.vietnamese, answer: kanaToRomaji(item.kana) };
    default:
      return { question: item.japanese, answer: item.vietnamese };
  }
}

/**
 * Generate multiple choice options
 */
export function generateMCOptions(
  correctAnswer: string,
  allItems: VocabItem[],
  direction: QuizDirection,
  optionsCount = 4
): string[] {
  // Get all possible answers
  const allAnswers = allItems.map(item => {
    const { answer } = getQuestionAndAnswer(item, direction);
    return answer;
  });

  // Remove duplicates and the correct answer
  const uniqueAnswers = [...new Set(allAnswers)].filter(a => a !== correctAnswer);

  // Shuffle and take (optionsCount - 1) wrong answers
  const wrongAnswers = shuffleArray(uniqueAnswers).slice(0, optionsCount - 1);

  // Combine with correct answer and shuffle
  const options = shuffleArray([correctAnswer, ...wrongAnswers]);

  return options;
}

/**
 * Normalize string for comparison (remove spaces, lowercase)
 */
export function normalizeString(str: string): string {
  return str.trim().toLowerCase().replace(/\s+/g, '');
}

/**
 * Normalize romaji for flexible comparison
 * - Strips spaces (so "sorosoro shitsureishimasu" == "sorosoroshitsureishimasu")
 * - Long vowel mark: "-" treated as vowel extension (ko-hi- == kouhii)
 * - Alternative spellings: shi/si, chi/ti, tsu/tu, fu/hu, ji/zi
 */
function normalizeRomaji(str: string): string {
  return str.toLowerCase().trim()
    .replace(/\s+/g, '')
    .replace(/-/g, '')
    .replace(/shi/g, 'si')
    .replace(/chi/g, 'ti')
    .replace(/tsu/g, 'tu')
    .replace(/fu/g, 'hu')
    .replace(/ji/g, 'zi')
    .replace(/ō/g, 'ou')
    .replace(/ū/g, 'uu')
    .replace(/ē/g, 'ei')
    .replace(/ā/g, 'aa');
}

/**
 * Check if answer is correct (with normalization)
 */
export function checkAnswer(userAnswer: string, correctAnswer: string, isRomaji = false): boolean {
  if (isRomaji) {
    return normalizeRomaji(userAnswer) === normalizeRomaji(correctAnswer);
  }
  return normalizeString(userAnswer) === normalizeString(correctAnswer);
}

/**
 * Calculate quiz statistics
 */
export function calculateStats(correctCount: number, totalCount: number) {
  const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const wrongCount = totalCount - correctCount;

  let grade = 'F';
  if (percentage >= 90) grade = 'A';
  else if (percentage >= 80) grade = 'B';
  else if (percentage >= 70) grade = 'C';
  else if (percentage >= 60) grade = 'D';

  return {
    correct: correctCount,
    wrong: wrongCount,
    total: totalCount,
    percentage,
    grade
  };
}

/**
 * Format time duration (milliseconds to mm:ss)
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
