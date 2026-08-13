/**
 * E2E Tests: Typing Quiz
 * Tests text input, answer submission, feedback, and virtual keyboard
 */

import { test, expect } from '@playwright/test';

test.describe('Typing Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quiz/typing?lesson=1');
    await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true', { timeout: 20000 });
  });

  test('should display shared quiz frame progress', async ({ page }) => {
    await expect(page.locator('.quiz-frame progress')).toBeVisible();
  });

  test('should display question card', async ({ page }) => {
    await expect(page.locator('.quiz-question-card')).toBeVisible();
  });

  test('should display the answer prompt label', async ({ page }) => {
    // Label is now direction-agnostic: "Type the answer:" (ja-vi answer is Vietnamese)
    await expect(page.getByText('Type the answer:')).toBeVisible();
  });

  test('should display text input', async ({ page }) => {
    await expect(page.getByPlaceholder('Type your answer...')).toBeVisible();
  });

  test('should have submit button initially disabled', async ({ page }) => {
    await expect(page.getByText('Submit Answer')).toBeDisabled();
  });

  test('should enable submit button after typing', async ({ page }) => {
    await page.getByPlaceholder('Type your answer...').fill('test');
    await expect(page.getByText('Submit Answer')).toBeEnabled();
  });

  test('should show feedback after submitting', async ({ page }) => {
    await page.getByPlaceholder('Type your answer...').fill('test');
    await page.getByText('Submit Answer').click();

    // Should show either Correct or Wrong feedback
    const feedback = page.locator('.feedback');
    await expect(feedback).toBeVisible();
  });

  test('should submit on Enter key', async ({ page }) => {
    const input = page.getByPlaceholder('Type your answer...');
    await input.fill('test');
    await input.press('Enter');

    const feedback = page.locator('.feedback');
    await expect(feedback).toBeVisible();
  });

  test('should disable input after answering', async ({ page }) => {
    await page.getByPlaceholder('Type your answer...').fill('test');
    await page.getByText('Submit Answer').click();

    await expect(page.getByPlaceholder('Type your answer...')).toBeDisabled();
  });

  test('should display keyboard toggle button', async ({ page }) => {
    // Keyboard toggle now uses a lucide icon exposed via aria-label
    await expect(page.getByRole('button', { name: 'Toggle keyboard' })).toBeVisible();
  });

  test('should display hint button', async ({ page }) => {
    await expect(page.getByText(/Show Romaji Hint/)).toBeVisible();
  });

  test('should show hint when hint button is clicked', async ({ page }) => {
    await page.getByText(/Show Romaji Hint/).click();

    // Hint button should disappear
    await expect(page.getByText(/Show Romaji Hint/)).not.toBeVisible();
  });

  test('should display speak button', async ({ page }) => {
    await expect(page.getByText(/Speak/)).toBeVisible();
  });
});
