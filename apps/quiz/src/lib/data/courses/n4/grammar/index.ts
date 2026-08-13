/**
 * N4 Grammar - Central export for all N4 grammar patterns
 * Aggregates grammar from all lessons for reference and search
 */

import type { GrammarItem } from '$lib/types';
import { getAllLessons } from '../lessons';
import { SUPPLEMENTAL_MINNA_N4_GRAMMAR } from './supplemental-minna-md';

/**
 * Get all grammar patterns from all N4 lessons
 */
export function getAllGrammar(): GrammarItem[] {
  const lessons = getAllLessons();
  const grammar: GrammarItem[] = [];

  for (const lesson of lessons) {
    for (const pattern of lesson.grammar) {
      grammar.push({
        ...pattern,
        lesson: lesson.lessonNumber
      });
    }
  }

  return [...grammar, ...SUPPLEMENTAL_MINNA_N4_GRAMMAR];
}

/**
 * Get grammar patterns for a specific lesson
 */
export function getGrammarByLesson(lessonNumber: number): GrammarItem[] {
  const lesson = getAllLessons().find(l => l.lessonNumber === lessonNumber);
  return lesson?.grammar ?? [];
}

/**
 * Search grammar patterns by text
 */
export function searchGrammar(query: string): GrammarItem[] {
  const allGrammar = getAllGrammar();
  const lowerQuery = query.toLowerCase();

  return allGrammar.filter(pattern =>
    pattern.pattern.toLowerCase().includes(lowerQuery) ||
    pattern.vietnamese.toLowerCase().includes(lowerQuery) ||
    pattern.english.toLowerCase().includes(lowerQuery)
  );
}
