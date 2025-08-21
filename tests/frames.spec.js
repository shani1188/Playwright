import {test,expect} from '@playwright/test'

test('Handle Frames',async({page})=>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const Allframes = await page.frames()
    console.log('Total number of frames', Allframes.length)

    // Approach 1 Using name or url of frame

    page.frame({url: ''})
})