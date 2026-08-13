/**
 * Tests for examUtils — exam scoring + attempt persistence.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  computeExamResult,
  sectionTypeLabel,
  saveAttempt,
  getAttempts,
  getAttemptsForPaper,
  saveExamDraft,
  getExamDraft,
  clearExamDraft,
  PASS_PERCENT
} from '$lib/utils/examUtils';
import { loadPaper } from '$lib/data/exams';
import type { ExamPaper, ExamAttempt } from '$lib/types/exam';

const paper = loadPaper('n5-sample-1') as ExamPaper;

/** Build an answers map where every question is answered correctly. */
function allCorrect(p: ExamPaper): Record<string, number> {
  const answers: Record<string, number> = {};
  for (const section of p.sections) {
    for (const q of section.questions) answers[q.id] = q.answerIndex;
  }
  return answers;
}

/** Build answers where every question is answered, but always wrong. */
function allWrong(p: ExamPaper): Record<string, number> {
  const answers: Record<string, number> = {};
  for (const section of p.sections) {
    for (const q of section.questions) {
      answers[q.id] = q.answerIndex === 0 ? 1 : 0;
    }
  }
  return answers;
}

describe('examUtils — fixture sanity', () => {
  it('the n5-sample-1 paper exists with sections', () => {
    expect(paper).toBeTruthy();
    expect(paper.sections.length).toBeGreaterThan(0);
  });
});

describe('computeExamResult', () => {
  it('scores a perfect paper as 100% and passed', () => {
    const result = computeExamResult(paper, allCorrect(paper));
    expect(result.correct).toBe(result.total);
    expect(result.scorePercent).toBe(100);
    expect(result.passed).toBe(true);
  });

  it('scores an all-wrong paper as 0% and failed', () => {
    const result = computeExamResult(paper, allWrong(paper));
    expect(result.correct).toBe(0);
    expect(result.scorePercent).toBe(0);
    expect(result.passed).toBe(false);
  });

  it('treats missing answers as incorrect', () => {
    const result = computeExamResult(paper, {});
    expect(result.correct).toBe(0);
    expect(result.total).toBeGreaterThan(0);
    expect(result.passed).toBe(false);
  });

  it('produces one section result per paper section, in order', () => {
    const result = computeExamResult(paper, allCorrect(paper));
    expect(result.sections.length).toBe(paper.sections.length);
    result.sections.forEach((s, i) => {
      expect(s.type).toBe(paper.sections[i].type);
      expect(s.total).toBe(paper.sections[i].questions.length);
      expect(s.correct).toBe(s.total); // all correct
    });
  });

  it('section + overall totals are consistent', () => {
    const result = computeExamResult(paper, allCorrect(paper));
    const sumCorrect = result.sections.reduce((n, s) => n + s.correct, 0);
    const sumTotal = result.sections.reduce((n, s) => n + s.total, 0);
    expect(sumCorrect).toBe(result.correct);
    expect(sumTotal).toBe(result.total);
  });

  it('rounds the score and applies the 60% pass threshold', () => {
    // Synthetic 3-question paper: 2/3 correct = 67% -> pass.
    const tiny: ExamPaper = {
      id: 'tiny',
      level: 'N5',
      title: 'tiny',
      source: { name: 'test' },
      durationMinutes: 1,
      sections: [
        {
          type: 'vocab',
          title: 'v',
          questions: [
            { id: 'a', prompt: 'a', options: ['x', 'y'], answerIndex: 0 },
            { id: 'b', prompt: 'b', options: ['x', 'y'], answerIndex: 0 },
            { id: 'c', prompt: 'c', options: ['x', 'y'], answerIndex: 0 }
          ]
        }
      ]
    };
    const result = computeExamResult(tiny, { a: 0, b: 0, c: 1 });
    expect(result.correct).toBe(2);
    expect(result.scorePercent).toBe(67); // Math.round(66.66)
    expect(result.passed).toBe(true);
    expect(PASS_PERCENT).toBe(60);
  });

  it('fails just below the threshold (1/2 = 50%)', () => {
    const tiny: ExamPaper = {
      id: 'tiny2',
      level: 'N5',
      title: 'tiny2',
      source: { name: 'test' },
      durationMinutes: 1,
      sections: [
        {
          type: 'grammar',
          title: 'g',
          questions: [
            { id: 'a', prompt: 'a', options: ['x', 'y'], answerIndex: 0 },
            { id: 'b', prompt: 'b', options: ['x', 'y'], answerIndex: 0 }
          ]
        }
      ]
    };
    const result = computeExamResult(tiny, { a: 0, b: 1 });
    expect(result.scorePercent).toBe(50);
    expect(result.passed).toBe(false);
  });

  it('handles an empty paper without dividing by zero', () => {
    const empty: ExamPaper = {
      id: 'empty',
      level: 'N5',
      title: 'empty',
      source: { name: 'test' },
      durationMinutes: 1,
      sections: []
    };
    const result = computeExamResult(empty, {});
    expect(result.total).toBe(0);
    expect(result.scorePercent).toBe(0);
    expect(result.passed).toBe(false);
    expect(result.sections).toEqual([]);
  });

  it('stores durationSeconds only when provided', () => {
    const withTime = computeExamResult(paper, {}, 123);
    expect(withTime.durationSeconds).toBe(123);
    const withoutTime = computeExamResult(paper, {});
    expect(withoutTime.durationSeconds).toBeUndefined();
  });
});

