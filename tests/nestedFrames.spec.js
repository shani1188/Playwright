import {test,expect} from '@playwright/test'

test('Nested Frames', async ({page})=>{

await page.goto('https://ui.vision/demo/webtest/frames/')

const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
await frame3.locator('[name="mytext3"]').fill('welcome')


// Nested frame

const Childfrmes= await frame3.childFrames()

await Childfrmes[0].locator('(//div[@class="vd3tt"])[1]').check()

await page.waitForTimeout(5000)

})