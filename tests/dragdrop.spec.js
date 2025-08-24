import {test,expect} from '@playwright/test'
test('Drag and Drop',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const source = await page.locator('#draggable') //drag me
    const target = await page.locator('#droppable') // drop here
    await source.dragTo(target)
    expect.soft(target).toHaveText('Dropped!')
    await page.waitForTimeout(5000)
    
})