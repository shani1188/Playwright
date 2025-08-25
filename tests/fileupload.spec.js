import {test,expect} from '@playwright/test'

test('File Upload - Single file',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#singleFileInput').setInputFiles('tests/uploadfiles/Shahrukh Asghar CV.pdf')
    await page.waitForTimeout(5000)

})

test('File Upload - Multiple files',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //Adding multiple files
    await page.locator('#multipleFilesInput').setInputFiles([
        'tests/uploadfiles/Shahrukh Asghar CV.pdf',
        'tests/uploadfiles/Shahrukh Asghar CV.docx'
    ])
    await page.waitForTimeout(3000)
    //Removing files
    await page.locator('#multipleFilesInput').setInputFiles('C:/Users/Datics/Downloads/Shahrukh Asghar CV.pdf')
    await page.waitForTimeout(5000)
    
}   )