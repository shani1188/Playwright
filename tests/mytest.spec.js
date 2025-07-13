import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dyoutube%26oq%3Dyoutube%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI4NDdqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DpRNTaKL9LbXe2roPpqah-Qw&q=EgRzuk3KGKanzMIGIjCzVZJJ4dWRI9OMXc4Ktiiqmy7WI60yC_dgp6oBqKF6-azq23G9qpdcVyCB7oxqIYsyAVJaAUM');
  await page.locator('iframe[name="a-7l2kiat55n7t"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-7l2kiat55n7t"]').contentFrame().locator('td:nth-child(2)').first().click();
  await page.locator('iframe[name="c-7l2kiat55n7t"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-7l2kiat55n7t"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-7l2kiat55n7t"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-7l2kiat55n7t"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'YouTube YouTube https://www.' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('stranger things');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByTitle('Stranger Things 5 | Date').click();
  await page.locator('#movie_player video').click();
});