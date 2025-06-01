import {test,expect} from '@playwright/test'

test('Built-in Locators', async({page})=>{

    page.setDefaultTimeout(45000); // sets default to 15 seconds for all actions

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').fill('Admin')
    // await page.fill('[name="username"]','Admin12')
    await page.fill('[placeholder="Password"]','admin123')
    await page.getByRole('button',{type:'submit'}).click()
    //await page.click()
    await expect(await page.getByText('manda user')).toBeVisible()
})