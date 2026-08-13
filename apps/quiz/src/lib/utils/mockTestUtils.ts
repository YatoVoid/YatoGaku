/**
 * JLPT Mock Test utilities
 * Generate mixed vocab + grammar questions and calculate JLPT-style scoring
 */

import { getCourse } from '$lib/data/courses';
import { shuffleArray, generateMCOptions } from '$lib/utils/quizUtils';
import type { CourseId } from '$lib/types/course';
import type { VocabItem, GrammarItem } from '$lib/types';

export interface MockTestQuestion {
  id: string;
  question: string;
  answer: string;
  options: string[];
  section: 'vocab' | 'grammar';
}

export interface JLPTScoreInput {
  vocabCorrect: number;
  vocabTotal: number;
  grammarCorrect: number;
  grammarTotal: number;
}

export interface JLPTScoreResult {
  vocabScore: number;
  grammarScore: number;
  totalScore: number;
  vocabPercentage: number;
  grammarPercentage: number;
  totalPercentage: number;
  pass: boolean;
}

const QUESTIONS_COUNT = 30;
const SECTION_MIN_PERCENTAGE = 32; // ~19/60 = 31.7%
const PASS_TOTAL_PERCENTAGE = 44;  // ~80/180 = 44.4%

export function generateMockTest(courseId: string): MockTestQuestion[] {
  const course = getCourse(courseId as CourseId);
  if (!course) return [];

  const allLessons = course.getAllLessons();
  const allVocab = allLessons.flatMap(l => l.vocabulary);
  const allGrammar = allLessons.flatMap(l => l.grammar);

  if (allVocab.length === 0) return [];

  // Split: ~60% vocab, ~40% grammar
  const vocabCount = Math.min(Math.ceil(QUESTIONS_COUNT * 0.6), allVocab.length);
  const grammarCount = Math.min(QUESTIONS_COUNT - vocabCount, allGrammar.length);

  // Generate vocab MC questions
  const shuffledVocab = shuffleArray([...allVocab]).slice(0, vocabCount);
  const vocabMock: MockTestQuestion[] = shuffledVocab.map((item: VocabItem, i: number) => {
    const question = item.japanese || item.kana;
    const answer = item.vietnamese;
    const others = shuffleArray(allVocab.filter(v => v.vietnamese !== answer))
      .slice(0, 3)
      .map(v => v.vietnamese);
    return {
      id: `mock-v-${i}`,
      question,
      answer,
      options: shuffleArray([...others, answer]),
      section: 'vocab' as const
    };
  });

  // Generate grammar MC questions (pattern → meaning)
  const shuffledGrammar = shuffleArray([...allGrammar]).slice(0, grammarCount);
  const grammarMock: MockTestQuestion[] = shuffledGrammar.map((g: GrammarItem, i: number) => {
    const others = shuffleArray(allGrammar.filter(x => x.pattern !== g.pattern))
      .slice(0, 3)
      .map(x => x.vietnamese);
    return {
      id: `mock-g-${i}`,
      question: g.pattern,
      answer: g.vietnamese,
      options: shuffleArray([...others, g.vietnamese]),
      section: 'grammar' as const
    };
  });

  return shuffleArray([...vocabMock, ...grammarMock]);
}

export function calculateJLPTScore(input: JLPTScoreInput): JLPTScoreResult {
  const vocabPct = input.vocabTotal > 0 ? Math.round((input.vocabCorrect / input.vocabTotal) * 100) : 0;
  const grammarPct = input.grammarTotal > 0 ? Math.round((input.grammarCorrect / input.grammarTotal) * 100) : 0;
  const totalItems = input.vocabTotal + input.grammarTotal;
  const totalCorrect = input.vocabCorrect + input.grammarCorrect;
  const totalPct = totalItems > 0 ? Math.round((totalCorrect / totalItems) * 100) : 0;

  const vocabScore = Math.round(vocabPct * 0.6);
  const grammarScore = Math.round(grammarPct * 0.6);
  const totalScore = vocabScore + grammarScore;

  const pass = totalPct >= PASS_TOTAL_PERCENTAGE
    && vocabPct >= SECTION_MIN_PERCENTAGE
    && grammarPct >= SECTION_MIN_PERCENTAGE;

  return { vocabScore, grammarScore, totalScore, vocabPercentage: vocabPct, grammarPercentage: grammarPct, totalPercentage: totalPct, pass };
}
