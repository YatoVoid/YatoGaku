/**
 * Exam data-access API (stable contract between pipeline data + UI).
 *
 * The pipeline owns `papers.ts` (regenerates it). The UI imports ONLY from
 * this module. Keep these signatures stable so both sides stay decoupled.
 */

import type { ExamPaper, ExamPaperSummary, JlptLevel } from '$lib/types/exam';
import { papers } from './papers';

function toSummary(p: ExamPaper): ExamPaperSummary {
  return {
    id: p.id,
    level: p.level,
    title: p.title,
    durationMinutes: p.durationMinutes,
    questionCount: p.sections.reduce((n, s) => n + s.questions.length, 0),
    sectionTypes: p.sections.map((s) => s.type),
    source: p.source
  };
}

/** All paper summaries (metadata only — cheap to list). */
export function getPaperSummaries(): ExamPaperSummary[] {
  return papers.map(toSummary);
}

/** Paper summaries filtered by JLPT level. */
export function getPaperSummariesByLevel(level: JlptLevel): ExamPaperSummary[] {
  return papers.filter((p) => p.level === level).map(toSummary);
}

/** Levels that currently have at least one paper, ordered N5→N1. */
export function getAvailableLevels(): JlptLevel[] {
  const order: JlptLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];
  const present = new Set(papers.map((p) => p.level));
  return order.filter((l) => present.has(l));
}

/** Full paper by id, or undefined if not found. */
export function loadPaper(id: string): ExamPaper | undefined {
  return papers.find((p) => p.id === id);
}
