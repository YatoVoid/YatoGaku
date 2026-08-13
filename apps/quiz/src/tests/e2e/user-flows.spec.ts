/**
 * E2E Tests: Complete User Flows
 * Tests end-to-end user journeys through the application
 */

import { test, expect } from '@playwright/test';

test.describe('User Flow: Quiz Pages Load Correctly', () => {
  test('should load flashcard quiz for lesson 1', async ({ page }) => {
    await page.goto('/quiz/flashcard?lesson=1');
    await expect(page.locator('.flashcard')).toBeVisible();
    await expect(page.locator('.quiz-frame progress')).toBeVisible();
  });

  test('should load multiple choice quiz for lesson 1', async ({ page }) => {
    await page.goto('/quiz/multiple-choice?lesson=1');
    await expect(page.locator('.mc-option').first()).toBeVisible();
    await expect(page.locator('.quiz-question-card')).toBeVisible();
  });

  test('should load typing quiz for lesson 1', async ({ page }) => {
    await page.goto('/quiz/typing?lesson=1');
    await expect(page.getByPlaceholder('Type your answer...')).toBeVisible();
    await expect(page.getByText('Submit Answer')).toBeVisible();
  });

  test('should redirect to home for invalid lesson in quiz', async ({ page }) => {
    await page.goto('/quiz/flashcard?lesson=999');
    // Home is `/` on the dev server and `/2026-Smart-Quiz/` on the production
    // build (GitHub Pages base path) — assert "landed on home root" in a way that
    // holds for both. The hero-heading check below is the substantive assertion.
    await expect(page).toHaveURL(/\/(2026-Smart-Quiz\/)?$/, { timeout: 10000 });
    // Home redesigned — assert the hero heading instead of old "Choose a Lesson"
    await expect(page.getByRole('heading', { level: 1, name: /Learn/i })).toBeVisible();
  });
});

test.describe('User Flow: Complete a Flashcard Quiz', () => {
  test('should complete flashcard quiz and see results', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('/quiz/flashcard?lesson=1');

    // Answer all questions by clicking Correct
    let attempts = 0;
    while (attempts < 100 && !page.url().includes('/results')) {
      attempts++;
      const correctBtn = page.getByRole('button', { name: 'Correct' });
      if (await correctBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await correctBtn.click();
        await page.waitForTimeout(500);
      } else {
        await page.waitForTimeout(300);
      }
    }

    // Should be on results page (redesigned: perfect score header = "⭐ Hoàn hảo!")
    await expect(page).toHaveURL(/\/results/, { timeout: 10000 });
    await expect(page.getByText(/Hoàn hảo/)).toBeVisible();
  });

  test('results page should show score details', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('/quiz/flashcard?lesson=1');

    let attempts = 0;
    while (attempts < 100 && !page.url().includes('/results')) {
      attempts++;
      const correctBtn = page.getByRole('button', { name: 'Correct' });
      if (await correctBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await correctBtn.click();
        await page.waitForTimeout(500);
      } else {
        await page.waitForTimeout(300);
      }
    }

    // Redesigned results page: Score/Grade/Time stat labels (no colon) + percentage ring
    await expect(page.getByText(/Hoàn hảo/)).toBeVisible();
    await expect(page.getByText('Score', { exact: true })).toBeVisible();
    await expect(page.getByText('Grade', { exact: true })).toBeVisible();
    await expect(page.getByText('Time', { exact: true })).toBeVisible();
    // exact:true avoids the hidden SVG <title> "Quiz score: 100%" — match the ring-center value
    await expect(page.getByText('100%', { exact: true })).toBeVisible();
  });

  test('results page should show action buttons', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('/quiz/flashcard?lesson=1');

    let attempts = 0;
    while (attempts < 100 && !page.url().includes('/results')) {
      attempts++;
      const correctBtn = page.getByRole('button', { name: 'Correct' });
      if (await correctBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await correctBtn.click();
        await page.waitForTimeout(500);
      } else {
        await page.waitForTimeout(300);
      }
    }

    // Action buttons renamed: "Retry All" (perfect score → no retry-wrong button)
    await expect(page.getByText(/Retry All/)).toBeVisible();
    await expect(page.getByText(/Back to Lesson/)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
  });
});

test.describe('User Flow: Different Lessons', () => {
  test('should load quiz for lesson 2', async ({ page }) => {
    await page.goto('/quiz/flashcard?lesson=2');
    await expect(page.locator('.flashcard')).toBeVisible();
  });

  test('should load quiz for lesson 5', async ({ page }) => {
    await page.goto('/quiz/multiple-choice?lesson=5');
    await expect(page.locator('.mc-option').first()).toBeVisible();
  });

  test('should show different lesson info', async ({ page }) => {
    // /lesson/3 redirects to /course/n5/lesson/3 — "Bài 3" in badge + breadcrumb
    await page.goto('/lesson/3');
    await expect(page.getByText('Bài 3').first()).toBeVisible();
  });
});
