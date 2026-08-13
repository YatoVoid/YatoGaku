/**
 * Unit tests for the exam-pipeline validator (`scripts/fetch-exams/validate.js`).
 *
 * The validator is the gate that makes the pipeline fail (non-zero exit) on any
 * malformed paper, so these tests assert it ACCEPTS well-formed papers and
 * REJECTS each class of malformation with a located issue.
 */

import { describe, it, expect } from 'vitest';
import {
  validatePaper,
  validatePapers,
  validateAll
} from '../../../scripts/fetch-exams/validate.js';
import type { ExamPaper } from '$lib/types/exam';

/** A minimal, fully-valid paper used as the base for mutation. */
function validPaper(): ExamPaper {
  return {
    id: 'test-1',
    level: 'N5',
    title: 'Test paper',
    source: { name: 'Test', license: 'original' },
    durationMinutes: 20,
    sections: [
      {
        type: 'vocab',
        title: 'Vocab',
        questions: [
          { id: 'q1', prompt: 'A?', options: ['a', 'b'], answerIndex: 0 },
          { id: 'q2', prompt: 'B?', options: ['a', 'b', 'c'], answerIndex: 2 }
        ]
      },
      {
        type: 'reading',
        title: 'Reading',
        passages: [{ id: 'p1', text: 'passage text' }],
        questions: [
          { id: 'r1', passageId: 'p1', prompt: 'R?', options: ['x', 'y'], answerIndex: 1 }
        ]
      }
    ]
  };
}

/** Deep clone so each test mutates an isolated copy. */
function clone(p: ExamPaper): ExamPaper {
  return JSON.parse(JSON.stringify(p)) as ExamPaper;
}

describe('validatePaper — accepts valid papers', () => {
  it('returns no issues for a well-formed paper', () => {
    expect(validatePaper(validPaper())).toEqual([]);
  });
});

describe('validatePaper — structural rejections', () => {
  it('rejects empty sections', () => {
    const p = clone(validPaper());
    p.sections = [];
    const issues = validatePaper(p);
    expect(issues.some((i) => i.path === 'sections')).toBe(true);
  });

  it('rejects a section with no questions', () => {
    const p = clone(validPaper());
    p.sections[0].questions = [];
    const issues = validatePaper(p);
    expect(issues.some((i) => i.path.endsWith('.questions'))).toBe(true);
  });

  it('rejects a missing/empty id, title, level and non-positive duration', () => {
    const p = clone(validPaper());
    p.id = '';
    p.title = '   ';
    (p as unknown as { level: string }).level = 'N9';
    p.durationMinutes = 0;
    const paths = validatePaper(p).map((i) => i.path);
    expect(paths).toContain('id');
    expect(paths).toContain('title');
    expect(paths).toContain('level');
    expect(paths).toContain('durationMinutes');
  });
});

describe('validatePaper — question rejections', () => {
  it('rejects a question with fewer than 2 options', () => {
    const p = clone(validPaper());
    p.sections[0].questions[0].options = ['only-one'];
    const issues = validatePaper(p);
    expect(issues.some((i) => i.path.endsWith('.options'))).toBe(true);
  });

  it('rejects an answerIndex out of range', () => {
    const p = clone(validPaper());
    p.sections[0].questions[0].answerIndex = 5;
    const issues = validatePaper(p);
    expect(issues.some((i) => i.path.endsWith('.answerIndex'))).toBe(true);
  });

  it('rejects a negative answerIndex', () => {
    const p = clone(validPaper());
    p.sections[0].questions[0].answerIndex = -1;
    expect(validatePaper(p).some((i) => i.path.endsWith('.answerIndex'))).toBe(true);
  });

  it('rejects a non-integer answerIndex', () => {
    const p = clone(validPaper());
    (p.sections[0].questions[0] as unknown as { answerIndex: number }).answerIndex = 1.5;
    expect(validatePaper(p).some((i) => i.path.endsWith('.answerIndex'))).toBe(true);
  });

  it('rejects an empty prompt', () => {
    const p = clone(validPaper());
    p.sections[0].questions[0].prompt = '';
    expect(validatePaper(p).some((i) => i.path.endsWith('.prompt'))).toBe(true);
  });

  it('rejects a duplicate question id within a paper', () => {
    const p = clone(validPaper());
    p.sections[0].questions[1].id = 'q1';
    const issues = validatePaper(p);
    expect(issues.some((i) => i.message.includes('duplicate question id'))).toBe(true);
  });
});

describe('validatePaper — reading/passage rejections', () => {
  it('rejects a passageId that does not resolve to a passage in its section', () => {
    const p = clone(validPaper());
    p.sections[1].questions[0].passageId = 'does-not-exist';
    const issues = validatePaper(p);
    expect(issues.some((i) => i.path.endsWith('.passageId'))).toBe(true);
  });

  it('rejects a passageId set on a non-reading section', () => {
    const p = clone(validPaper());
    p.sections[0].questions[0].passageId = 'p1';
    const issues = validatePaper(p);
    expect(issues.some((i) => i.message.includes('only valid inside a reading section'))).toBe(true);
  });
});

describe('validatePapers — cross-paper rules', () => {
  it('flags duplicate paper ids', () => {
    const a = validPaper();
    const b = validPaper();
    const issues = validatePapers([a, b]);
    expect(issues.some((i) => i.message.includes('duplicate paper id'))).toBe(true);
  });

  it('validateAll reports ok for a list of valid, uniquely-id papers', () => {
    const a = validPaper();
    const b = { ...validPaper(), id: 'test-2' };
    const result = validateAll([a, b]);
    expect(result.ok).toBe(true);
    expect(result.issues).toEqual([]);
  });
});
