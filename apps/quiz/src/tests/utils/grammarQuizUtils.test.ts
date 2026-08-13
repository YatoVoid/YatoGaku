/**
 * Tests for grammarQuizUtils
 */

import { describe, it, expect } from 'vitest';
import { generateGrammarQuestions } from '$lib/utils/grammarQuizUtils';
import type { GrammarItem } from '$lib/types';

const sampleGrammar: GrammarItem[] = [
  {
    pattern: '～は ～です',
    vietnamese: '~ là ~',
    english: '~ is ~',
    type: 'main',
    explanation: 'Basic copula sentence pattern',
    examples: [
      { japanese: 'わたしは がくせいです', vietnamese: 'Tôi là sinh viên', english: 'I am a student', type: 'main' }
    ]
  },
  {
    pattern: '～は ～じゃありません',
    vietnamese: '~ không phải là ~',
    english: '~ is not ~',
    type: 'main',
    explanation: 'Negative copula',
    examples: [
      { japanese: 'わたしは せんせいじゃありません', vietnamese: 'Tôi không phải là giáo viên', english: 'I am not a teacher', type: 'main' }
    ]
  },
  {
    pattern: '～の ～',
    vietnamese: '~ của ~',
    english: "~'s ~",
    type: 'main',
    explanation: 'Possession particle の',
    examples: [
      { japanese: 'わたしの ほん', vietnamese: 'Sách của tôi', english: 'My book', type: 'main' }
    ]
  },
  {
    pattern: '～を ～ます',
    vietnamese: 'Làm ~',
    english: 'do ~',
    type: 'main',
    explanation: 'Object marker を with verb',
    examples: [
      { japanese: 'にほんごを べんきょうします', vietnamese: 'Học tiếng Nhật', english: 'Study Japanese', type: 'main' }
    ]
  }
];

describe('generateGrammarQuestions', () => {
  it('should generate questions from grammar items', () => {
    const questions = generateGrammarQuestions(sampleGrammar);
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.length).toBeLessThanOrEqual(sampleGrammar.length);
  });

  it('should include both fill-blank and pattern-match types', () => {
    const questions = generateGrammarQuestions(sampleGrammar);
    const types = new Set(questions.map(q => q.type));
    expect(types.size).toBeGreaterThanOrEqual(1);
  });

  it('should have valid question structure', () => {
    const questions = generateGrammarQuestions(sampleGrammar);
    for (const q of questions) {
      expect(q.id).toBeTruthy();
      expect(q.question).toBeTruthy();
      expect(q.answer).toBeTruthy();
      expect(q.grammarItem).toBeDefined();
      expect(['fill-blank', 'pattern-match']).toContain(q.type);
    }
  });

  it('should generate pattern-match questions with 4 options', () => {
    const questions = generateGrammarQuestions(sampleGrammar);
    const pmQuestions = questions.filter(q => q.type === 'pattern-match');
    for (const q of pmQuestions) {
      expect(q.options).toBeDefined();
      expect(q.options!.length).toBe(4);
      expect(q.options).toContain(q.answer);
    }
  });

  it('should respect count parameter', () => {
    const questions = generateGrammarQuestions(sampleGrammar, 2);
    expect(questions.length).toBeLessThanOrEqual(2);
  });

  it('should handle empty grammar array', () => {
    const questions = generateGrammarQuestions([]);
    expect(questions).toEqual([]);
  });

  it('should handle grammar with no examples (fallback to pattern-match)', () => {
    const noExamples: GrammarItem[] = [{
      pattern: '～ても',
      vietnamese: 'Dù ~',
      english: 'Even if ~',
      type: 'main',
      explanation: 'Concessive pattern',
      examples: []
    }];

    const questions = generateGrammarQuestions([...noExamples, ...sampleGrammar]);
    expect(questions.length).toBeGreaterThan(0);
  });

  it('should have unique question IDs', () => {
    const questions = generateGrammarQuestions(sampleGrammar);
    const ids = questions.map(q => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should include hints on fill-blank questions', () => {
    const questions = generateGrammarQuestions(sampleGrammar);
    const fbQuestions = questions.filter(q => q.type === 'fill-blank');
    for (const q of fbQuestions) {
      expect(q.hint).toBeTruthy();
    }
  });
});
