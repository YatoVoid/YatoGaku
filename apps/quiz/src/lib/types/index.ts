/**
 * Central export for all TypeScript types
 */

export type {
  // Course types
  CourseId,
  CourseMetadata,
  LessonMetadata,
  Course
} from './course';

export type {
  // Lesson types
  VocabItem,
  GrammarItem,
  GrammarExample,
  LessonData,

  // HSK types
  HSKVocabItem,
  HSKLessonData,

  // Alphabet types
  AlphabetChar,

  // Counter types
  CounterType,
  CounterReading,
  NumberData,
  AlphabetData,
  AlphabetCombo,

  // Kanji types
  KanjiExampleWord,
  KanjiItem,
  KanjiLessonData,

  // Quiz types
  QuizMode,
  QuizDirection,
  QuizQuestion,
  QuizState,

  // Progress types
  ItemProgress,
  LessonProgress,
  ProgressState,

  // UI types
  UIState,
  NavigationState
} from './lesson';

export type {
  // Grammar types
  GrammarMetadata,
  GrammarPattern,
  GrammarCategory,
  GrammarFunction,
  GrammarComparison,
  ComparisonTable,
  ComparisonRow,
  ComparisonExample,
  GrammarFilters,
  GrammarViewMode,
  GroupedPatterns
} from './grammar';

export type {
  // HSK types
  HSKWord,
  HSKGroup,
  HSKGroupId
} from './hsk';

export { HSK_GROUPS } from './hsk';
