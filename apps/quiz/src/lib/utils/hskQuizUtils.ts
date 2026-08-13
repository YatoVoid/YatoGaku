/**
 * HSK Quiz utilities — generate questions from HSK words
 */

import type { HSKWord } from '$lib/types/hsk';
import { shuffleArray } from '$lib/utils/quizUtils';

export type HSKQuizDirection = 'chinese-vi' | 'vi-chinese' | 'chinese-pinyin';

export interface HSKQuizQuestion {
  id: string;
  question: string;
  answer: string;
  item: HSKWord;
}

export function generateHSKQuestions(
  words: HSKWord[],
  direction: HSKQuizDirection,
  count?: number
): HSKQuizQuestion[] {
  const shuffled = shuffleArray([...words]);
  const selected = count ? shuffled.slice(0, count) : shuffled;

  return selected.map((word, i) => {
    let question: string;
    let answer: string;

    switch (direction) {
      case 'chinese-vi':
        question = word.chinese;
        answer = word.vietnamese;
        break;
      case 'vi-chinese':
        question = word.vietnamese;
        answer = word.chinese;
        break;
      case 'chinese-pinyin':
        question = word.chinese;
        answer = word.pinyin;
        break;
    }

    return { id: `hsk-${direction}-${i}`, question, answer, item: word };
  });
}

export function generateHSKMCOptions(
  correctAnswer: string,
  allWords: HSKWord[],
  direction: HSKQuizDirection
): string[] {
  const getField = (w: HSKWord): string => {
    switch (direction) {
      case 'chinese-vi': return w.vietnamese;
      case 'vi-chinese': return w.chinese;
      case 'chinese-pinyin': return w.pinyin;
    }
  };

  const others = shuffleArray(
    allWords.filter(w => getField(w) !== correctAnswer)
  ).slice(0, 3).map(getField);

  return shuffleArray([...others, correctAnswer]);
}
