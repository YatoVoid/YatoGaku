/**
 * TypeScript type definitions for Smart Quiz data structures
 */

// Vocabulary Types
export interface VocabItem {
  japanese: string;
  kana: string;
  vietnamese: string;
  english: string;
  type: 'main' | 'additional' | 'kanji' | 'supplementary';
  example?: string;
  audio?: string;
}

// Grammar Types
export interface GrammarExample {
  japanese: string;
  vietnamese: string;
  english: string;
  type?: 'main' | 'additional';
}

export interface GrammarItem {
  pattern: string;
  vietnamese: string;
  english: string;
  type: 'main' | 'additional';
  explanation: string;
  examples: GrammarExample[];
  category?: string;
  function?: string;
  lesson?: number;
}

// Conversation & Dialogue Types
export interface DialogueLine {
  speaker: string;
  japanese: string;
  kana: string;
  vietnamese: string;
}

export interface ConversationPattern {
  id: string;
  title: string;           // "Tự giới thiệu" / "Hỏi đường"
  titleJp: string;         // "自己紹介" / "道を聞く"
  level: string;           // "N5" / "N4" / etc.
  situation: string;       // "Gặp người mới lần đầu"
  patterns: {
    japanese: string;       // "はじめまして、〜です。よろしくお願いします。"
    kana: string;
    vietnamese: string;
    memoryTip: string;      // "Nhớ: hajimemashite = 'bắt đầu gặp' → lần đầu gặp"
  }[];
  dialogue: DialogueLine[];
  culturalNote?: string;    // "Người Nhật cúi đầu khi chào"
}

// Lesson Data
export interface LessonData {
  lessonNumber: number;
  title: string;
  vocabulary: VocabItem[];
  grammar: GrammarItem[];
}

// HSK Data (Chinese)
export interface HSKVocabItem {
  chinese: string;
  pinyin: string;
  vietnamese: string;
  english: string;
  type: 'main' | 'additional';
  example?: string;
  audio?: string;
}

export interface HSKLessonData {
  group: number;
  title: string;
  vocabulary: HSKVocabItem[];
}

// Alphabet Data
export interface AlphabetChar {
  kana: string;
  romaji: string;
  row: string;
  col: string;
}

export interface AlphabetCombo {
  kana: string;
  romaji: string;
  row: string;
  base: string;
  small: string;
}

export interface AlphabetData {
  rows: (AlphabetChar | null)[][];
  combo: AlphabetCombo[];
}

// Counter Data
export interface CounterReading {
  number: number;
  form: string;
  kana: string;
  romaji: string;
  irregular?: boolean;
  note?: string;
}

export interface CounterType {
  counter: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  lesson: number | null;
  readings: CounterReading[];
  example: {
    japanese: string;
    vietnamese: string;
  };
}

export interface NumberData {
  number: number;
  kanji: string;
  kana: string;
  romaji: string;
  alt?: {
    kana: string;
    romaji: string;
  };
  note?: string;
}

// Kanji Types
export interface KanjiExampleWord {
  word: string;       // "会社"
  kana: string;       // "かいしゃ"
  meaning: string;    // "company"
  vietnamese: string; // "công ty"
}

export interface KanjiItem {
  character: string;    // "会"
  onyomi: string[];     // ["カイ"]
  kunyomi: string[];    // ["あ.う"]
  strokeCount: number;
  jlpt: number;         // 5 or 4
  vietnamese: string;   // "hội"
  english: string;      // "meet, association"
  examples: KanjiExampleWord[];
}

export interface KanjiLessonData {
  lessonNumber: number;
  title: string;
  kanji: KanjiItem[];
}

// Quiz Types
export type QuizMode = 'flashcard' | 'multiple-choice' | 'typing';
export type QuizDirection = 'ja-vi' | 'vi-ja' | 'ja-en' | 'en-ja' | 'ja-romaji' | 'vi-romaji';

export interface QuizQuestion {
  id: string;
  question: string;
  answer: string;
  options?: string[]; // For multiple choice
  item: VocabItem | HSKVocabItem;
}

export interface QuizState {
  mode: QuizMode;
  direction: QuizDirection;
  courseId: string; // 'n5' | 'n4' - using string for flexibility
  lessonNumber: number;
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  wrongItems: QuizQuestion[];
  startTime: number;
  endTime?: number;
}

// Progress Tracking
export interface ItemProgress {
  itemId: string;
  correctCount: number;
  wrongCount: number;
  lastReviewed: number; // timestamp
  masteryLevel: number; // 0-5
}

export interface LessonProgress {
  lessonNumber: number;
  vocabProgress: Record<string, ItemProgress>;
  grammarProgress: Record<string, ItemProgress>;
  lastStudied: number;
  totalQuizzes: number;
}

export interface ProgressState {
  lessons: Record<number, LessonProgress>;
  hsk: Record<number, LessonProgress>;
  settings: {
    defaultDirection: QuizDirection;
    autoPlay: boolean;
    showEnglish: boolean;
  };
}

// UI State
export interface UIState {
  darkMode: boolean;
  showVirtualKeyboard: boolean;
  activeModal: string | null;
  breadcrumbs: string[];
}

// Navigation
export interface NavigationState {
  history: string[];
  currentScreen: string;
}

// Grammar Reference Types
export interface GrammarMetadata {
  pattern: string;
  category: string;
  function: string;
  lesson: number;
  related?: string[];
  comparisons?: GrammarComparison[];
}

export interface GrammarComparison {
  patterns: string[];
  title: string;
  vietnamese: string;
  english: string;
  explanation: string;
  examples: GrammarExample[];
}

// Search/Filter Types
export interface FilterOptions {
  lesson?: number[];
  category?: string[];
  function?: string[];
  searchTerm?: string;
}

export type ViewMode = 'lesson' | 'category' | 'function' | 'comparisons';
