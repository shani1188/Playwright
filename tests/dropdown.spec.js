import {test,expect} from '@playwright/test'
import { setTimeout } from 'timers/promises'

test('Drop-Down functionality',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/',setTimeout(50000))

    // Multiple ways to select option

    //await page.locator('#country').selectOption({label: 'India'})  //by using label or visible text
    //await page.locator('#country').selectOption('India')        //  by using visible text
    //await page.locator('#country').selectOption({value: 'uk'})  // by value
    //await page.locator('#country').selectOption({index:1})      // by index
    //await page.selectOption('#country',{value:'India'})  // Direct select method
    //await page.selectOption('#country','Inda')


    //Assertions
    //1) check number of options in dropdown

    //const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)


    // 2) check number of options in dropdwon 2nd method
    //const option= await page.$$('#country option')
    //console.log("Number of Options: ",option.length)
    //await expect(option.length).toBe(10)

    // 3) Check presence of value in dropdown - Approach 1 : textcontent function

    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy()
    const options = await page.$$('#country option')
    let status = false
    for(const option of options)
        {
       // console.log(await option.textContent())
       let value = await option.textContent()

       if(value.includes('France')){
        await page.selectOption('#country',value)
        status=true
        break
       }
    }
    expect(status).toBeTruthy()
    
    
    
    await page.waitForTimeout(5000)



})