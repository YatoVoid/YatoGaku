/**
 * Tests for hskQuizUtils — HSK quiz question generation
 */

import { describe, it, expect } from 'vitest';
import { generateHSKQuestions, generateHSKMCOptions } from '$lib/utils/hskQuizUtils';
import type { HSKWord } from '$lib/types/hsk';

const sampleWords: HSKWord[] = [
  { chinese: '你好', pinyin: 'nǐ hǎo', vietnamese: 'xin chào' },
  { chinese: '谢谢', pinyin: 'xiè xie', vietnamese: 'cảm ơn' },
  { chinese: '再见', pinyin: 'zài jiàn', vietnamese: 'tạm biệt' },
  { chinese: '对不起', pinyin: 'duì bu qǐ', vietnamese: 'xin lỗi' },
  { chinese: '没关系', pinyin: 'méi guān xi', vietnamese: 'không sao' },
];

describe('generateHSKQuestions', () => {
  it('should generate questions from HSK words', () => {
    const qs = generateHSKQuestions(sampleWords, 'chinese-vi');
    expect(qs.length).toBeGreaterThan(0);
  });

  it('should support chinese-vi direction', () => {
    const qs = generateHSKQuestions(sampleWords, 'chinese-vi');
    expect(qs[0].question).toMatch(/[\u4e00-\u9fff]/);
  });

  it('should support vi-chinese direction', () => {
    const qs = generateHSKQuestions(sampleWords, 'vi-chinese');
    expect(qs[0].answer).toMatch(/[\u4e00-\u9fff]/);
  });

  it('should support chinese-pinyin direction', () => {
    const qs = generateHSKQuestions(sampleWords, 'chinese-pinyin');
    expect(qs[0].question).toMatch(/[\u4e00-\u9fff]/);
    // answer should be pinyin (latin chars)
    expect(qs[0].answer).toMatch(/[a-zāáǎàēéěèīíǐìōóǒòūúǔù]/i);
  });

  it('each question should have required fields', () => {
    const qs = generateHSKQuestions(sampleWords, 'chinese-vi');
    for (const q of qs) {
      expect(q.id).toBeTruthy();
      expect(q.question).toBeTruthy();
      expect(q.answer).toBeTruthy();
    }
  });
});

describe('generateHSKMCOptions', () => {
  it('should generate 4 options including correct answer', () => {
    const opts = generateHSKMCOptions('xin chào', sampleWords, 'chinese-vi');
    expect(opts.length).toBe(4);
    expect(opts).toContain('xin chào');
  });

  it('should not have duplicate options', () => {
    const opts = generateHSKMCOptions('xin chào', sampleWords, 'chinese-vi');
    expect(new Set(opts).size).toBe(opts.length);
  });
});
