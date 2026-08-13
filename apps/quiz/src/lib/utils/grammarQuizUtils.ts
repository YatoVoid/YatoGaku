/**
 * Grammar Quiz utilities
 * Generates fill-in-blank and pattern matching questions from grammar data
 */

import type { GrammarItem } from '$lib/types';

export interface GrammarQuizQuestion {
  id: string;
  type: 'fill-blank' | 'pattern-match';
  question: string;
  answer: string;
  options?: string[];
  grammarItem: GrammarItem;
  hint?: string;
}

/**
 * Generate fill-in-blank questions from grammar examples
 * Takes the Japanese sentence and blanks out the grammar pattern
 */
function generateFillBlank(item: GrammarItem, index: number): GrammarQuizQuestion | null {
  if (item.examples.length === 0) return null;

  const example = item.examples[0];
  const pattern = item.pattern.replace(/[～〜]/g, '').trim();

  // Try to find the pattern or a key part in the example
  const parts = pattern.split(/\s+/);
  const keyPart = parts.find(p => p.length >= 2 && example.japanese.includes(p));

  if (!keyPart) return null;

  const blanked = example.japanese.replace(keyPart, '＿＿＿');

  return {
    id: `grammar-fb-${index}`,
    type: 'fill-blank',
    question: blanked,
    answer: keyPart,
    grammarItem: item,
    hint: example.vietnamese
  };
}

/**
 * Generate pattern-match questions (MC)
 * Shows Vietnamese meaning → pick correct grammar pattern
 */
function generatePatternMatch(
  item: GrammarItem,
  allItems: GrammarItem[],
  index: number
): GrammarQuizQuestion {
  const correct = item.pattern;
  const others = allItems
    .filter(g => g.pattern !== correct)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(g => g.pattern);

  const options = [...others, correct].sort(() => Math.random() - 0.5);

  return {
    id: `grammar-pm-${index}`,
    type: 'pattern-match',
    question: item.vietnamese,
    answer: correct,
    options,
    grammarItem: item,
    hint: item.english
  };
}

/**
 * Generate mixed grammar quiz questions
 */
export function generateGrammarQuestions(
  items: GrammarItem[],
  count?: number
): GrammarQuizQuestion[] {
  const questions: GrammarQuizQuestion[] = [];
  const shuffled = [...items].sort(() => Math.random() - 0.5);

  for (let i = 0; i < shuffled.length; i++) {
    const item = shuffled[i];

    // Alternate between fill-blank and pattern-match
    if (i % 2 === 0) {
      const fb = generateFillBlank(item, i);
      if (fb) {
        questions.push(fb);
      } else {
        questions.push(generatePatternMatch(item, items, i));
      }
    } else {
      questions.push(generatePatternMatch(item, items, i));
    }
  }

  return count ? questions.slice(0, count) : questions;
}
