import {test,expect} from'@playwright/test'

test('Record video',async({page})=>{

    await page.goto('/')
    await page.click('#login2')
    await page.fill('id=loginusername','shahrukh12')
    await page.fill('#loginpassword','test@123')
    await page.click('//button[text()="Log in"]')
    const logout=  page.locator('#logout9')
    await expect(logout).toBeVisible()
})