/**
 * Component tests for ExamQuestionView — active selection + review rendering.
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/svelte/svelte5';
import userEvent from '@testing-library/user-event';
import ExamQuestionViewComponent from '$lib/components/exam/ExamQuestionView.svelte';
import type { ExamQuestion } from '$lib/types/exam';

// `@testing-library/svelte`'s `render` overload prefers the legacy class
// `Constructor` signature; runes (function) components need a cast. Runtime is
// unaffected — this is a typings-only mismatch.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ExamQuestionView = ExamQuestionViewComponent as any;

const question: ExamQuestion = {
  id: 'q1',
  prompt: 'わたし ____ がくせい です。',
  options: ['は', 'を', 'に', 'へ'],
  answerIndex: 0,
  explanation: 'は marks the topic.'
};

describe('ExamQuestionView', () => {
  it('renders the prompt and all options', () => {
    render(ExamQuestionView, { props: { question, number: 1, selected: undefined } });
    expect(screen.getByText(question.prompt)).toBeInTheDocument();
    for (const opt of question.options) {
      expect(screen.getByText(opt)).toBeInTheDocument();
    }
  });

  it('calls onselect with the chosen option index', async () => {
    const user = userEvent.setup();
    const onselect = vi.fn();
    render(ExamQuestionView, { props: { question, number: 1, selected: undefined, onselect } });

    // Options render as buttons; click the second one ("を").
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[1]);

    expect(onselect).toHaveBeenCalledWith(1);
  });

  it('marks the correct answer and the user mistake in review mode', () => {
    // User chose index 1 (wrong); correct is 0.
    render(ExamQuestionView, {
      props: { question, number: 1, selected: 1, review: true }
    });
    // Explanation is revealed only in review.
    expect(screen.getByText(/marks the topic/)).toBeInTheDocument();
    // Verdict mentions the user's wrong pick + the right answer.
    expect(screen.getByText(/Bạn chọn 2, đáp án đúng là 1/)).toBeInTheDocument();
  });

  it('shows "chưa trả lời" in review when unanswered', () => {
    render(ExamQuestionView, {
      props: { question, number: 1, selected: undefined, review: true }
    });
    expect(screen.getByText(/Chưa trả lời/)).toBeInTheDocument();
  });

  it('does not trigger onselect in review mode', async () => {
    const user = userEvent.setup();
    const onselect = vi.fn();
    render(ExamQuestionView, {
      props: { question, number: 1, selected: 0, review: true, onselect }
    });
    const buttons = screen.getAllByRole('button');
    await user.click(buttons[0]);
    expect(onselect).not.toHaveBeenCalled();
  });
});
