/**
 * Unit tests for grammarUtils.ts
 * Tests all 14 grammar utility functions with comprehensive edge cases
 */

import { describe, it, expect, vi } from 'vitest';
import {
  mergeGrammarWithMetadata,
  filterByCategory,
  filterByFunction,
  filterByJLPT,
  filterByLesson,
  searchGrammar,
  getRelatedPatterns,
  groupByLesson,
  groupByCategory,
  groupByFunction,
  sortPatterns,
  applyFilters,
  getPatternStats
} from '$lib/utils/grammarUtils';
import type { GrammarPattern, GrammarFilters } from '$lib/types';

// Mock the metadata module
vi.mock('$lib/data/minna/grammar/metadata', () => ({
  GRAMMAR_CATEGORIES: {
    particle: {
      id: 'particle',
      name: 'Trợ từ',
      nameEn: 'Particles',
      icon: '🔤'
    },
    verb: {
      id: 'verb',
      name: 'Động từ',
      nameEn: 'Verbs',
      icon: '🏃'
    }
  },
  GRAMMAR_FUNCTIONS: {
    question: {
      name: 'Nghi vấn',
      nameEn: 'Questions'
    },
    request: {
      name: 'Yêu cầu',
      nameEn: 'Requests'
    }
  },
  getMetadata: vi.fn((pattern: string) => {
    if (pattern === 'は') {
      return {
        categories: ['particle'],
        functions: ['question'],
        jlptLevel: 'N5' as const,
        difficulty: 'beginner' as const,
        relatedPatterns: ['が'],
        tips: 'Test tip'
      };
    }
    if (pattern === 'ます') {
      return {
        categories: ['verb'],
        functions: ['request'],
        jlptLevel: 'N5' as const
      };
    }
    return null;
  })
}));

// Test data
const createPattern = (overrides: Partial<GrammarPattern> = {}): GrammarPattern => ({
  pattern: 'は',
  vietnamese: 'Trợ từ chủ đề',
  english: 'Topic particle',
  lessonNumber: 1,
  lessonTitle: 'Lesson 1',
  ...overrides
});

