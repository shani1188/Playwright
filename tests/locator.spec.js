import{test,expect} from '@playwright/test'

test('Locator selection', async({page})=>{

    await page.goto('https://demoblaze.com/')

    // Test locators - property

    await page.click('#login2')
    await page.fill('id=loginusername','shahrukh12')
    await page.fill('#loginpassword','test@123')
    //await page.click('//button[contains(text(),"Log in")]')
    await page.click('//button[.="Log in"]')
    const logout=  page.locator('#logout2')

    await expect(logout).toBeVisible()
})