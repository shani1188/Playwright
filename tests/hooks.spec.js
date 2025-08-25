import {test,expect} from '@playwright/test'
import { log } from 'console'
let page;

test.beforeEach ('Hooks',async ({browser})=>{
    page = await browser.newPage()
    await page.goto('https://demoblaze.com/')

    // Test locators - property

    await page.click('#login2')
    await page.fill('id=loginusername','shahrukh12')
    await page.fill('#loginpassword','test@123')
    //await page.click('//button[contains(text(),"Log in")]')
    await page.click('//button[.="Log in"]')

})

test('Product count',async()=>{

    const product= await page.$$('.hrefch')
    expect(product).toHaveLength(9)
})

test('Add to cart', async ()=>{
    await page.click('//a[text()="Samsung galaxy s6"]')
    await page.click('a.btn')
    page.on('dialog',dialog=>{
        expect(dialog.message()).toContain('Product added')
        dialog.accept()
    })
    await page.waitForTimeout(5000)

})

test.afterEach (async()=>{
    const logout= await page.locator('#logout2')
    await logout.click()

    
})