describe('grammarUtils', () => {
  describe('mergeGrammarWithMetadata', () => {
    it('should merge patterns with metadata', () => {
      const patterns: GrammarPattern[] = [
        createPattern({ pattern: 'は' }),
        createPattern({ pattern: 'ます', vietnamese: 'Thể lịch sự' })
      ];

      const result = mergeGrammarWithMetadata(patterns);

      expect(result).toHaveLength(2);
      expect(result[0].meta).toBeDefined();
      expect(result[0].meta?.categories).toContain('particle');
      expect(result[1].meta).toBeDefined();
      expect(result[1].meta?.categories).toContain('verb');
    });

    it('should handle patterns without metadata', () => {
      const patterns: GrammarPattern[] = [
        createPattern({ pattern: 'unknown' })
      ];

      const result = mergeGrammarWithMetadata(patterns);

      expect(result).toHaveLength(1);
      expect(result[0].meta).toBeNull();
    });

    it('should handle empty array', () => {
      const result = mergeGrammarWithMetadata([]);
      expect(result).toEqual([]);
    });

    it('should not mutate original array', () => {
      const patterns: GrammarPattern[] = [createPattern()];
      const original = [...patterns];

      mergeGrammarWithMetadata(patterns);

      expect(patterns).toEqual(original);
    });
  });

  describe('filterByCategory', () => {
    const patternsWithMeta: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        meta: { categories: ['particle'], functions: ['question'] }
      }),
      createPattern({
        pattern: 'ます',
        meta: { categories: ['verb'] }
      }),
      createPattern({
        pattern: 'です',
        meta: null
      })
    ];

    it('should filter by category', () => {
      const result = filterByCategory(patternsWithMeta, 'particle');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should return all patterns for "all" category', () => {
      const result = filterByCategory(patternsWithMeta, 'all');
      expect(result).toHaveLength(3);
    });

    it('should return all patterns for empty category', () => {
      const result = filterByCategory(patternsWithMeta, '');
      expect(result).toHaveLength(3);
    });

    it('should exclude patterns without metadata', () => {
      const result = filterByCategory(patternsWithMeta, 'particle');
      expect(result.find(p => p.pattern === 'です')).toBeUndefined();
    });

    it('should exclude patterns without categories in metadata', () => {
      const patterns: GrammarPattern[] = [
        createPattern({
          meta: { functions: ['question'] }
        })
      ];
      const result = filterByCategory(patterns, 'particle');
      expect(result).toHaveLength(0);
    });

    it('should handle empty array', () => {
      const result = filterByCategory([], 'particle');
      expect(result).toEqual([]);
    });
  });

  describe('filterByFunction', () => {
    const patternsWithMeta: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        meta: { functions: ['question'] }
      }),
      createPattern({
        pattern: 'ます',
        meta: { functions: ['request'] }
      }),
      createPattern({
        pattern: 'です',
        meta: null
      })
    ];

    it('should filter by function', () => {
      const result = filterByFunction(patternsWithMeta, 'question');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should return all patterns for "all" function', () => {
      const result = filterByFunction(patternsWithMeta, 'all');
      expect(result).toHaveLength(3);
    });

    it('should return all patterns for empty function', () => {
      const result = filterByFunction(patternsWithMeta, '');
      expect(result).toHaveLength(3);
    });

    it('should exclude patterns without metadata', () => {
      const result = filterByFunction(patternsWithMeta, 'question');
      expect(result.find(p => p.pattern === 'です')).toBeUndefined();
    });

    it('should handle empty array', () => {
      const result = filterByFunction([], 'question');
      expect(result).toEqual([]);
    });
  });

  describe('filterByJLPT', () => {
    const patternsWithMeta: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        meta: { jlptLevel: 'N5' }
      }),
      createPattern({
        pattern: 'から',
        meta: { jlptLevel: 'N4' }
      }),
      createPattern({
        pattern: 'です',
        meta: null
      })
    ];

    it('should filter by JLPT level', () => {
      const result = filterByJLPT(patternsWithMeta, 'N5');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should return all patterns for "all" level', () => {
      const result = filterByJLPT(patternsWithMeta, 'all');
      expect(result).toHaveLength(3);
    });

    it('should return all patterns for empty level', () => {
      const result = filterByJLPT(patternsWithMeta, '');
      expect(result).toHaveLength(3);
    });

    it('should exclude patterns without metadata', () => {
      const result = filterByJLPT(patternsWithMeta, 'N5');
      expect(result.find(p => p.pattern === 'です')).toBeUndefined();
    });

    it('should handle empty array', () => {
      const result = filterByJLPT([], 'N5');
      expect(result).toEqual([]);
    });
  });

  describe('filterByLesson', () => {
    const patterns: GrammarPattern[] = [
      createPattern({ lessonNumber: 1 }),
      createPattern({ lessonNumber: 2 }),
      createPattern({ lessonNumber: 3 })
    ];

    it('should filter by lesson number', () => {
      const result = filterByLesson(patterns, 1);
      expect(result).toHaveLength(1);
      expect(result[0].lessonNumber).toBe(1);
    });

    it('should filter by lesson number as string', () => {
      const result = filterByLesson(patterns, '2');
      expect(result).toHaveLength(1);
      expect(result[0].lessonNumber).toBe(2);
    });

    it('should return all patterns for "all" lesson', () => {
      const result = filterByLesson(patterns, 'all');
      expect(result).toHaveLength(3);
    });

    it('should return all patterns for empty lesson', () => {
      const result = filterByLesson(patterns, '');
      expect(result).toHaveLength(3);
    });

    it('should handle empty array', () => {
      const result = filterByLesson([], 1);
      expect(result).toEqual([]);
    });

    it('should return empty array for non-existent lesson', () => {
      const result = filterByLesson(patterns, 99);
      expect(result).toEqual([]);
    });
  });

  describe('searchGrammar', () => {
    const patterns: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        vietnamese: 'Trợ từ chủ đề',
        english: 'Topic particle',
        explanation: 'Dùng để chỉ chủ đề'
      }),
      createPattern({
        pattern: 'ます',
        vietnamese: 'Thể lịch sự',
        english: 'Polite form',
        explanation: 'Dùng để nói lịch sự'
      })
    ];

    it('should search in pattern', () => {
      const result = searchGrammar(patterns, 'は');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should search in vietnamese', () => {
      const result = searchGrammar(patterns, 'lịch sự');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('ます');
    });

    it('should search in english', () => {
      const result = searchGrammar(patterns, 'polite');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('ます');
    });

    it('should search in explanation', () => {
      const result = searchGrammar(patterns, 'chủ đề');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should be case insensitive', () => {
      const result = searchGrammar(patterns, 'POLITE');
      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('ます');
    });

    it('should trim whitespace', () => {
      const result = searchGrammar(patterns, '  polite  ');
      expect(result).toHaveLength(1);
    });

    it('should return all patterns for empty query', () => {
      const result = searchGrammar(patterns, '');
      expect(result).toHaveLength(2);
    });

    it('should return all patterns for whitespace query', () => {
      const result = searchGrammar(patterns, '   ');
      expect(result).toHaveLength(2);
    });

    it('should return empty array for no matches', () => {
      const result = searchGrammar(patterns, 'xyz123');
      expect(result).toEqual([]);
    });

    it('should handle patterns without optional fields', () => {
      const minimal: GrammarPattern[] = [
        createPattern({
          pattern: 'が',
          vietnamese: 'Test'
        })
      ];
      const result = searchGrammar(minimal, 'test');
      expect(result).toHaveLength(1);
    });
  });

  describe('getRelatedPatterns', () => {
    const allPatterns: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        meta: { relatedPatterns: ['が', 'も'] }
      }),
      createPattern({ pattern: 'が' }),
      createPattern({ pattern: 'も' }),
      createPattern({ pattern: 'を' })
    ];

    it('should get related patterns', () => {
      const result = getRelatedPatterns(allPatterns[0], allPatterns);
      expect(result).toHaveLength(2);
      expect(result.map(p => p.pattern)).toContain('が');
      expect(result.map(p => p.pattern)).toContain('も');
    });

    it('should return empty array if no metadata', () => {
      const pattern = createPattern({ meta: null });
      const result = getRelatedPatterns(pattern, allPatterns);
      expect(result).toEqual([]);
    });

    it('should return empty array if no relatedPatterns in metadata', () => {
      const pattern = createPattern({
        meta: { categories: ['particle'] }
      });
      const result = getRelatedPatterns(pattern, allPatterns);
      expect(result).toEqual([]);
    });

    it('should handle empty allPatterns array', () => {
      const pattern = createPattern({
        meta: { relatedPatterns: ['が'] }
      });
      const result = getRelatedPatterns(pattern, []);
      expect(result).toEqual([]);
    });

    it('should handle non-existent related patterns', () => {
      const pattern = createPattern({
        meta: { relatedPatterns: ['xyz', 'abc'] }
      });
      const result = getRelatedPatterns(pattern, allPatterns);
      expect(result).toEqual([]);
    });
  });

  describe('groupByLesson', () => {
    const patterns: GrammarPattern[] = [
      createPattern({ pattern: 'は', lessonNumber: 1, lessonTitle: 'Lesson 1' }),
      createPattern({ pattern: 'を', lessonNumber: 1, lessonTitle: 'Lesson 1' }),
      createPattern({ pattern: 'ます', lessonNumber: 2, lessonTitle: 'Lesson 2' })
    ];

    it('should group patterns by lesson', () => {
      const result = groupByLesson(patterns);

      expect(Object.keys(result)).toHaveLength(2);
      expect(result['1'].patterns).toHaveLength(2);
      expect(result['2'].patterns).toHaveLength(1);
    });

    it('should include lesson metadata', () => {
      const result = groupByLesson(patterns);

      expect(result['1'].lessonNumber).toBe(1);
      expect(result['1'].lessonTitle).toBe('Lesson 1');
    });

    it('should handle patterns without lesson number', () => {
      const patternsNoLesson: GrammarPattern[] = [
        createPattern({ lessonNumber: undefined })
      ];
      const result = groupByLesson(patternsNoLesson);

      expect(result['0']).toBeDefined();
      expect(result['0'].patterns).toHaveLength(1);
    });

    it('should handle empty array', () => {
      const result = groupByLesson([]);
      expect(result).toEqual({});
    });

    it('should not mutate original array', () => {
      const original = [...patterns];
      groupByLesson(patterns);
      expect(patterns).toEqual(original);
    });
  });

  describe('groupByCategory', () => {
    const patterns: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        meta: { categories: ['particle'] }
      }),
      createPattern({
        pattern: 'ます',
        meta: { categories: ['verb'] }
      }),
      createPattern({
        pattern: 'です',
        meta: null
      })
    ];

    it('should group patterns by category', () => {
      const result = groupByCategory(patterns);

      expect(result['particle'].patterns).toHaveLength(1);
      expect(result['particle'].patterns[0].pattern).toBe('は');
      expect(result['verb'].patterns).toHaveLength(1);
    });

    it('should include category metadata', () => {
      const result = groupByCategory(patterns);

      expect(result['particle'].category?.name).toBe('Trợ từ');
      expect(result['particle'].category?.icon).toBe('🔤');
    });

    it('should put patterns without metadata in uncategorized', () => {
      const result = groupByCategory(patterns);

      expect(result['uncategorized']).toBeDefined();
      expect(result['uncategorized'].patterns).toHaveLength(1);
      expect(result['uncategorized'].patterns[0].pattern).toBe('です');
    });

    it('should remove empty categories', () => {
      const result = groupByCategory(patterns);

      // Should not include all possible categories, only those with patterns
      const keys = Object.keys(result);
      expect(keys.length).toBeLessThanOrEqual(3); // particle, verb, uncategorized
    });

    it('should handle patterns with multiple categories', () => {
      const multiCat: GrammarPattern[] = [
        createPattern({
          pattern: 'です',
          meta: { categories: ['particle', 'verb'] }
        })
      ];
      const result = groupByCategory(multiCat);

      // Pattern should appear in both groups
      expect(result['particle'].patterns[0].pattern).toBe('です');
      expect(result['verb'].patterns[0].pattern).toBe('です');
    });

    it('should handle empty array', () => {
      const result = groupByCategory([]);
      expect(result).toEqual({});
    });
  });

  describe('groupByFunction', () => {
    const patterns: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        meta: { functions: ['question'] }
      }),
      createPattern({
        pattern: 'ます',
        meta: { functions: ['request'] }
      }),
      createPattern({
        pattern: 'です',
        meta: null
      })
    ];

    it('should group patterns by function', () => {
      const result = groupByFunction(patterns);

      expect(result['question'].patterns).toHaveLength(1);
      expect(result['question'].patterns[0].pattern).toBe('は');
      expect(result['request'].patterns).toHaveLength(1);
    });

    it('should include function metadata', () => {
      const result = groupByFunction(patterns);

      expect(result['question'].function?.name).toBe('Nghi vấn');
      expect(result['question'].function?.nameEn).toBe('Questions');
    });

    it('should put patterns without metadata in uncategorized', () => {
      const result = groupByFunction(patterns);

      expect(result['uncategorized']).toBeDefined();
      expect(result['uncategorized'].patterns).toHaveLength(1);
      expect(result['uncategorized'].patterns[0].pattern).toBe('です');
    });

    it('should remove empty functions', () => {
      const result = groupByFunction(patterns);

      const keys = Object.keys(result);
      expect(keys.length).toBeLessThanOrEqual(3);
    });

    it('should handle patterns with multiple functions', () => {
      const multiFunc: GrammarPattern[] = [
        createPattern({
          pattern: 'です',
          meta: { functions: ['question', 'request'] }
        })
      ];
      const result = groupByFunction(multiFunc);

      expect(result['question'].patterns[0].pattern).toBe('です');
      expect(result['request'].patterns[0].pattern).toBe('です');
    });

    it('should handle empty array', () => {
      const result = groupByFunction([]);
      expect(result).toEqual({});
    });
  });

  describe('sortPatterns', () => {
    const patterns: GrammarPattern[] = [
      createPattern({ pattern: 'を', lessonNumber: 3, vietnamese: 'C' }),
      createPattern({ pattern: 'は', lessonNumber: 1, vietnamese: 'A' }),
      createPattern({ pattern: 'が', lessonNumber: 2, vietnamese: 'B' })
    ];

    it('should sort by lessonNumber ascending by default', () => {
      const result = sortPatterns(patterns);

      expect(result[0].lessonNumber).toBe(1);
      expect(result[1].lessonNumber).toBe(2);
      expect(result[2].lessonNumber).toBe(3);
    });

    it('should sort by lessonNumber descending', () => {
      const result = sortPatterns(patterns, 'lessonNumber', 'desc');

      expect(result[0].lessonNumber).toBe(3);
      expect(result[1].lessonNumber).toBe(2);
      expect(result[2].lessonNumber).toBe(1);
    });

    it('should sort by pattern ascending', () => {
      const result = sortPatterns(patterns, 'pattern', 'asc');

      expect(result[0].pattern).toBe('が');
      expect(result[1].pattern).toBe('は');
      expect(result[2].pattern).toBe('を');
    });

    it('should sort by vietnamese ascending', () => {
      const result = sortPatterns(patterns, 'vietnamese', 'asc');

      expect(result[0].vietnamese).toBe('A');
      expect(result[1].vietnamese).toBe('B');
      expect(result[2].vietnamese).toBe('C');
    });

    it('should be case insensitive for strings', () => {
      const casePatterns: GrammarPattern[] = [
        createPattern({ vietnamese: 'zebra' }),
        createPattern({ vietnamese: 'Apple' }),
        createPattern({ vietnamese: 'banana' })
      ];
      const result = sortPatterns(casePatterns, 'vietnamese', 'asc');

      expect(result[0].vietnamese).toBe('Apple');
      expect(result[1].vietnamese).toBe('banana');
      expect(result[2].vietnamese).toBe('zebra');
    });

    it('should handle undefined/null values', () => {
      const nullPatterns: GrammarPattern[] = [
        createPattern({ lessonNumber: 1 }),
        createPattern({ lessonNumber: undefined }),
        createPattern({ lessonNumber: 2 })
      ];
      const result = sortPatterns(nullPatterns, 'lessonNumber', 'asc');

      // Undefined should be at the end
      expect(result[2].lessonNumber).toBeUndefined();
    });

    it('should not mutate original array', () => {
      const original = [...patterns];
      sortPatterns(patterns);
      expect(patterns).toEqual(original);
    });

    it('should handle empty array', () => {
      const result = sortPatterns([]);
      expect(result).toEqual([]);
    });
  });

  describe('applyFilters', () => {
    const patterns: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        vietnamese: 'Trợ từ chủ đề',
        lessonNumber: 1,
        meta: {
          categories: ['particle'],
          functions: ['question'],
          jlptLevel: 'N5'
        }
      }),
      createPattern({
        pattern: 'ます',
        vietnamese: 'Thể lịch sự',
        lessonNumber: 2,
        meta: {
          categories: ['verb'],
          functions: ['request'],
          jlptLevel: 'N5'
        }
      }),
      createPattern({
        pattern: 'から',
        vietnamese: 'Từ',
        lessonNumber: 1,
        meta: {
          categories: ['particle'],
          functions: ['question'],
          jlptLevel: 'N4'
        }
      })
    ];

    it('should apply search filter', () => {
      const filters: GrammarFilters = {
        search: 'chủ đề',
        jlpt: '',
        category: '',
        function: ''
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should apply category filter', () => {
      const filters: GrammarFilters = {
        search: '',
        jlpt: '',
        category: 'particle',
        function: ''
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(2);
      expect(result.map(p => p.pattern)).toContain('は');
      expect(result.map(p => p.pattern)).toContain('から');
    });

    it('should apply function filter', () => {
      const filters: GrammarFilters = {
        search: '',
        jlpt: '',
        category: '',
        function: 'request'
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('ます');
    });

    it('should apply JLPT filter', () => {
      const filters: GrammarFilters = {
        search: '',
        jlpt: 'N4',
        category: '',
        function: ''
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('から');
    });

    it('should apply multiple filters', () => {
      const filters: GrammarFilters = {
        search: '',
        jlpt: 'N5',
        category: 'particle',
        function: 'question'
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should apply search and category filter together', () => {
      const filters: GrammarFilters = {
        search: 'trợ',
        jlpt: '',
        category: 'particle',
        function: ''
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(1);
      expect(result[0].pattern).toBe('は');
    });

    it('should handle "all" filters', () => {
      const filters: GrammarFilters = {
        search: '',
        jlpt: 'all',
        category: 'all',
        function: 'all'
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(3);
    });

    it('should handle empty filters', () => {
      const filters: GrammarFilters = {
        search: '',
        jlpt: '',
        category: '',
        function: ''
      };
      const result = applyFilters(patterns, filters);

      expect(result).toHaveLength(3);
    });

    it('should return empty array when no matches', () => {
      const filters: GrammarFilters = {
        search: 'xyz123',
        jlpt: '',
        category: '',
        function: ''
      };
      const result = applyFilters(patterns, filters);

      expect(result).toEqual([]);
    });
  });

  describe('getPatternStats', () => {
    const patterns: GrammarPattern[] = [
      createPattern({
        pattern: 'は',
        lessonNumber: 1,
        meta: {
          categories: ['particle'],
          functions: ['question'],
          jlptLevel: 'N5'
        }
      }),
      createPattern({
        pattern: 'ます',
        lessonNumber: 1,
        meta: {
          categories: ['verb'],
          functions: ['request'],
          jlptLevel: 'N5'
        }
      }),
      createPattern({
        pattern: 'から',
        lessonNumber: 2,
        meta: {
          categories: ['particle', 'verb'],
          functions: ['question'],
          jlptLevel: 'N4'
        }
      }),
      createPattern({
        pattern: 'です',
        lessonNumber: 2,
        meta: null
      })
    ];

    it('should count total patterns', () => {
      const stats = getPatternStats(patterns);
      expect(stats.total).toBe(4);
    });

    it('should count patterns with/without metadata', () => {
      const stats = getPatternStats(patterns);
      expect(stats.withMetadata).toBe(3);
      expect(stats.withoutMetadata).toBe(1);
    });

    it('should count by JLPT level', () => {
      const stats = getPatternStats(patterns);
      expect(stats.byJLPT['N5']).toBe(2);
      expect(stats.byJLPT['N4']).toBe(1);
    });

    it('should count by category', () => {
      const stats = getPatternStats(patterns);
      expect(stats.byCategory['particle']).toBe(2); // は, から
      expect(stats.byCategory['verb']).toBe(2); // ます, から
    });

    it('should count by function', () => {
      const stats = getPatternStats(patterns);
      expect(stats.byFunction['question']).toBe(2); // は, から
      expect(stats.byFunction['request']).toBe(1); // ます
    });

    it('should count by lesson', () => {
      const stats = getPatternStats(patterns);
      expect(stats.byLesson[1]).toBe(2); // は, ます
      expect(stats.byLesson[2]).toBe(2); // から, です
    });

    it('should handle empty array', () => {
      const stats = getPatternStats([]);
      expect(stats.total).toBe(0);
      expect(stats.withMetadata).toBe(0);
      expect(stats.withoutMetadata).toBe(0);
      expect(Object.keys(stats.byJLPT)).toHaveLength(0);
      expect(Object.keys(stats.byCategory)).toHaveLength(0);
      expect(Object.keys(stats.byFunction)).toHaveLength(0);
      expect(Object.keys(stats.byLesson)).toHaveLength(0);
    });

    it('should handle patterns without optional metadata fields', () => {
      const minimal: GrammarPattern[] = [
        createPattern({
          meta: {}
        })
      ];
      const stats = getPatternStats(minimal);

      expect(stats.total).toBe(1);
      expect(stats.withMetadata).toBe(1);
      expect(Object.keys(stats.byJLPT)).toHaveLength(0);
      expect(Object.keys(stats.byCategory)).toHaveLength(0);
      expect(Object.keys(stats.byFunction)).toHaveLength(0);
    });
  });
});
