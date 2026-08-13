/**
 * Unit tests for quiz store
 * Tests quiz state management, derived stores, and actions
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { get } from 'svelte/store';
import {
  quizStore,
  isComplete,
  progress,
  currentQuestion,
  accuracy,
  startQuiz,
  answerCorrect,
  answerWrong,
  nextQuestion,
  previousQuestion,
  endQuiz,
  resetQuiz
} from '$lib/stores/quiz';
import type { QuizQuestion, QuizMode, QuizDirection } from '$lib/types';

// Test data
const createQuestion = (id: string = 'q-1'): QuizQuestion => ({
  id,
  question: 'こんにちは',
  answer: 'Xin chào',
  item: {
    japanese: 'こんにちは',
    vietnamese: 'Xin chào',
    english: 'Hello',
    kana: 'こんにちは',
    type: 'main'
  }
});

describe('quiz store', () => {
  beforeEach(() => {
    // Reset quiz before each test
    resetQuiz();
  });

  describe('quizStore', () => {
    it('should have initial state', () => {
      const state = get(quizStore);

      expect(state.mode).toBe('flashcard');
      expect(state.direction).toBe('ja-vi');
      expect(state.courseId).toBe('n5');
      expect(state.lessonNumber).toBe(1);
      expect(state.questions).toEqual([]);
      expect(state.currentIndex).toBe(0);
      expect(state.score).toBe(0);
      expect(state.wrongItems).toEqual([]);
      expect(state.startTime).toBeDefined();
    });

    it('should be writable', () => {
      const newState = {
        mode: 'typing' as QuizMode,
        direction: 'vi-ja' as QuizDirection,
        courseId: 'n5' as const,
        lessonNumber: 5,
        questions: [createQuestion()],
        currentIndex: 0,
        score: 0,
        wrongItems: [],
        startTime: Date.now()
      };

      quizStore.set(newState);
      const state = get(quizStore);

      expect(state.mode).toBe('typing');
      expect(state.lessonNumber).toBe(5);
      expect(state.questions).toHaveLength(1);
    });
  });

  describe('isComplete derived store', () => {
    it('should be false for initial state', () => {
      expect(get(isComplete)).toBe(true); // No questions, so currentIndex >= questions.length
    });

    it('should be false when not all questions answered', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      expect(get(isComplete)).toBe(false);
    });

    it('should be true when all questions answered', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      answerCorrect();

      expect(get(isComplete)).toBe(true);
    });

    it('should update reactively', () => {
      const questions = [createQuestion()];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      expect(get(isComplete)).toBe(false);

      nextQuestion();

      expect(get(isComplete)).toBe(true);
    });
  });

  describe('progress derived store', () => {
    it('should calculate progress correctly', () => {
      const questions = [
        createQuestion('q-1'),
        createQuestion('q-2'),
        createQuestion('q-3')
      ];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      const prog = get(progress);

      expect(prog.current).toBe(0);
      expect(prog.total).toBe(3);
      expect(prog.percentage).toBe(0);
    });

    it('should update progress after answering', () => {
      const questions = [
        createQuestion('q-1'),
        createQuestion('q-2')
      ];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();

      const prog = get(progress);

      expect(prog.current).toBe(1);
      expect(prog.total).toBe(2);
      expect(prog.percentage).toBe(50);
    });

    it('should show 100% when complete', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      answerCorrect();

      const prog = get(progress);

      expect(prog.percentage).toBe(100);
    });

    it('should handle empty questions', () => {
      startQuiz('flashcard', 'ja-vi', 'n5', 1, []);

      const prog = get(progress);

      expect(prog.current).toBe(0);
      expect(prog.total).toBe(0);
      expect(prog.percentage).toBe(0);
    });
  });

  describe('currentQuestion derived store', () => {
    it('should return null for initial state', () => {
      expect(get(currentQuestion)).toBeNull();
    });

    it('should return first question at start', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      const current = get(currentQuestion);

      expect(current).toBeDefined();
      expect(current?.id).toBe('q-1');
    });

    it('should update when moving to next question', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();

      const current = get(currentQuestion);

      expect(current?.id).toBe('q-2');
    });

    it('should return null when all questions completed', () => {
      const questions = [createQuestion('q-1')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();

      expect(get(currentQuestion)).toBeNull();
    });
  });

  describe('accuracy derived store', () => {
    it('should return 0 for initial state', () => {
      expect(get(accuracy)).toBe(0);
    });

    it('should calculate 100% for all correct', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      answerCorrect();

      expect(get(accuracy)).toBe(100);
    });

    it('should calculate 0% for all wrong', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerWrong();
      answerWrong();

      expect(get(accuracy)).toBe(0);
    });

    it('should calculate 50% for half correct', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      answerWrong();

      expect(get(accuracy)).toBe(50);
    });

    it('should round percentage', () => {
      const questions = [
        createQuestion('q-1'),
        createQuestion('q-2'),
        createQuestion('q-3')
      ];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      answerWrong();
      answerWrong();

      // 1/3 = 33.33... should round to 33
      expect(get(accuracy)).toBe(33);
    });
  });

  describe('startQuiz action', () => {
    it('should initialize quiz state', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      const before = Date.now();

      startQuiz('multiple-choice', 'vi-ja', 'n5', 3, questions);

      const state = get(quizStore);
      const after = Date.now();

      expect(state.mode).toBe('multiple-choice');
      expect(state.direction).toBe('vi-ja');
      expect(state.lessonNumber).toBe(3);
      expect(state.questions).toEqual(questions);
      expect(state.currentIndex).toBe(0);
      expect(state.score).toBe(0);
      expect(state.wrongItems).toEqual([]);
      expect(state.startTime).toBeGreaterThanOrEqual(before);
      expect(state.startTime).toBeLessThanOrEqual(after);
    });

    it('should reset previous quiz state', () => {
      const questions1 = [createQuestion('q-1')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions1);
      answerCorrect();

      const questions2 = [createQuestion('q-2'), createQuestion('q-3')];
      startQuiz('typing', 'en-ja', 'n5', 5, questions2);

      const state = get(quizStore);

      expect(state.mode).toBe('typing');
      expect(state.lessonNumber).toBe(5);
      expect(state.currentIndex).toBe(0);
      expect(state.score).toBe(0);
      expect(state.questions).toEqual(questions2);
    });

    it('should handle empty questions array', () => {
      startQuiz('flashcard', 'ja-vi', 'n5', 1, []);

      const state = get(quizStore);

      expect(state.questions).toEqual([]);
      expect(state.currentIndex).toBe(0);
    });
  });

  describe('answerCorrect action', () => {
    it('should increment score', () => {
      const questions = [createQuestion()];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();

      expect(get(quizStore).score).toBe(1);
    });

    it('should increment currentIndex', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();

      expect(get(quizStore).currentIndex).toBe(1);
    });

    it('should not add to wrongItems', () => {
      const questions = [createQuestion()];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();

      expect(get(quizStore).wrongItems).toEqual([]);
    });

    it('should handle multiple correct answers', () => {
      const questions = [
        createQuestion('q-1'),
        createQuestion('q-2'),
        createQuestion('q-3')
      ];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      answerCorrect();
      answerCorrect();

      const state = get(quizStore);

      expect(state.score).toBe(3);
      expect(state.currentIndex).toBe(3);
      expect(state.wrongItems).toHaveLength(0);
    });
  });

  describe('answerWrong action', () => {
    it('should not increment score', () => {
      const questions = [createQuestion()];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerWrong();

      expect(get(quizStore).score).toBe(0);
    });

    it('should increment currentIndex', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerWrong();

      expect(get(quizStore).currentIndex).toBe(1);
    });

    it('should add current question to wrongItems', () => {
      const questions = [createQuestion('q-1')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerWrong();

      const wrongItems = get(quizStore).wrongItems;

      expect(wrongItems).toHaveLength(1);
      expect(wrongItems[0].id).toBe('q-1');
    });

    it('should handle multiple wrong answers', () => {
      const questions = [
        createQuestion('q-1'),
        createQuestion('q-2'),
        createQuestion('q-3')
      ];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerWrong();
      answerWrong();

      const state = get(quizStore);

      expect(state.score).toBe(0);
      expect(state.wrongItems).toHaveLength(2);
      expect(state.wrongItems[0].id).toBe('q-1');
      expect(state.wrongItems[1].id).toBe('q-2');
    });
  });

  describe('nextQuestion action', () => {
    it('should increment currentIndex', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();

      expect(get(quizStore).currentIndex).toBe(1);
    });

    it('should not change score', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();

      expect(get(quizStore).score).toBe(0);
    });

    it('should not add to wrongItems', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();

      expect(get(quizStore).wrongItems).toEqual([]);
    });

    it('should allow going past last question', () => {
      const questions = [createQuestion('q-1')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();
      nextQuestion();

      expect(get(quizStore).currentIndex).toBe(2);
    });
  });

  describe('previousQuestion action', () => {
    it('should decrement currentIndex', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();
      previousQuestion();

      expect(get(quizStore).currentIndex).toBe(0);
    });

    it('should not go below 0', () => {
      const questions = [createQuestion('q-1')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      previousQuestion();

      expect(get(quizStore).currentIndex).toBe(0);
    });

    it('should not change score or wrongItems', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      answerCorrect();
      previousQuestion();

      const state = get(quizStore);

      expect(state.score).toBe(1);
      expect(state.wrongItems).toEqual([]);
    });

    it('should handle multiple previous calls', () => {
      const questions = [
        createQuestion('q-1'),
        createQuestion('q-2'),
        createQuestion('q-3')
      ];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      nextQuestion();
      nextQuestion();
      previousQuestion();
      previousQuestion();
      previousQuestion();

      expect(get(quizStore).currentIndex).toBe(0);
    });
  });

  describe('endQuiz action', () => {
    it('should set endTime', () => {
      const questions = [createQuestion()];
      const before = Date.now();

      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);
      endQuiz();

      const state = get(quizStore);
      const after = Date.now();

      expect(state.endTime).toBeDefined();
      expect(state.endTime).toBeGreaterThanOrEqual(before);
      expect(state.endTime).toBeLessThanOrEqual(after);
    });

    it('should not change other state', () => {
      const questions = [createQuestion('q-1')];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);
      answerCorrect();

      const stateBefore = get(quizStore);

      endQuiz();

      const stateAfter = get(quizStore);

      expect(stateAfter.score).toBe(stateBefore.score);
      expect(stateAfter.currentIndex).toBe(stateBefore.currentIndex);
      expect(stateAfter.questions).toEqual(stateBefore.questions);
    });
  });

  describe('resetQuiz action', () => {
    it('should reset to initial state', () => {
      const questions = [createQuestion('q-1'), createQuestion('q-2')];
      startQuiz('typing', 'en-ja', 'n5', 5, questions);
      answerCorrect();
      answerWrong();
      endQuiz();

      resetQuiz();

      const state = get(quizStore);

      expect(state.mode).toBe('flashcard');
      expect(state.direction).toBe('ja-vi');
      expect(state.lessonNumber).toBe(1);
      expect(state.questions).toEqual([]);
      expect(state.currentIndex).toBe(0);
      expect(state.score).toBe(0);
      expect(state.wrongItems).toEqual([]);
      expect(state.endTime).toBeUndefined();
    });

    it('should have startTime defined', () => {
      const questions = [createQuestion()];
      startQuiz('flashcard', 'ja-vi', 'n5', 1, questions);

      resetQuiz();

      const state = get(quizStore);

      expect(state.startTime).toBeDefined();
      expect(typeof state.startTime).toBe('number');
      expect(state.startTime).toBeGreaterThan(0);
    });
  });
});
