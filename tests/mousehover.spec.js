import {test,expect} from '@playwright/test'

test('Mouse hover',async({page})=>{

    await page.goto('https://www.nopcommerce.com/en/register')
    const nav = await page.locator('.navigation-body-container').nth(0)
    const navigation = '//span[@class="navigation-top-menu-label"]'
    await nav.locator('//span[text()="Product"]').hover()
    await page.waitForTimeout(2000)
    const store= await page.locator(navigation+'[text()="Store demo"]')
    const feature= await page.locator(navigation+'[text()="Features"]')
    store.hover()
    await page.waitForTimeout(2000)
    feature.hover()
    await page.waitForTimeout(2000)
    store.click()


    await page.waitForTimeout(5000)

})