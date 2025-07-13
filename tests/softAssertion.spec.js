import {test,expect} from '@playwright/test'

test('Soft Assertions', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
  
    //Hard assertions
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    const logo = await page.locator('#nava img')
    await expect(logo).toBeVisible()

    // Soft Assertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    const logo1 = await page.locator('#nava img')
    await expect.soft(logo1).toBeVisible()
})