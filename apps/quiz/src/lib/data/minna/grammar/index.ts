/**
 * Grammar Reference Index
 * Aggregates all grammar patterns from lessons 1-25
 */

import { getAllLessons } from '../lessons';
import type { GrammarPattern } from '$lib/types';

/**
 * Aggregate all grammar patterns from all lessons
 */
export function getAllGrammar(): GrammarPattern[] {
  const allGrammar: GrammarPattern[] = [];
  const lessons = getAllLessons();

  lessons.forEach(lesson => {
    if (lesson.grammar && Array.isArray(lesson.grammar)) {
      lesson.grammar.forEach(pattern => {
        allGrammar.push({
          ...pattern,
          lessonNumber: lesson.lessonNumber,
          lessonTitle: lesson.title
        });
      });
    }
  });

  return allGrammar;
}

/**
 * Get grammar patterns for a specific lesson
 */
export function getGrammarByLesson(lessonNumber: number): GrammarPattern[] {
  const lessons = getAllLessons();
  const lesson = lessons.find(l => l.lessonNumber === lessonNumber);

  if (lesson && lesson.grammar) {
    return lesson.grammar.map(pattern => ({
      ...pattern,
      lessonNumber: lesson.lessonNumber,
      lessonTitle: lesson.title
    }));
  }

  return [];
}

/**
 * Get grammar patterns by lesson range
 */
export function getGrammarByLessonRange(startLesson: number, endLesson: number): GrammarPattern[] {
  const allGrammar: GrammarPattern[] = [];

  for (let i = startLesson; i <= endLesson; i++) {
    allGrammar.push(...getGrammarByLesson(i));
  }

  return allGrammar;
}

/**
 * Get unique grammar pattern by pattern string
 */
export function getGrammarByPattern(patternString: string): GrammarPattern | null {
  const allGrammar = getAllGrammar();
  return allGrammar.find(g => g.pattern === patternString) || null;
}

/**
 * Get statistics about grammar data
 */
export function getStatistics() {
  const allGrammar = getAllGrammar();
  const stats = {
    totalPatterns: allGrammar.length,
    patternsByLesson: {} as Record<number, number>,
    patternsWithExamples: 0,
    totalExamples: 0,
    averageExamplesPerPattern: "0.00"
  };

  allGrammar.forEach(pattern => {
    // Count by lesson
    const lessonNum = pattern.lessonNumber || 0;
    if (!stats.patternsByLesson[lessonNum]) {
      stats.patternsByLesson[lessonNum] = 0;
    }
    stats.patternsByLesson[lessonNum]++;

    // Count examples
    if (pattern.examples && pattern.examples.length > 0) {
      stats.patternsWithExamples++;
      stats.totalExamples += pattern.examples.length;
    }
  });

  stats.averageExamplesPerPattern =
    (stats.totalExamples / stats.totalPatterns).toFixed(2);

  return stats;
}
