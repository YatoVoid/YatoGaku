/**
 * E2E Tests: Exam ("làm đề") flow
 * Smoke: open /exams -> start n5-sample-1 -> answer -> submit -> see result.
 *
 * The runner exposes `data-ready="true"` once hydrated; we wait for it before
 * interacting so clicks aren't lost to the (dev-mode) hydration race.
 */

import { test, expect, type Page } from '@playwright/test';

async function startRunner(page: Page) {
  await expect(page.locator('[data-ready="true"]')).toBeVisible();
  await page.getByRole('button', { name: 'Bắt đầu làm bài' }).click();
  await expect(page.getByRole('timer')).toBeVisible();
}

test.describe('Exam flow', () => {
  test('lists papers grouped by level', async ({ page }) => {
    await page.goto('/exams');
    await expect(page.getByRole('heading', { name: 'Luyện đề JLPT' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: /^N5/ })).toBeVisible();
    await expect(page.locator('[data-paper-id="n5-sample-1"]')).toBeVisible();
  });

  test('runs the sample paper end-to-end and shows a result', async ({ page }) => {
    await page.goto('/exams');

    // Open the sample paper from the list.
    await page.locator('[data-paper-id="n5-sample-1"]').click();

    // Intro screen, then start.
    await expect(page.getByRole('heading', { level: 1, name: 'N5 — Đề mẫu 1' })).toBeVisible();
    await startRunner(page);

    // Walk every section, answering the first option of each question.
    for (let section = 0; section < 3; section++) {
      await page.locator('.exam-question').first().waitFor();
      const questions = page.locator('.exam-question');
      const count = await questions.count();
      for (let q = 0; q < count; q++) {
        await questions.nth(q).locator('.option').first().click();
      }
      const next = page.getByRole('button', { name: 'Phần sau' });
      if (await next.isVisible()) {
        await next.click();
      }
    }

    // Submit from the last section + confirm.
    await page.getByRole('button', { name: 'Nộp bài', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: 'Nộp bài', exact: true }).click();

    // Result screen with score + review.
    await expect(page.getByTestId('exam-result')).toBeVisible();
    await expect(page.getByText('PASS').or(page.getByText('FAIL'))).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Xem lại bài làm' })).toBeVisible();

    // "Làm lại" returns to the intro screen.
    await page.getByRole('button', { name: 'Làm lại' }).click();
    await expect(page.getByRole('button', { name: 'Bắt đầu làm bài' })).toBeVisible();
  });

  test('answering all correct passes at 100%', async ({ page }) => {
    await page.goto('/exams/n5-sample-1');
    await startRunner(page);

    // Correct option indices for n5-sample-1 (paper order): [0,1] | [0,2] | [0,1].
    const correct = [
      [0, 1],
      [0, 2],
      [0, 1]
    ];
    for (let section = 0; section < correct.length; section++) {
      await page.locator('.exam-question').first().waitFor();
      const questions = page.locator('.exam-question');
      for (let q = 0; q < correct[section].length; q++) {
        await questions.nth(q).locator('.option').nth(correct[section][q]).click();
      }
      const next = page.getByRole('button', { name: 'Phần sau' });
      if (await next.isVisible()) await next.click();
    }

    await page.getByRole('button', { name: 'Nộp bài', exact: true }).click();
    await page.getByRole('dialog').getByRole('button', { name: 'Nộp bài', exact: true }).click();

    await expect(page.getByTestId('exam-result')).toBeVisible();
    await expect(page.getByText(/6\/6 câu đúng/)).toBeVisible();
    await expect(page.getByText('Đạt!')).toBeVisible();
    await expect(page.getByText('PASS')).toBeVisible();
  });

  test('reading section shows its passage above the questions', async ({ page }) => {
    await page.goto('/exams/n5-sample-1');
    await startRunner(page);
    // Jump to the reading section via its chip.
    await page.getByRole('tab', { name: 'Đọc hiểu' }).click();
    await expect(page.locator('.passage').first()).toBeVisible();
    await expect(page.getByText(/まいあさ/)).toBeVisible();
  });

  test('unknown paper id shows a not-found message', async ({ page }) => {
    await page.goto('/exams/does-not-exist');
    await expect(page.getByText('Không tìm thấy đề thi')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Về danh sách đề' })).toBeVisible();
  });
});
