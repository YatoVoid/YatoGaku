/**
 * E2E Tests: Flashcard Quiz
 * Tests flashcard rendering, flip, navigation, and quiz completion
 */

import { test, expect } from '@playwright/test';

test.describe('Flashcard Quiz', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quiz/flashcard?lesson=1');
    await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true', { timeout: 20000 });
  });

  test('should display shared quiz frame progress', async ({ page }) => {
    await expect(page.locator('.quiz-frame progress')).toBeVisible();
  });

  test('should display a flashcard', async ({ page }) => {
    await expect(page.locator('.flashcard')).toBeVisible();
  });

  test('should display Japanese text on front', async ({ page }) => {
    await expect(page.locator('.fc-japanese')).toBeVisible();
  });

  test('should show flip hint', async ({ page }) => {
    // Flip hint reworded to "Space to flip · F1 to speak"
    await expect(page.getByText(/Space to flip/)).toBeVisible();
  });

  test('should flip card on click', async ({ page }) => {
    const card = page.locator('.flashcard');
    await card.click();
    await expect(card).toHaveClass(/flipped/);
  });

  test('should flip card on Space key', async ({ page }) => {
    const card = page.locator('.flashcard');
    await card.focus();
    await page.keyboard.press('Space');
    await expect(card).toHaveClass(/flipped/);
  });

  test('should display Correct and Wrong buttons', async ({ page }) => {
    await expect(page.getByText(/Correct/)).toBeVisible();
    await expect(page.getByText(/Wrong/)).toBeVisible();
  });

  test('should advance to next question on Correct click', async ({ page }) => {
    // Get initial progress text
    const progressText = await page.locator('.progress-text').textContent();

    // "Correct" button now uses a lucide icon (no ✓ glyph)
    await page.getByRole('button', { name: 'Correct' }).click();

    // Wait for next question - progress should change
    await page.waitForTimeout(500);
    const newProgressText = await page.locator('.progress-text').textContent();
    expect(newProgressText).not.toBe(progressText);
  });

  test('should display speak button', async ({ page }) => {
    await expect(page.getByText(/Speak/)).toBeVisible();
  });
});
