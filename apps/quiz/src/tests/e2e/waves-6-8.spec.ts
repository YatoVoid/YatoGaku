import { test, expect } from '@playwright/test';

async function hydrated(page: import('@playwright/test').Page, path: string) {
  await page.goto(path);
  await expect(page.locator('main')).toBeVisible({ timeout: 20000 });
}

test.describe.serial('UI/UX Waves 6–8 contracts', () => {
  test('review empty state leads back into learning', async ({ page }) => {
    await hydrated(page, '/review');
    await expect(page.getByRole('button', { name: /Go to Courses|Khóa học/ })).toBeVisible();
  });

  test('an interrupted exam can be resumed', async ({ page }) => {
    await hydrated(page, '/exams/n5-sample-1');
    await expect(page.locator('.runner')).toHaveAttribute('data-ready', 'true', { timeout: 20000 });
    await page.getByRole('button', { name: 'Bắt đầu làm bài' }).click();
    await expect(page.getByRole('timer')).toBeVisible();
    await page.reload();
    await expect(page.getByRole('button', { name: 'Tiếp tục bài đang làm' })).toBeVisible();
  });

  test('stats always offers a next learning action', async ({ page }) => {
    await page.addInitScript(() => localStorage.clear());
    await hydrated(page, '/stats');
    await expect(page.getByRole('link', { name: 'Chọn bài để học' })).toBeVisible();
  });

  test('settings explains local offline persistence', async ({ page }) => {
    await hydrated(page, '/settings');
    await expect(page.getByText(/lưu cục bộ và hoạt động ngoại tuyến/)).toBeVisible();
  });

  test('premium beta does not imply a purchase', async ({ page }) => {
    await hydrated(page, '/premium');
    await expect(page.getByText(/Không có thanh toán/)).toBeVisible();
  });

  test('supporting utility remains usable at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 740 });
    await hydrated(page, '/counters');
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
});
