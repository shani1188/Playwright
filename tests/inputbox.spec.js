import {test,expect} from '@playwright/test'

test('Input box',async({page})=>{

    await page.goto('https://www.nopcommerce.com/en/register')
    
    await expect(page.locator('#FirstName')).toBeEditable()
    await expect(page.locator('#FirstName')).toBeEnabled()
    await expect(page.locator('#FirstName')).toBeVisible()
    await expect(page.locator('#FirstName')).toBeEmpty()
    await page.fill('#FirstName','Shahrukh')

    await page.waitForTimeout(5000)
})