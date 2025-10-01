import {test,expect} from'@playwright/test'

test('Trace Viewer',async({page})=>{

    await page.goto('/')
    await page.click('#login2')
    await page.fill('id=loginusername','shahrukh12')
    await page.fill('#loginpassword','test@123')
    await page.click('//button[text()="Log in"]')
    const logout=  page.locator('#logout2')
    await expect(logout).toBeVisible()
    //npx playwright show-trace test-results/taceviewer-Trace-Viewer-chromium/trace.zip     // to view the trace
})