import {test,expect,chromium} from '@playwright/test'

test('Handle Pages/Windows',async()=>{

    const brower= await chromium.launch()
    const context =await brower.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    
    const allPages = context.pages()
    console.log('Total pages are: '+ allPages.length) // 2 pages

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')

})

test('Handle Multiple Pages/Windows',async()=>{

    const brower= await chromium.launch()
    const context =await brower.newContext()
    const page1 = await context.newPage()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise= context.waitForEvent('page') // wait for new page to open
    await page1.locator('//a[text()="OrangeHRM, Inc"]').click() // click on link which opens new page
    
    const newPageTab= await pagePromise
    await expect(newPageTab).toHaveTitle('Human Resources Management Software | HRMS | OrangeHR')

    await page1.waitForTimeout(3000)
    await newPageTab.waitForTimeout(3000)

    await brower.close()
 //Reporter command also use to get test reports in multiple formats. 
 // npx playwright test tests/handlewindows.spec.js --project chromium --headed --reporter=json  //reporter in json format
 // there are multiple formats available for reporter like html, json, junit, list, dot etc.

})