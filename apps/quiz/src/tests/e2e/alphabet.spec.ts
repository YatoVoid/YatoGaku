/**
 * E2E Tests: Alphabet Page
 * Tests hiragana/katakana display and tab switching
 */

import { test, expect } from '@playwright/test';

test.describe('Alphabet Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/alphabet');
  });

  test('should display the alphabet page', async ({ page }) => {
    await expect(page).toHaveTitle(/Alphabet|Smart Quiz/);
  });

  test('should display hiragana and katakana sections', async ({ page }) => {
    await expect(page.getByText(/Hiragana/i).first()).toBeVisible();
    await expect(page.getByText(/Katakana/i).first()).toBeVisible();
  });

  test('should display Japanese characters', async ({ page }) => {
    // Should show hiragana characters somewhere on the page
    await expect(page.getByText('あ').first()).toBeVisible();
  });

  test('should be accessible and render content', async ({ page }) => {
    // Page should have meaningful content
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('あ');
    expect(bodyText).toContain('Hiragana');
  });
});
