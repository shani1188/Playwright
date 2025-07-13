import {test,expect} from '@playwright/test'

test('Check box',async({page})=>{

    await page.goto('https://www.nopcommerce.com/en/register')
    
    //single check
    await page.locator('#Newsletter').check()

    //await page.check('#Newsletter') another method to check the check box

    await expect(page.locator('#Newsletter')).toBeChecked()
    await expect(page.locator('#Newsletter').isChecked()).toBeTruthy()

    await page.waitForTimeout(5000)

    // Multiple checkboxes

    const checkboxLocator=[
        "//input[@id='monday'] and @type='checkbox'",
        "//input[@id='saturday'] and @type='checkbox'",
        "//input[@id='sunday'] and @type='checkbox'"
    ]

    for(const locator of checkboxLocator)
    {
        await page.locator(locator).check()
    }
})