/**
 * E2E Tests: Multiple Choice Quiz
 * Tests option rendering, selection, feedback, and keyboard shortcuts
 */

import { test, expect } from '@playwright/test';

test.describe('Multiple Choice Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quiz/multiple-choice?lesson=1');
    await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true', { timeout: 20000 });
  });

  test('should display shared quiz frame progress', async ({ page }) => {
    await expect(page.locator('.quiz-frame progress')).toBeVisible();
  });

  test('should display question card', async ({ page }) => {
    await expect(page.locator('.quiz-question-card')).toBeVisible();
  });

  test('should display "What is the meaning of" label', async ({ page }) => {
    await expect(page.getByText('What is the meaning of:')).toBeVisible();
  });

  test('should display Japanese question text', async ({ page }) => {
    await expect(page.locator('.question-text')).toBeVisible();
  });

  test('should display 4 option buttons', async ({ page }) => {
    const options = page.locator('.mc-option');
    await expect(options).toHaveCount(4);
  });

  test('should display option numbers 1-4', async ({ page }) => {
    await expect(page.getByText('1.')).toBeVisible();
    await expect(page.getByText('2.')).toBeVisible();
    await expect(page.getByText('3.')).toBeVisible();
    await expect(page.getByText('4.')).toBeVisible();
  });

  test('should show keyboard hint', async ({ page }) => {
    // Hint reworded to "Press 1-4 to choose · F1 to speak"
    await expect(page.getByText(/Press 1-4 to choose/)).toBeVisible();
  });

  test('should show feedback after selecting an option', async ({ page }) => {
    const firstOption = page.locator('.mc-option').first();
    await firstOption.click();

    // Should show either Correct or Wrong feedback
    const feedback = page.locator('.feedback');
    await expect(feedback).toBeVisible();
  });

  test('should disable options after answering', async ({ page }) => {
    const firstOption = page.locator('.mc-option').first();
    await firstOption.click();

    // All options should be disabled
    const options = page.locator('.mc-option');
    for (let i = 0; i < await options.count(); i++) {
      await expect(options.nth(i)).toBeDisabled();
    }
  });

  test('should select option via keyboard shortcut 1', async ({ page }) => {
    // Wait for options to be fully loaded
    await expect(page.locator('.mc-option').first()).toBeVisible();
    await page.keyboard.press('1');

    const feedback = page.locator('.feedback');
    await expect(feedback).toBeVisible({ timeout: 5000 });
  });

  test('should hide keyboard hint after answering', async ({ page }) => {
    await page.keyboard.press('1');

    await expect(page.getByText(/Press 1-4 on your keyboard/)).not.toBeVisible();
  });

  test('should display speak button', async ({ page }) => {
    await expect(page.getByText(/Speak/)).toBeVisible();
  });
});
