import {test,expect} from '@playwright/test'
test('Drag and Drop',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const source = await page.locator('#draggable') //drag me
    const target = await page.locator('#droppable') // drop here
    await source.dragTo(target)
    const color = await target.evaluate(el=> getComputedStyle(el).color)
    const bgColor = await target.evaluate(el=> getComputedStyle(el).backgroundColor)
    console.log('Color: ',color)
    expect.soft(target).toHaveText('Dropped!')
    expect(color).toBe('rgb(119, 118, 32)')
    expect(bgColor).toBe('rgb(255, 250, 144)')
    await page.waitForTimeout(5000)
    
})