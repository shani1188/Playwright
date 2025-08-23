import {test,expect} from '@playwright/test'

test('Handle Frames',async({page})=>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const Allframes = await page.frames()
    console.log('Total number of frames', Allframes.length)

    // Approach 1 Using name or url of frame
    //const frameName= await page.frame('name') // If name is available then we use this code 
    //const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //await  frame1.fill('[name="mytext1"]','Hello')
    //await page.waitForTimeout(2000)


    // Approach 2 using frame locator

    const frameInputBox= await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]')
    frameInputBox.fill('Hello')
    await page.waitForTimeout(5000)
})