import {test,expect} from '@playwright/test'
test('Date Picker control',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   // await page.fill('#datepicker','08/24/2025')
    //await page.locator('.ui-datepicker-month').selectOption('5') // by value

    //date picker
    const year='2026'
    const month='July'
    const date='30'

    await page.locator('#datepicker').click()
    //select year
    while(true){
        const selectedyear= await page.locator('.ui-datepicker-year').textContent()
        const selectedmonth= await page.locator('.ui-datepicker-month').textContent()
            if(selectedyear===year && selectedmonth===month){
            break;
            }
        else{
            await page.locator('.ui-datepicker-next').click()
        }
    }
    //select date Method 1 direct click
   // await page.locator(`//a[text()="${date}"]`).click()
    //await page.click(`//a[text()="${date}"]`) 

    //select date Method 2 using loop
    const dates = await page.$$('a .ui-state-default')
    for(const dt of dates){
        let dtxt = await dt.textContent()
        if(dtxt===date){
            await dt.click()
            break;
    
        }
    }


    await page.waitForTimeout(5000)

})