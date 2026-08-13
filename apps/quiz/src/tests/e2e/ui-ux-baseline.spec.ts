import { test, expect } from '@playwright/test';

test.describe('UI/UX redesign baseline contracts', () => {
  test.describe.configure({ mode: 'serial' });
  test('desktop shell exposes stable navigation and course context', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/course/n5/lesson/1');

    const navigation = page.locator('aside nav');
    await expect(navigation).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'Học' })).toHaveAttribute('aria-current', 'page');
    await expect(page.locator('.course-context')).toBeVisible();
    await expect(page.locator('.breadcrumbs')).toBeVisible();
  });

  test('mobile shell keeps navigation reachable without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto('/courses');

    await expect(page.getByRole('navigation', { name: 'Điều hướng chính trên di động' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Điều hướng chính', exact: true })).toBeHidden();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  });

  test('quiz routes use reduced chrome and restore focus after navigation', async ({ page }) => {
    await page.goto('/quiz/multiple-choice?course=n5&lesson=1&direction=ja-vi');

    await expect(page.getByRole('button', { name: 'Thoát phiên học' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Điều hướng chính', exact: true })).toBeHidden();
    await expect(page.getByRole('navigation', { name: 'Điều hướng chính trên di động' })).toBeHidden();
    await page.locator('.settings-action').click();
    await expect.poll(() => page.evaluate(() => ({ active: document.activeElement?.tagName, hash: location.hash, url: location.href }))).toEqual({ active: 'BODY', hash: '', url: 'http://localhost:5173/settings' });
    await expect(page.locator('.route-announcer')).toHaveAttribute('aria-live', 'polite');
  });

  test('connection status reacts to browser offline events', async ({ page }) => {
    const pageErrors: string[] = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    await page.goto('/');
    await expect(page.locator('.connection')).toBeVisible();
    await expect.poll(async () => ({ hydrated: await page.locator('.app-shell').getAttribute('data-hydrated'), pageErrors }), { timeout: 15_000 })
      .toEqual({ hydrated: 'true', pageErrors: [] });
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'onLine', { configurable: true, get: () => false });
      window.dispatchEvent(new Event('offline'));
    });
    await expect(page.locator('.connection.offline')).toBeVisible();
  });

  test('settings expose stable labeled controls', async ({ page }) => {
    await page.goto('/settings');

    const autoSpeak = page.getByLabel('Auto-speak on new card');
    await expect(autoSpeak).toBeVisible();
    await expect(page.getByLabel('Show English translations')).toBeVisible();
    await expect(page.getByLabel('Default Direction')).toBeVisible();
  });

  test('empty review queue gives a useful next action', async ({ page }) => {
    await page.goto('/review');

    await expect(page.getByRole('heading', { name: 'All caught up!' })).toBeVisible({ timeout: 10_000 });
    await expect(page.getByRole('button', { name: 'Go to Courses' })).toBeVisible();
  });

  test('F1 invokes speech synthesis in a vocabulary quiz', async ({ page }) => {
    await page.addInitScript(() => {
      class MockUtterance {
        text: string;
        lang = '';
        rate = 1;
        pitch = 1;

        constructor(text: string) {
          this.text = text;
        }
      }

      Object.defineProperty(window, 'SpeechSynthesisUtterance', {
        configurable: true,
        value: MockUtterance
      });
      Object.defineProperty(window, 'speechSynthesis', {
        configurable: true,
        value: {
          cancel() {},
          speak(utterance: MockUtterance) {
            (window as typeof window & { __spoken?: string[] }).__spoken ??= [];
            (window as typeof window & { __spoken: string[] }).__spoken.push(utterance.text);
          }
        }
      });
    });

    await page.goto('/quiz/multiple-choice?course=n5&lesson=1&direction=ja-vi');
    await expect(page.locator('.quiz-question-card')).toBeVisible({ timeout: 15_000 });
    await page.keyboard.press('F1');

    const spoken = await page.evaluate(() =>
      (window as typeof window & { __spoken?: string[] }).__spoken ?? []
    );
    expect(spoken.length).toBeGreaterThan(0);
  });

});
