import { test, expect } from '@playwright/test';

// npx playrwright codegen           command use to record script 
// npx playwright codegen -o tests/mytest.spec.js    automatically record script, creates file and paste the code there 
// npx playwright codegen --device "iPhone 13"
// npx playwright codegen --viewport-size "1280,720"
test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://stealthportal.io/');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('waseem.ullah@coasttech.ai');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Allah@1.');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.locator('button[name="password"]').click();
  await page.locator('div').filter({ hasText: /^Forgot Password\?$/ }).click();
  await page.getByRole('checkbox', { name: 'Stay Signed-In' }).check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('waseem.ullah@coasttech.ai');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Visitors & Views' }).click();
  await page.getByRole('row', { name: 'Jun 02, 2025 Jun 02, 2025 12:23 PM Annie Ellis anniepetersia@gmail.com Visits:' }).getByTestId('VisibilityOutlinedIcon').click();
  await page.getByRole('link', { name: 'Visitors & Views' }).click();
  await page.locator('#dealershipId').click();
  await page.locator('#dealershipId').fill('dat');
  await page.getByRole('option', { name: 'Datics RV Store' }).click();
  await page.getByRole('link', { name: 'Lead Management' }).click();
  await page.getByRole('row', { name: 'Jun 01 2025 12:00 AM Darlene' }).getByTestId('NoteAltOutlinedIcon').click();
  await page.locator('#dealStatusInternal').click();
  await page.getByRole('option', { name: 'Active' }).click();
  await page.getByRole('dialog', { name: 'LEAD NOTES' }).getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'Cold' }).click();
  await page.locator('#description').click();
  await page.locator('#description').fill('Test notes');
  await page.getByRole('button', { name: 'Save' }).click();
});