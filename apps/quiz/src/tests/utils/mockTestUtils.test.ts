/**
 * Tests for mockTestUtils — JLPT mock test generation and scoring
 */

import { describe, it, expect } from 'vitest';
import { generateMockTest, calculateJLPTScore } from '$lib/utils/mockTestUtils';

describe('generateMockTest', () => {
  it('should generate exactly 30 questions for N5', () => {
    const questions = generateMockTest('n5');
    expect(questions.length).toBe(30);
  });

  it('should include both vocab and grammar questions', () => {
    const questions = generateMockTest('n5');
    const sections = new Set(questions.map(q => q.section));
    expect(sections.has('vocab')).toBe(true);
    expect(sections.has('grammar')).toBe(true);
  });

  it('should not have duplicate questions', () => {
    const questions = generateMockTest('n5');
    const ids = questions.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should shuffle questions randomly', () => {
    const q1 = generateMockTest('n5').map(q => q.id);
    const q2 = generateMockTest('n5').map(q => q.id);
    expect(q1).not.toEqual(q2);
  });

  it('each question should have required fields', () => {
    const questions = generateMockTest('n5');
    for (const q of questions) {
      expect(q.id).toBeTruthy();
      expect(q.question).toBeTruthy();
      expect(q.answer).toBeTruthy();
      expect(q.options?.length).toBe(4);
      expect(['vocab', 'grammar']).toContain(q.section);
    }
  });

  it('should handle N4 level', () => {
    const questions = generateMockTest('n4');
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.length).toBeLessThanOrEqual(30);
  });

  it('should return empty for invalid level', () => {
    const questions = generateMockTest('invalid');
    expect(questions.length).toBe(0);
  });
});

describe('calculateJLPTScore', () => {
  it('should return pass when scores are sufficient', () => {
    const result = calculateJLPTScore({ vocabCorrect: 12, vocabTotal: 15, grammarCorrect: 12, grammarTotal: 15 });
    expect(result.pass).toBe(true);
    expect(result.totalPercentage).toBeGreaterThanOrEqual(70);
  });

  it('should return fail when total too low', () => {
    const result = calculateJLPTScore({ vocabCorrect: 3, vocabTotal: 15, grammarCorrect: 3, grammarTotal: 15 });
    expect(result.pass).toBe(false);
  });

  it('should return fail when one section below minimum', () => {
    const result = calculateJLPTScore({ vocabCorrect: 15, vocabTotal: 15, grammarCorrect: 0, grammarTotal: 15 });
    expect(result.pass).toBe(false);
  });
});
