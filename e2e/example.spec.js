const { test, expect } = require('@playwright/test');

test('example.com 제목 확인', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/틀린제목/);
});