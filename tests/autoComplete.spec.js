import {test,expect} from '@playwright/test'



test('Auto Complete Drop-down',async({page})=>{
await  page.goto('https://www.redbus.in/')
//await page.locator('#src').click();
await page.locator('//div[contains(text(),"From")]').click()
await page.locator('#srcDest').fill('Delhi')
await page.waitForSelector("//div[contains(@class,'searchCategory___03761b')][1]/div")

const fromCityOption = await page.$$("//div[contains(@class,'searchCategory___03761b')][1]/div")

for(let option of fromCityOption)
{
    const value = await option.textContent()
    console.log('Value is: ',value)
    if (value.includes('Visakhapatnam')){
        await option.click()
        break

    }

}

await page.waitForTimeout(5000)
})