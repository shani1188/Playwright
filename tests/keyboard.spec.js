import{test,expect} from'@playwright/test' 


test('Keyboard Actions',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')
    await page.locator('[name="text1"]').fill('Welcome to Playwright. I am learning Automation Testing')
    await page.waitForTimeout(2000)
    await page.locator('[name="text1"]').press('Control+A')
    await page.locator('[name="text1"]').press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000)


})