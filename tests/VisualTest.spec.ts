import { test, expect } from '@playwright/test';

const url = 'https://playwright.dev/';

test('example test', async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveScreenshot();
});