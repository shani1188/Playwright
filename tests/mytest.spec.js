import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('netflix');
  await page.locator('div').filter({ hasText: /^netflix$/ }).first().click();
  await page.locator('a').filter({ hasText: ':05 2:05 Now playing' }).click();
  await page.locator('#inline-preview-player video').click();
  await page.locator('#movie_player video').click();
  await page.getByRole('button', { name: 'like this video along with' }).click();
  await page.locator('#movie_player video').click();
  await page.locator('#movie_player video').press('Spacebar')
});