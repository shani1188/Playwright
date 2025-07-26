import {test,expect} from'@playwright/test'

test('Multi-Select Dropdowns',async({page})=>{

    //Select multiple option from multi select dropdown

    await page.goto('https://testautomationpractice.blogspot.com/')
//    await page.selectOption('#colors',['Blue','Red','Yellow'])  Direct multi-select
//   const option = await page.locator('#colors option')
//    await expect(option).toHaveCount(7)

//const option = await page.$$('#colors option')
//await expect(option.length).toBe(7)

//check presence of value in drop down

const content = await page.locator('#colors').textContent()
await expect(content.includes('Blue')).toBeTruthy()
await expect(content.includes('Black')).toBeFalsy()


    await page.waitForTimeout(5000)


})