describe('sectionTypeLabel', () => {
  it('maps known section types to Vietnamese labels', () => {
    expect(sectionTypeLabel('vocab')).toBe('Từ vựng');
    expect(sectionTypeLabel('grammar')).toBe('Ngữ pháp');
    expect(sectionTypeLabel('reading')).toBe('Đọc hiểu');
    expect(sectionTypeLabel('listening')).toBe('Nghe');
  });
});

describe('attempt persistence', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function makeAttempt(paperId: string): ExamAttempt {
    return {
      paperId,
      level: 'N5',
      startedAt: Date.now(),
      finishedAt: Date.now(),
      answers: {},
      result: computeExamResult(paper, allCorrect(paper))
    };
  }

  it('returns an empty array when nothing is saved', () => {
    expect(getAttempts()).toEqual([]);
  });

  it('saves and retrieves an attempt', () => {
    const attempt = makeAttempt('n5-sample-1');
    saveAttempt(attempt);
    const all = getAttempts();
    expect(all.length).toBe(1);
    expect(all[0].paperId).toBe('n5-sample-1');
    expect(all[0].result?.scorePercent).toBe(100);
  });

  it('prepends newest attempts first', () => {
    saveAttempt(makeAttempt('p1'));
    saveAttempt(makeAttempt('p2'));
    const all = getAttempts();
    expect(all.map((a) => a.paperId)).toEqual(['p2', 'p1']);
  });

  it('filters attempts by paperId', () => {
    saveAttempt(makeAttempt('p1'));
    saveAttempt(makeAttempt('p2'));
    saveAttempt(makeAttempt('p1'));
    expect(getAttemptsForPaper('p1').length).toBe(2);
    expect(getAttemptsForPaper('p2').length).toBe(1);
    expect(getAttemptsForPaper('nope').length).toBe(0);
  });

  it('recovers gracefully from corrupt storage', () => {
    localStorage.setItem('smart_quiz_exam_attempts', 'not-json{');
    expect(getAttempts()).toEqual([]);
  });
});

describe('exam draft persistence', () => {
  beforeEach(() => localStorage.clear());

  it('saves, restores, and clears an active exam', () => {
    const draft = { paperId: 'n5-sample-1', answers: { q1: 2 }, currentSection: 1, startedAt: Date.now(), expiresAt: Date.now() + 60_000 };
    saveExamDraft(draft);
    expect(getExamDraft(draft.paperId)).toEqual(draft);
    clearExamDraft(draft.paperId);
    expect(getExamDraft(draft.paperId)).toBeNull();
  });

  it('discards an expired draft', () => {
    saveExamDraft({ paperId: 'expired', answers: {}, currentSection: 0, startedAt: 1, expiresAt: Date.now() - 1 });
    expect(getExamDraft('expired')).toBeNull();
  });
});
