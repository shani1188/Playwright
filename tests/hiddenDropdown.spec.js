import {test,expect} from '@playwright/test'

test('Hidden DropDowns', async({page})=>{

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await page.locator('[name="username"]').fill('Admin')
   await page.locator('[name="password"]').fill('admin123')
   await page.locator('[type="submit"]').click()
   await page.getByRole('link', { name: 'PIM' }).click()
   //await page.locator('a', { hasText: 'PIM' })  is eq to cypress: cy.contains('a','PIM')
   await page.locator('.oxd-select-text-input',{hasText:'-- Select --'}).click()


   await page.waitForTimeout(5000)

})