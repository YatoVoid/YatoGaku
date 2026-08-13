/**
 * Unit tests for the fixture source adapter
 * (`scripts/fetch-exams/sources/fixture.js`).
 *
 * Covers the parse logic (answer-string → answerIndex, passage-key resolution,
 * id generation, malformed rejection) AND the end-to-end guarantee that every
 * committed fixture parses into a paper the validator accepts — with all five
 * JLPT levels N5→N1 represented.
 */

import { describe, it, expect } from 'vitest';
import {
  parseFixture,
  createFixtureAdapter
} from '../../../scripts/fetch-exams/sources/fixture.js';
import { validatePaper } from '../../../scripts/fetch-exams/validate.js';
import type { JlptLevel } from '$lib/types/exam';

describe('parseFixture — authoring → ExamPaper', () => {
  it('computes answerIndex from an answer STRING', () => {
    const paper = parseFixture({
      id: 'x-1',
      level: 'N5',
      title: 'X',
      durationMinutes: 10,
      sections: [
        {
          type: 'vocab',
          title: 'V',
          questions: [{ prompt: 'pick b', options: ['a', 'b', 'c'], answer: 'b' }]
        }
      ]
    });
    expect(paper.sections[0].questions[0].answerIndex).toBe(1);
  });

  it('accepts a numeric answer as a direct index', () => {
    const paper = parseFixture({
      id: 'x-2',
      level: 'N5',
      title: 'X',
      durationMinutes: 10,
      sections: [{ type: 'vocab', title: 'V', questions: [{ prompt: 'q', options: ['a', 'b'], answer: 0 }] }]
    });
    expect(paper.sections[0].questions[0].answerIndex).toBe(0);
  });

  it('generates stable question ids when omitted', () => {
    const paper = parseFixture({
      id: 'gen-1',
      level: 'N4',
      title: 'G',
      durationMinutes: 10,
      sections: [{ type: 'vocab', title: 'V', questions: [{ prompt: 'q', options: ['a', 'b'], answer: 'a' }] }]
    });
    expect(paper.sections[0].questions[0].id).toBe('gen-1-s1-q1');
  });

  it('resolves a reading question passage KEY to the generated global passageId', () => {
    const paper = parseFixture({
      id: 'read-1',
      level: 'N3',
      title: 'R',
      durationMinutes: 10,
      sections: [
        {
          type: 'reading',
          title: 'Reading',
          passages: [{ key: 'p1', text: 'some passage' }],
          questions: [{ prompt: 'q', options: ['a', 'b'], answer: 'a', passage: 'p1' }]
        }
      ]
    });
    const generatedId = paper.sections[0].passages?.[0].id;
    expect(generatedId).toBe('read-1-s1-p1');
    expect(paper.sections[0].questions[0].passageId).toBe(generatedId);
  });

  it('preserves explicit ids, answerIndex and source', () => {
    const paper = parseFixture({
      id: 'keep-1',
      level: 'N2',
      title: 'K',
      durationMinutes: 10,
      source: { name: 'Explicit', license: 'CC-BY-4.0', fetchedAt: '2026-01-01' },
      sections: [
        {
          type: 'vocab',
          title: 'V',
          questions: [{ id: 'custom-q', prompt: 'q', options: ['a', 'b'], answerIndex: 1 }]
        }
      ]
    });
    expect(paper.source).toEqual({ name: 'Explicit', license: 'CC-BY-4.0', fetchedAt: '2026-01-01' });
    expect(paper.sections[0].questions[0].id).toBe('custom-q');
    expect(paper.sections[0].questions[0].answerIndex).toBe(1);
  });

  it('throws when an answer STRING matches no option', () => {
    expect(() =>
      parseFixture({
        id: 'bad-1',
        level: 'N5',
        title: 'B',
        durationMinutes: 10,
        sections: [{ type: 'vocab', title: 'V', questions: [{ prompt: 'q', options: ['a', 'b'], answer: 'z' }] }]
      })
    ).toThrow(/not one of the options/);
  });

  it('throws when options are missing', () => {
    expect(() =>
      parseFixture({
        id: 'bad-2',
        level: 'N5',
        title: 'B',
        durationMinutes: 10,
        sections: [{ type: 'vocab', title: 'V', questions: [{ prompt: 'q', answer: 'a' }] }]
      })
    ).toThrow(/missing "options"/);
  });
});

describe('createFixtureAdapter — committed fixtures', () => {
  it('lists at least one paper per JLPT level (N5→N1)', async () => {
    const adapter = createFixtureAdapter();
    const refs = await adapter.fetchPaperList();
    const levels = new Set<JlptLevel>(refs.map((r) => r.level));
    for (const lvl of ['N5', 'N4', 'N3', 'N2', 'N1'] as JlptLevel[]) {
      expect(levels.has(lvl)).toBe(true);
    }
  });

  it('parses every committed fixture into a paper the validator accepts', async () => {
    const adapter = createFixtureAdapter();
    const refs = await adapter.fetchPaperList();
    expect(refs.length).toBeGreaterThanOrEqual(5);
    for (const ref of refs) {
      const paper = await adapter.fetchAndParse(ref);
      const issues = validatePaper(paper);
      expect(issues, `fixture ${ref.id} should be valid: ${JSON.stringify(issues)}`).toEqual([]);
    }
  });

  it('preserves the seed paper n5-sample-1', async () => {
    const adapter = createFixtureAdapter();
    const refs = await adapter.fetchPaperList();
    const seedRef = refs.find((r) => r.id === 'n5-sample-1');
    expect(seedRef).toBeDefined();
    const paper = await adapter.fetchAndParse(seedRef!);
    expect(paper.level).toBe('N5');
    expect(paper.sections.map((s) => s.type)).toEqual(['vocab', 'grammar', 'reading']);
  });
});
