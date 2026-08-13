// Quiz mode constants
// Note: QuizMode and QuizDirection types are defined in $lib/types
export const QUIZ_MODES = ['flashcard', 'multiple-choice', 'typing'] as const;

// Quiz direction constants
export const QUIZ_DIRECTIONS = [
  'ja-vi',   // Japanese → Vietnamese
  'vi-ja',   // Vietnamese → Japanese
  'ja-en',   // Japanese → English
  'en-ja'    // English → Japanese
] as const;

// Questions per quiz mode
export const QUESTIONS_PER_QUIZ = {
  flashcard: 10,
  'multiple-choice': 10,
  typing: 5
} as const;
