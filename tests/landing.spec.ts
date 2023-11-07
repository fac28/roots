import { test, expect } from '@playwright/test';

test('landing page contains title: Roots', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Roots' }).click();
  await expect(page.locator('text=Roots')).toHaveText('Roots');
});
