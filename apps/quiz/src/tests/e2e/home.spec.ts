import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true', { timeout: 20000 });
  });

  test('renders the editorial continue-learning workspace', async ({ page }) => {
    await expect(page).toHaveTitle(/Smart Quiz/);
    await expect(page.getByRole('heading', { level: 1, name: /Tiếp tục|Bắt đầu/ })).toBeVisible();
    await expect(page.locator('.continue-action')).toHaveCount(1);
  });

  test('shows learning paths and the study library', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Chọn cấp độ tiếng Nhật/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Thư viện học tập/ })).toBeVisible();
    await expect(page.getByText('Minna no Nihongo').first()).toBeVisible();
    await expect(page.getByText(/Kanji/).first()).toBeVisible();
    await expect(page.getByText(/Bảng chữ cái/).first()).toBeVisible();
  });

  test('legacy lesson URL reaches the redesigned lesson workspace', async ({ page }) => {
    await page.goto('/lesson/1');
    await expect(page.locator('html')).toHaveAttribute('data-hydrated', 'true', { timeout: 20000 });
    await expect(page.getByText('Bài 1').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Luyện tập' })).toBeVisible();
  });
});
