/**
 * Unit tests for quizUtils.ts
 * Tests quiz generation, validation, and statistics functions
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  shuffleArray,
  generateQuestions,
  generateMCOptions,
  normalizeString,
  checkAnswer,
  calculateStats,
  formatDuration
} from '$lib/utils/quizUtils';
import type { VocabItem, QuizDirection } from '$lib/types';

// Test data
const createVocabItem = (overrides: Partial<VocabItem> = {}): VocabItem => ({
  japanese: 'こんにちは',
  vietnamese: 'Xin chào',
  english: 'Hello',
  kana: 'こんにちは',
  type: 'main',
  ...overrides
});

describe('quizUtils', () => {
  describe('shuffleArray', () => {
    it('should return array with same length', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(arr);

      expect(shuffled).toHaveLength(arr.length);
    });

    it('should contain all original elements', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffleArray(arr);

      expect(shuffled.sort()).toEqual(arr.sort());
    });

    it('should not mutate original array', () => {
      const arr = [1, 2, 3, 4, 5];
      const original = [...arr];

      shuffleArray(arr);

      expect(arr).toEqual(original);
    });

    it('should handle empty array', () => {
      const result = shuffleArray([]);
      expect(result).toEqual([]);
    });

    it('should handle single element', () => {
      const result = shuffleArray([1]);
      expect(result).toEqual([1]);
    });

    it('should handle two elements', () => {
      const arr = [1, 2];
      const result = shuffleArray(arr);

      expect(result).toHaveLength(2);
      expect(result).toContain(1);
      expect(result).toContain(2);
    });

    it('should produce different order eventually', () => {
      // Run shuffle 100 times, should get at least one different order
      const arr = [1, 2, 3, 4, 5];
      let foundDifferent = false;

      for (let i = 0; i < 100; i++) {
        const shuffled = shuffleArray(arr);
        if (JSON.stringify(shuffled) !== JSON.stringify(arr)) {
          foundDifferent = true;
          break;
        }
      }

      expect(foundDifferent).toBe(true);
    });
  });

  describe('generateQuestions', () => {
    const vocabItems: VocabItem[] = [
      createVocabItem({
        japanese: 'こんにちは',
        vietnamese: 'Xin chào',
        english: 'Hello'
      }),
      createVocabItem({
        japanese: 'ありがとう',
        vietnamese: 'Cảm ơn',
        english: 'Thank you'
      }),
      createVocabItem({
        japanese: 'さようなら',
        vietnamese: 'Tạm biệt',
        english: 'Goodbye'
      })
    ];

    it('should generate questions for ja-vi direction', () => {
      const questions = generateQuestions(vocabItems, 'ja-vi');

      expect(questions).toHaveLength(3);
      questions.forEach((q, i) => {
        const item = q.item as VocabItem;
        expect(q.id).toBe(`q-${i}`);
        expect(q.question).toBe(item.japanese);
        expect(q.answer).toBe(item.vietnamese);
      });
    });

    it('should generate questions for vi-ja direction', () => {
      const questions = generateQuestions(vocabItems, 'vi-ja');

      expect(questions).toHaveLength(3);
      questions.forEach(q => {
        const item = q.item as VocabItem;
        expect(q.question).toBe(item.vietnamese);
        expect(q.answer).toBe(item.japanese);
      });
    });

    it('should generate questions for ja-en direction', () => {
      const questions = generateQuestions(vocabItems, 'ja-en');

      expect(questions).toHaveLength(3);
      questions.forEach(q => {
        const item = q.item as VocabItem;
        expect(q.question).toBe(item.japanese);
        expect(q.answer).toBe(item.english);
      });
    });

    it('should generate questions for en-ja direction', () => {
      const questions = generateQuestions(vocabItems, 'en-ja');

      expect(questions).toHaveLength(3);
      questions.forEach(q => {
        const item = q.item as VocabItem;
        expect(q.question).toBe(item.english);
        expect(q.answer).toBe(item.japanese);
      });
    });

    it('should limit questions by count', () => {
      const questions = generateQuestions(vocabItems, 'ja-vi', 2);

      expect(questions).toHaveLength(2);
    });

    it('should handle count larger than array length', () => {
      const questions = generateQuestions(vocabItems, 'ja-vi', 10);

      expect(questions).toHaveLength(3);
    });

    it('should treat zero count as no limit', () => {
      // count=0 is falsy, so it returns all items
      const questions = generateQuestions(vocabItems, 'ja-vi', 0);

      expect(questions).toHaveLength(3);
    });

    it('should handle empty vocab array', () => {
      const questions = generateQuestions([], 'ja-vi');

      expect(questions).toEqual([]);
    });

    it('should default to ja-vi for unknown direction', () => {
      const questions = generateQuestions(vocabItems, 'unknown' as QuizDirection);

      questions.forEach(q => {
        const item = q.item as VocabItem;
        expect(q.question).toBe(item.japanese);
        expect(q.answer).toBe(item.vietnamese);
      });
    });

    it('should include original item in question', () => {
      const questions = generateQuestions(vocabItems, 'ja-vi');

      questions.forEach((q, i) => {
        const item = q.item as VocabItem;
        expect(q.item).toBeDefined();
        expect(item.japanese).toBeTruthy();
        expect(item.vietnamese).toBeTruthy();
      });
    });

    it('should generate unique question IDs', () => {
      const questions = generateQuestions(vocabItems, 'ja-vi');
      const ids = questions.map(q => q.id);
      const uniqueIds = new Set(ids);

      expect(uniqueIds.size).toBe(questions.length);
    });
  });

  describe('generateMCOptions', () => {
    const vocabItems: VocabItem[] = [
      createVocabItem({ japanese: '1', vietnamese: 'A', english: 'One' }),
      createVocabItem({ japanese: '2', vietnamese: 'B', english: 'Two' }),
      createVocabItem({ japanese: '3', vietnamese: 'C', english: 'Three' }),
      createVocabItem({ japanese: '4', vietnamese: 'D', english: 'Four' }),
      createVocabItem({ japanese: '5', vietnamese: 'E', english: 'Five' })
    ];

    it('should generate 4 options by default', () => {
      const options = generateMCOptions('A', vocabItems, 'ja-vi');

      expect(options).toHaveLength(4);
    });

    it('should include correct answer', () => {
      const options = generateMCOptions('A', vocabItems, 'ja-vi');

      expect(options).toContain('A');
    });

    it('should not duplicate correct answer', () => {
      const options = generateMCOptions('A', vocabItems, 'ja-vi');
      const countA = options.filter(o => o === 'A').length;

      expect(countA).toBe(1);
    });

    it('should respect custom options count', () => {
      const options = generateMCOptions('A', vocabItems, 'ja-vi', 3);

      expect(options).toHaveLength(3);
      expect(options).toContain('A');
    });

    it('should work with ja-en direction', () => {
      const options = generateMCOptions('One', vocabItems, 'ja-en');

      expect(options).toContain('One');
      expect(options).toHaveLength(4);
    });

    it('should work with vi-ja direction', () => {
      const options = generateMCOptions('1', vocabItems, 'vi-ja');

      expect(options).toContain('1');
      expect(options).toHaveLength(4);
    });

    it('should handle duplicates in vocab items', () => {
      const duplicates: VocabItem[] = [
        createVocabItem({ japanese: '1', vietnamese: 'Same' }),
        createVocabItem({ japanese: '2', vietnamese: 'Same' }),
        createVocabItem({ japanese: '3', vietnamese: 'Same' }),
        createVocabItem({ japanese: '4', vietnamese: 'Different' })
      ];

      const options = generateMCOptions('Same', duplicates, 'ja-vi', 4);

      // Should have at least 2 options (correct + at least one wrong)
      expect(options.length).toBeGreaterThanOrEqual(2);
      expect(options).toContain('Same');
    });

    it('should handle when not enough wrong answers available', () => {
      const fewItems: VocabItem[] = [
        createVocabItem({ vietnamese: 'A' }),
        createVocabItem({ vietnamese: 'B' })
      ];

      const options = generateMCOptions('A', fewItems, 'ja-vi', 4);

      // Should have 2 options (can't generate 4)
      expect(options).toHaveLength(2);
      expect(options).toContain('A');
      expect(options).toContain('B');
    });

    it('should not include duplicate options', () => {
      const options = generateMCOptions('A', vocabItems, 'ja-vi', 4);
      const uniqueOptions = new Set(options);

      expect(uniqueOptions.size).toBe(options.length);
    });
  });

  describe('normalizeString', () => {
    it('should trim whitespace', () => {
      expect(normalizeString('  hello  ')).toBe('hello');
    });

    it('should convert to lowercase', () => {
      expect(normalizeString('HELLO')).toBe('hello');
      expect(normalizeString('HeLLo')).toBe('hello');
    });

    it('should remove all spaces', () => {
      expect(normalizeString('hello world')).toBe('helloworld');
      expect(normalizeString('  hello   world  ')).toBe('helloworld');
    });

    it('should handle empty string', () => {
      expect(normalizeString('')).toBe('');
    });

    it('should handle whitespace only', () => {
      expect(normalizeString('   ')).toBe('');
    });

    it('should handle string with no spaces', () => {
      expect(normalizeString('hello')).toBe('hello');
    });

    it('should handle Japanese characters', () => {
      expect(normalizeString('こんにちは')).toBe('こんにちは');
      expect(normalizeString('  こんにちは  ')).toBe('こんにちは');
    });

    it('should handle Vietnamese characters', () => {
      expect(normalizeString('Xin Chào')).toBe('xinchào');
    });

    it('should handle multiple spaces', () => {
      expect(normalizeString('a  b    c')).toBe('abc');
    });

    it('should handle tabs and newlines', () => {
      expect(normalizeString('hello\tworld\n')).toBe('helloworld');
    });
  });

  describe('checkAnswer', () => {
    it('should return true for exact match', () => {
      expect(checkAnswer('hello', 'hello')).toBe(true);
    });

    it('should return false for different strings', () => {
      expect(checkAnswer('hello', 'world')).toBe(false);
    });

    it('should ignore case', () => {
      expect(checkAnswer('Hello', 'hello')).toBe(true);
      expect(checkAnswer('HELLO', 'hello')).toBe(true);
    });

    it('should ignore whitespace', () => {
      expect(checkAnswer('  hello  ', 'hello')).toBe(true);
      expect(checkAnswer('hello', '  hello  ')).toBe(true);
    });

    it('should ignore spaces in middle', () => {
      expect(checkAnswer('hello world', 'helloworld')).toBe(true);
      expect(checkAnswer('helloworld', 'hello world')).toBe(true);
    });

    it('should handle Japanese characters', () => {
      expect(checkAnswer('こんにちは', 'こんにちは')).toBe(true);
      expect(checkAnswer('  こんにちは  ', 'こんにちは')).toBe(true);
    });

    it('should handle Vietnamese characters', () => {
      expect(checkAnswer('Xin chào', 'xin chào')).toBe(true);
      expect(checkAnswer('Xin Chào', 'xinchào')).toBe(true);
    });

    it('should handle empty strings', () => {
      expect(checkAnswer('', '')).toBe(true);
      expect(checkAnswer('', 'hello')).toBe(false);
      expect(checkAnswer('hello', '')).toBe(false);
    });

    it('should handle whitespace-only strings', () => {
      expect(checkAnswer('   ', '')).toBe(true);
      expect(checkAnswer('', '   ')).toBe(true);
    });

    it('should be commutative after normalization', () => {
      const a = 'Hello World';
      const b = 'helloworld';

      expect(checkAnswer(a, b)).toBe(checkAnswer(b, a));
    });
  });

  describe('calculateStats', () => {
    it('should calculate basic stats', () => {
      const stats = calculateStats(8, 10);

      expect(stats.correct).toBe(8);
      expect(stats.wrong).toBe(2);
      expect(stats.total).toBe(10);
      expect(stats.percentage).toBe(80);
    });

    it('should assign grade A for 90%+', () => {
      expect(calculateStats(9, 10).grade).toBe('A');
      expect(calculateStats(10, 10).grade).toBe('A');
      expect(calculateStats(95, 100).grade).toBe('A');
    });

    it('should assign grade B for 80-89%', () => {
      expect(calculateStats(8, 10).grade).toBe('B');
      expect(calculateStats(80, 100).grade).toBe('B');
      expect(calculateStats(89, 100).grade).toBe('B');
    });

    it('should assign grade C for 70-79%', () => {
      expect(calculateStats(7, 10).grade).toBe('C');
      expect(calculateStats(70, 100).grade).toBe('C');
      expect(calculateStats(79, 100).grade).toBe('C');
    });

    it('should assign grade D for 60-69%', () => {
      expect(calculateStats(6, 10).grade).toBe('D');
      expect(calculateStats(60, 100).grade).toBe('D');
      expect(calculateStats(69, 100).grade).toBe('D');
    });

    it('should assign grade F for <60%', () => {
      expect(calculateStats(5, 10).grade).toBe('F');
      expect(calculateStats(0, 10).grade).toBe('F');
      expect(calculateStats(59, 100).grade).toBe('F');
    });

    it('should handle zero total', () => {
      const stats = calculateStats(0, 0);

      expect(stats.correct).toBe(0);
      expect(stats.wrong).toBe(0);
      expect(stats.total).toBe(0);
      expect(stats.percentage).toBe(0);
      expect(stats.grade).toBe('F');
    });

    it('should handle perfect score', () => {
      const stats = calculateStats(10, 10);

      expect(stats.correct).toBe(10);
      expect(stats.wrong).toBe(0);
      expect(stats.total).toBe(10);
      expect(stats.percentage).toBe(100);
      expect(stats.grade).toBe('A');
    });

    it('should handle zero correct', () => {
      const stats = calculateStats(0, 10);

      expect(stats.correct).toBe(0);
      expect(stats.wrong).toBe(10);
      expect(stats.total).toBe(10);
      expect(stats.percentage).toBe(0);
      expect(stats.grade).toBe('F');
    });

    it('should round percentage', () => {
      expect(calculateStats(1, 3).percentage).toBe(33); // 33.33...
      expect(calculateStats(2, 3).percentage).toBe(67); // 66.66...
      expect(calculateStats(5, 7).percentage).toBe(71); // 71.42...
    });

    it('should calculate wrong count correctly', () => {
      expect(calculateStats(7, 10).wrong).toBe(3);
      expect(calculateStats(15, 20).wrong).toBe(5);
      expect(calculateStats(0, 5).wrong).toBe(5);
    });

    it('should handle large numbers', () => {
      const stats = calculateStats(800, 1000);

      expect(stats.correct).toBe(800);
      expect(stats.wrong).toBe(200);
      expect(stats.percentage).toBe(80);
      expect(stats.grade).toBe('B');
    });
  });

  describe('formatDuration', () => {
    it('should format seconds only', () => {
      expect(formatDuration(5000)).toBe('0:05');
      expect(formatDuration(30000)).toBe('0:30');
      expect(formatDuration(59000)).toBe('0:59');
    });

    it('should format minutes and seconds', () => {
      expect(formatDuration(60000)).toBe('1:00');
      expect(formatDuration(90000)).toBe('1:30');
      expect(formatDuration(125000)).toBe('2:05');
    });

    it('should pad seconds with zero', () => {
      expect(formatDuration(61000)).toBe('1:01');
      expect(formatDuration(605000)).toBe('10:05');
    });

    it('should handle zero', () => {
      expect(formatDuration(0)).toBe('0:00');
    });

    it('should handle less than 1 second', () => {
      expect(formatDuration(500)).toBe('0:00');
      expect(formatDuration(999)).toBe('0:00');
    });

    it('should handle hours (as minutes)', () => {
      expect(formatDuration(3600000)).toBe('60:00'); // 1 hour = 60 minutes
      expect(formatDuration(3661000)).toBe('61:01'); // 1 hour 1 minute 1 second
    });

    it('should floor partial seconds', () => {
      expect(formatDuration(1999)).toBe('0:01'); // 1.999 seconds
      expect(formatDuration(59999)).toBe('0:59'); // 59.999 seconds
    });

    it('should handle large durations', () => {
      expect(formatDuration(600000)).toBe('10:00'); // 10 minutes
      expect(formatDuration(6000000)).toBe('100:00'); // 100 minutes
    });

    it('should not show leading zero for minutes >= 10', () => {
      expect(formatDuration(600000)).toBe('10:00');
      expect(formatDuration(1200000)).toBe('20:00');
    });

    it('should always show leading zero for seconds', () => {
      expect(formatDuration(5000)).toBe('0:05');
      expect(formatDuration(65000)).toBe('1:05');
    });
  });
});
