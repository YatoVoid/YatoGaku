/**
 * Central export for all stores
 */

export {
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
} from './quiz';

export {
  progressStore,
  updateLessonProgress,
  updateSettings,
  clearProgress,
  exportProgress,
  importProgress
} from './progress';

export {
  uiStore,
  toggleDarkMode,
  openModal,
  closeModal,
  toggleVirtualKeyboard,
  showVirtualKeyboard,
  hideVirtualKeyboard,
  updateBreadcrumbs
} from './ui';
