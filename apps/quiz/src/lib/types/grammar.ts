/**
 * TypeScript type definitions for Grammar Reference system
 */

// Grammar Pattern Metadata
export interface GrammarMetadata {
  categories?: string[];
  functions?: string[];
  jlptLevel?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  relatedPatterns?: string[];
  tips?: string;
  mnemonics?: string;
  commonMistakes?: string;
  usageNotes?: string;
}

// Grammar Pattern (extends base GrammarItem with metadata)
export interface GrammarPattern {
  pattern: string;
  vietnamese: string;
  english: string;
  type?: 'main' | 'additional';
  explanation?: string;
  examples?: Array<{
    japanese: string;
    vietnamese: string;
    english?: string;
  }>;
  lessonNumber?: number;
  lessonTitle?: string;
  meta?: GrammarMetadata | null;
}

// Grammar Category
export interface GrammarCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description?: string;
}

// Grammar Function
export interface GrammarFunction {
  id?: string;
  name: string;
  nameEn: string;
}

// Comparison Table Row
export interface ComparisonRow {
  aspect?: string;
  meaning?: string;
  example?: string;
  [key: string]: string | undefined;
}

// Comparison Table
export interface ComparisonTable {
  headers: string[];
  rows: ComparisonRow[];
}

// Comparison Example
export interface ComparisonExample {
  pattern: string;
  japanese: string;
  vietnamese: string;
  english?: string;
  explanation?: string;
}

// Grammar Comparison
export interface GrammarComparison {
  id: string;
  title: string;
  vietnamese: string;
  english?: string;
  patterns: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  jlptLevel?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  table?: ComparisonTable;
  tips?: string;
  examples?: ComparisonExample[];
  commonMistakes?: string[];
}

// Filter State
export interface GrammarFilters {
  search: string;
  jlpt: string;
  category: string;
  function: string;
}

// View Mode
export type GrammarViewMode = 'lesson' | 'category' | 'function' | 'comparisons';

// Grouped Patterns
export interface GroupedPatterns {
  [key: string]: {
    lessonNumber?: number;
    lessonTitle?: string;
    category?: GrammarCategory;
    function?: GrammarFunction;
    patterns: GrammarPattern[];
  };
}
