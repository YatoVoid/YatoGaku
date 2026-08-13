import { expect, test } from '@playwright/test';

test.describe('UI/UX Waves 3–5 contracts', () => {
  test.describe.configure({ mode: 'serial' });

  test('all learning quiz families render the shared frame', async ({ page }) => {
    test.setTimeout(120_000);
    for (const path of [
      '/quiz/multiple-choice?course=n5&lesson=1&direction=ja-vi',
      '/hsk/a/quiz/mc?direction=chinese-vi',
      '/kanji/1/quiz/mc?direction=kanji-vi',
      '/course/n5/lesson/1/grammar-quiz/mixed'
    ]) {
      await page.goto(path);
      await expect(page.locator('.quiz-frame')).toBeVisible({ timeout: 25_000 });
      await expect(page.locator('.shortcut-bar')).toBeVisible();
    }
  });

  test('focused quiz exit asks for confirmation', async ({ page }) => {
    await page.goto('/quiz/multiple-choice?course=n5&lesson=1&direction=ja-vi');
    const exit = page.locator('button[aria-label="Thoát phiên học"]');
    await expect(exit).toBeVisible({ timeout: 15_000 });
    await expect(page.locator('.app-shell')).toHaveAttribute('data-hydrated', 'true', { timeout: 15_000 });
    await exit.click();
    await expect(page.getByRole('alertdialog')).toBeVisible();
  });

  test('home prioritizes one continue-learning action', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.home-workspace')).toBeVisible({ timeout: 15_000 });
    await expect(page.locator('.continue-action')).toHaveCount(1);
    await expect(page.locator('.path-list')).toBeVisible();
  });

  test('lesson hub connects content and practice without a card grid', async ({ page }) => {
    await page.goto('/course/n5/lesson/1');
    await expect(page.locator('.lesson-workspace')).toBeVisible({ timeout: 15_000 });
    await expect(page.locator('.next-step')).toBeVisible();
    await expect(page.locator('.study-list')).toBeVisible();
    await expect(page.locator('.practice-list')).toBeVisible();
  });

  test('Kanji reference uses a three-pane immersive desk on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/kanji/1/reference');
    await expect(page.locator('.kanji-desk')).toBeVisible({ timeout: 15_000 });
    await expect(page.locator('.lesson-timeline')).toBeVisible();
    await expect(page.locator('.glyph-focus')).toBeVisible();
    await expect(page.locator('.study-panel')).toBeVisible();
    const columns = await page.locator('.kanji-desk').evaluate((element) => getComputedStyle(element).gridTemplateColumns);
    expect(columns.split(' ').length).toBeGreaterThanOrEqual(3);
  });

  test('Kanji desk recomposes into a mobile sequence without overflow', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto('/kanji/1/reference');
    await expect(page.locator('.kanji-desk')).toBeVisible({ timeout: 15_000 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
    await expect(page.locator('.hero-glyph')).toBeVisible();
  });
});
