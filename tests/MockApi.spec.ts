import { test, expect } from '@playwright/test';

test("mocks a get users API", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/users?page=2', async route => {
      const json = [{ name: 'My mocked user', id: 21 }];
      await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://reqres.in/');
  
    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('My mocked user')).toBeVisible();
  });