import {test,expect} from '@playwright/test'

test('page Screenshot',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'screenshot.png'})
})

test('full page Screenshot',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'fullpage_screenshot.png', fullPage:true})
})


test('Element Screenshot',async({page})=>{
    await page.goto('https://demoblaze.com/')
    const element = await page.locator('.navbar-brand')
    await element.screenshot({path:'tests/screenshots/'+Date.now()+'element_screenshot.png'})
})

