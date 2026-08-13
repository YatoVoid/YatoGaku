/**
 * Grammar Utility Functions
 * Functions for filtering, searching, and processing grammar data
 */

import type { GrammarPattern, GrammarFilters, GroupedPatterns } from '$lib/types';
import { GRAMMAR_CATEGORIES, GRAMMAR_FUNCTIONS, getMetadata } from '$lib/data/minna/grammar/metadata';

/**
 * Merge grammar patterns with their metadata
 */
export function mergeGrammarWithMetadata(patterns: GrammarPattern[]): GrammarPattern[] {
  return patterns.map(pattern => {
    const meta = getMetadata(pattern.pattern);
    return {
      ...pattern,
      meta: meta || null
    };
  });
}

/**
 * Filter patterns by category
 */
export function filterByCategory(patterns: GrammarPattern[], categoryId: string): GrammarPattern[] {
  if (!categoryId || categoryId === 'all') {
    return patterns;
  }

  return patterns.filter(p => {
    if (!p.meta || !p.meta.categories) return false;
    return p.meta.categories.includes(categoryId);
  });
}

/**
 * Filter patterns by function
 */
export function filterByFunction(patterns: GrammarPattern[], functionId: string): GrammarPattern[] {
  if (!functionId || functionId === 'all') {
    return patterns;
  }

  return patterns.filter(p => {
    if (!p.meta || !p.meta.functions) return false;
    return p.meta.functions.includes(functionId);
  });
}

/**
 * Filter patterns by JLPT level
 */
export function filterByJLPT(patterns: GrammarPattern[], level: string): GrammarPattern[] {
  if (!level || level === 'all') {
    return patterns;
  }

  return patterns.filter(p => {
    if (!p.meta || !p.meta.jlptLevel) return false;
    return p.meta.jlptLevel === level;
  });
}

/**
 * Filter patterns by lesson number
 */
export function filterByLesson(patterns: GrammarPattern[], lessonNumber: number | string): GrammarPattern[] {
  if (!lessonNumber || lessonNumber === 'all') {
    return patterns;
  }

  const num = typeof lessonNumber === 'string' ? parseInt(lessonNumber, 10) : lessonNumber;
  return patterns.filter(p => p.lessonNumber === num);
}

/**
 * Search patterns by query string
 * Searches in: pattern, vietnamese, english, explanation
 */
export function searchGrammar(patterns: GrammarPattern[], query: string): GrammarPattern[] {
  if (!query || query.trim() === '') {
    return patterns;
  }

  const lowerQuery = query.toLowerCase().trim();

  return patterns.filter(p => {
    const searchableText = [
      p.pattern,
      p.vietnamese,
      p.english || '',
      p.explanation || ''
    ].join(' ').toLowerCase();

    return searchableText.includes(lowerQuery);
  });
}

/**
 * Get related patterns for a given pattern
 */
export function getRelatedPatterns(pattern: GrammarPattern, allPatterns: GrammarPattern[]): GrammarPattern[] {
  if (!pattern.meta || !pattern.meta.relatedPatterns) {
    return [];
  }

  return allPatterns.filter(p =>
    pattern.meta?.relatedPatterns?.includes(p.pattern)
  );
}

/**
 * Group patterns by lesson
 */
export function groupByLesson(patterns: GrammarPattern[]): GroupedPatterns {
  const grouped: GroupedPatterns = {};

  patterns.forEach(pattern => {
    const lessonNum = pattern.lessonNumber || 0;
    const key = lessonNum.toString();

    if (!grouped[key]) {
      grouped[key] = {
        lessonNumber: lessonNum,
        lessonTitle: pattern.lessonTitle,
        patterns: []
      };
    }
    grouped[key].patterns.push(pattern);
  });

  return grouped;
}

/**
 * Group patterns by category
 */
export function groupByCategory(patterns: GrammarPattern[]): GroupedPatterns {
  const grouped: GroupedPatterns = {};

  // Initialize with all categories
  Object.keys(GRAMMAR_CATEGORIES).forEach(catId => {
    grouped[catId] = {
      category: GRAMMAR_CATEGORIES[catId],
      patterns: []
    };
  });

  // Add "uncategorized" for patterns without metadata
  grouped.uncategorized = {
    category: {
      id: "uncategorized",
      name: "Chưa phân loại",
      nameEn: "Uncategorized",
      icon: "❓"
    },
    patterns: []
  };

  // Group patterns
  patterns.forEach(pattern => {
    if (pattern.meta && pattern.meta.categories) {
      pattern.meta.categories.forEach(catId => {
        if (grouped[catId]) {
          grouped[catId].patterns.push(pattern);
        }
      });
    } else {
      grouped.uncategorized.patterns.push(pattern);
    }
  });

  // Remove empty categories
  Object.keys(grouped).forEach(key => {
    if (grouped[key].patterns.length === 0) {
      delete grouped[key];
    }
  });

  return grouped;
}

