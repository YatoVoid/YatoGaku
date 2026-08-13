/**
 * Exam (mock JLPT paper) types — shared contract between:
 *  - the build-time fetch pipeline (`scripts/fetch-exams/`) that produces data
 *  - the runtime exam UI (`src/routes/exams/`) that consumes it
 *
 * Papers are static data (committed under `src/lib/data/exams/`), so the
 * exam feature stays fully offline-first — no runtime backend.
 */

export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

/** JLPT-style section kinds. `reading`/`listening` are optional per paper. */
export type ExamSectionType = 'vocab' | 'grammar' | 'reading' | 'listening';

/** A reading passage shared by one or more questions in a `reading` section. */
export interface ExamPassage {
  id: string;
  /** Full passage text (Japanese). May contain newlines. */
  text: string;
  /** Optional translation/notes (not shown until review). */
  translation?: string;
}

export interface ExamQuestion {
  id: string;
  /** Question stem. May contain a blank marker `____` for cloze/grammar items. */
  prompt: string;
  /** For reading questions: id of the `ExamPassage` this question refers to. */
  passageId?: string;
  /** Multiple-choice options (typically 3–4). */
  options: string[];
  /** Index into `options` of the correct answer (0-based). */
  answerIndex: number;
  /** Optional explanation, shown only in review. */
  explanation?: string;
  /** Optional audio asset URL for listening items (static/CDN path). */
  audioUrl?: string;
}

export interface ExamSection {
  type: ExamSectionType;
  /** Display title, e.g. "語彙 (Vocabulary)". */
  title: string;
  instructions?: string;
  /** Passages referenced by this section's questions (reading sections). */
  passages?: ExamPassage[];
  questions: ExamQuestion[];
}

/** Provenance — REQUIRED so every paper is attributable + license-traceable. */
export interface ExamSource {
  /** Human-readable source name. */
  name: string;
  /** Origin URL, if applicable. */
  url?: string;
  /** License / usage terms (e.g. "CC-BY-4.0", "official sample", "original"). */
  license?: string;
  /** ISO date the paper was fetched/authored. */
  fetchedAt?: string;
}

export interface ExamPaper {
  /** Stable unique id, e.g. "n5-sample-1". Used in routes + localStorage keys. */
  id: string;
  level: JlptLevel;
  title: string;
  source: ExamSource;
  /** Total time limit in minutes. */
  durationMinutes: number;
  sections: ExamSection[];
}

/** Lightweight index entry (paper metadata without the full question payload). */
export interface ExamPaperSummary {
  id: string;
  level: JlptLevel;
  title: string;
  durationMinutes: number;
  questionCount: number;
  sectionTypes: ExamSectionType[];
  source: ExamSource;
}

/** A user's saved attempt (persisted to localStorage; syncable later via Wave 6). */
export interface ExamAttempt {
  paperId: string;
  level: JlptLevel;
  startedAt: number;
  finishedAt?: number;
  /** questionId -> selected option index. */
  answers: Record<string, number>;
  /** Computed at submit time. */
  result?: ExamResult;
}

export interface ExamSectionResult {
  type: ExamSectionType;
  correct: number;
  total: number;
}

export interface ExamResult {
  correct: number;
  total: number;
  /** Percentage 0–100, rounded. */
  scorePercent: number;
  /** JLPT papers pass at ~60% overall (plus per-section minimums in real exams). */
  passed: boolean;
  sections: ExamSectionResult[];
  /** Seconds spent, if timing was tracked. */
  durationSeconds?: number;
}
