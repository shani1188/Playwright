import {test,expect} from '@playwright/test'

test('Alert with OK',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()

    })

    await page.click('#alertBtn')
    await page.waitForTimeout(5000)
})

test('Confirmation dialog with Ok and Cancel',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
       // await dialog.accept() // close by using OK button
        await dialog.dismiss() //close by using Cancel button

    })

    await page.click('#confirmBtn')
    //await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000)
})


test('Prompt Dialog box with OK and Cancel',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('Shahrukh') // close by using OK button
        //await dialog.dismiss() //close by using Cancel button

    })

    await page.click('#promptBtn')
    //await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    await expect(page.locator('#demo')).toHaveText('Hello Shahrukh! How are you today?')
    await page.waitForTimeout(5000)
})


