/**
 * Quiz State Store
 * Manages quiz session state (questions, score, progress)
 */

import { writable, derived } from 'svelte/store';
import type { QuizState, QuizQuestion, QuizMode, QuizDirection } from '$lib/types';
import type { CourseId } from '$lib/types/course';
import { recordStudySession } from '$lib/utils/achievementUtils';

// Initial state
const initialState: QuizState = {
  mode: 'flashcard',
  direction: 'ja-vi',
  courseId: 'n5',
  lessonNumber: 1,
  questions: [],
  currentIndex: 0,
  score: 0,
  wrongItems: [],
  startTime: Date.now()
};

// Create the store
export const quizStore = writable<QuizState>(initialState);

// Derived stores (computed values)
export const isComplete = derived(
  quizStore,
  $quiz => $quiz.currentIndex >= $quiz.questions.length
);

export const progress = derived(
  quizStore,
  $quiz => ({
    current: $quiz.currentIndex,
    total: $quiz.questions.length,
    percentage: $quiz.questions.length > 0
      ? Math.round(($quiz.currentIndex / $quiz.questions.length) * 100)
      : 0
  })
);

export const currentQuestion = derived(
  quizStore,
  $quiz => $quiz.questions[$quiz.currentIndex] || null
);

export const accuracy = derived(
  quizStore,
  $quiz => {
    const total = $quiz.score + $quiz.wrongItems.length;
    return total > 0 ? Math.round(($quiz.score / total) * 100) : 0;
  }
);

// Actions
export function startQuiz(
  mode: QuizMode,
  direction: QuizDirection,
  courseId: CourseId,
  lessonNumber: number,
  questions: QuizQuestion[]
) {
  quizStore.set({
    mode,
    direction,
    courseId,
    lessonNumber,
    questions,
    currentIndex: 0,
    score: 0,
    wrongItems: [],
    startTime: Date.now()
  });
}

export function answerCorrect() {
  quizStore.update(state => ({
    ...state,
    score: state.score + 1,
    currentIndex: state.currentIndex + 1
  }));
}

export function answerWrong() {
  quizStore.update(state => {
    const currentQ = state.questions[state.currentIndex];
    return {
      ...state,
      wrongItems: [...state.wrongItems, currentQ],
      currentIndex: state.currentIndex + 1
    };
  });
}

export function nextQuestion() {
  quizStore.update(state => ({
    ...state,
    currentIndex: state.currentIndex + 1
  }));
}

export function previousQuestion() {
  quizStore.update(state => ({
    ...state,
    currentIndex: Math.max(0, state.currentIndex - 1)
  }));
}

export function endQuiz() {
  quizStore.update(state => ({
    ...state,
    endTime: Date.now()
  }));
  recordStudySession();
}

export function resetQuiz() {
  quizStore.set(initialState);
}
