import { test, expect } from '@playwright/test';

const url = 'http://localhost:3000';

test('user cannot login without validating email', async ({ page }) => {
  await page.goto(url);
  await page.goto(`${url}/login`);
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('unverified@email.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('testpassword');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto(`${url}/verify`);
  await Promise.all([page.waitForNavigation(), page.goto(`${url}/mygarden`)]);
  const currentUrl = await page.url();
  expect(currentUrl).toBe(`${url}/login`);
});