/**
 * Group patterns by function
 */
export function groupByFunction(patterns: GrammarPattern[]): GroupedPatterns {
  const grouped: GroupedPatterns = {};

  // Initialize with all functions
  Object.keys(GRAMMAR_FUNCTIONS).forEach(funcId => {
    grouped[funcId] = {
      function: {
        id: funcId,
        ...GRAMMAR_FUNCTIONS[funcId]
      },
      patterns: []
    };
  });

  // Add "uncategorized"
  grouped.uncategorized = {
    function: {
      id: "uncategorized",
      name: "Chưa phân loại",
      nameEn: "Uncategorized"
    },
    patterns: []
  };

  // Group patterns
  patterns.forEach(pattern => {
    if (pattern.meta && pattern.meta.functions) {
      pattern.meta.functions.forEach(funcId => {
        if (grouped[funcId]) {
          grouped[funcId].patterns.push(pattern);
        }
      });
    } else {
      grouped.uncategorized.patterns.push(pattern);
    }
  });

  // Remove empty functions
  Object.keys(grouped).forEach(key => {
    if (grouped[key].patterns.length === 0) {
      delete grouped[key];
    }
  });

  return grouped;
}

/**
 * Sort patterns by a specific field
 */
export function sortPatterns(
  patterns: GrammarPattern[],
  sortBy: keyof GrammarPattern = 'lessonNumber',
  order: 'asc' | 'desc' = 'asc'
): GrammarPattern[] {
  const sorted = [...patterns];

  sorted.sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    // Handle undefined/null values
    if (aVal === undefined || aVal === null) return 1;
    if (bVal === undefined || bVal === null) return -1;

    // Compare
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      const aLower = aVal.toLowerCase();
      const bLower = bVal.toLowerCase();

      if (aLower < bLower) return order === 'asc' ? -1 : 1;
      if (aLower > bLower) return order === 'asc' ? 1 : -1;
      return 0;
    }

    if (aVal < bVal) return order === 'asc' ? -1 : 1;
    if (aVal > bVal) return order === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
}

/**
 * Apply multiple filters at once
 */
export function applyFilters(patterns: GrammarPattern[], filters: GrammarFilters): GrammarPattern[] {
  let filtered = patterns;

  if (filters.search) {
    filtered = searchGrammar(filtered, filters.search);
  }

  if (filters.category && filters.category !== 'all') {
    filtered = filterByCategory(filtered, filters.category);
  }

  if (filters.function && filters.function !== 'all') {
    filtered = filterByFunction(filtered, filters.function);
  }

  if (filters.jlpt && filters.jlpt !== 'all') {
    filtered = filterByJLPT(filtered, filters.jlpt);
  }

  return filtered;
}

/**
 * Get pattern statistics
 */
export function getPatternStats(patterns: GrammarPattern[]) {
  const stats = {
    total: patterns.length,
    withMetadata: 0,
    withoutMetadata: 0,
    byJLPT: {} as Record<string, number>,
    byCategory: {} as Record<string, number>,
    byFunction: {} as Record<string, number>,
    byLesson: {} as Record<number, number>
  };

  patterns.forEach(pattern => {
    // Metadata count
    if (pattern.meta) {
      stats.withMetadata++;

      // JLPT
      if (pattern.meta.jlptLevel) {
        stats.byJLPT[pattern.meta.jlptLevel] =
          (stats.byJLPT[pattern.meta.jlptLevel] || 0) + 1;
      }

      // Categories
      if (pattern.meta.categories) {
        pattern.meta.categories.forEach(cat => {
          stats.byCategory[cat] = (stats.byCategory[cat] || 0) + 1;
        });
      }

      // Functions
      if (pattern.meta.functions) {
        pattern.meta.functions.forEach(func => {
          stats.byFunction[func] = (stats.byFunction[func] || 0) + 1;
        });
      }
    } else {
      stats.withoutMetadata++;
    }

    // Lesson
    if (pattern.lessonNumber) {
      stats.byLesson[pattern.lessonNumber] =
        (stats.byLesson[pattern.lessonNumber] || 0) + 1;
    }
  });

  return stats;
}
