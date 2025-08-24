import {test,expect} from'@playwright/test'

test.skip('Mouse Righ click',(async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.locator('//span[text()="right click me"]').click({button:'right'})
    await page.waitForTimeout(5000)
}))

test('Double click',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[ondblclick="myFunction1()"]').dblclick()
const f2= await page.locator('#field2')
expect(f2).toHaveValue('Hello World!')
    await page.waitForTimeout(5000)
})
