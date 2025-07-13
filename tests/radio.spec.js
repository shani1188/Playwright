import {test,expect} from '@playwright/test'

test('radio button',async({page})=>{

    await page.goto('https://www.nopcommerce.com/en/register')
    

    //await page.locator('#Newsletter').check()
    await page.check('#Newsletter')
    await expect(await page.locator('#Newsletter')).toBeChecked()

    await expect(await page.locator('#Newsletter').isChecked()).toBeTruthy()
    await page.waitForTimeout(5000)
})