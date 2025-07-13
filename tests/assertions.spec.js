import {test,expect} from '@playwright/test'

test('Assertions', async({page})=>{

    await page.goto('https://www.nopcommerce.com/en/register')
    
    //1- Expecte to have URL
    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register')

    // 2- To have Title
    await expect(page).toHaveTitle('Register - nopCommerce')

    // 3- To be Visible
    let locator= await page.locator('#FirstName')
    await expect(locator).toBeVisible()
    
    locator = await page.locator('#Username')

    await expect(locator).toBeVisible()

    // 4- To be enabled
    //const emailConfirmation= await page.getByRole('textbox',{name:'ConfirmEmail'})
    const emailConfirmation = await page.locator('#ConfirmEmail')
    await expect(emailConfirmation).toBeEnabled()

    // 5- To be Checked
    const checkbox= await page.getByRole('checkbox',{name:'Newsletter'})
    await checkbox.check()
    await expect(checkbox).toBeChecked()


    //6- Attribute

    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    //7- to have text
     await expect(await page.locator('.page-title h1')).toHaveText('Register')

     //8- to contain text
     await expect(await page.locator('.page-title h1')).toContainText('Reg')

    //9 to have value

    const emailValue = await page.locator('#Email')
    emailValue.fill('some@demo.com')
    await expect(emailValue).toHaveValue('some@demo.com')

    //10- to have count usable for drop-down counts and combo box

    const dropDown = await page.locator('#CountryId option')
    await expect(dropDown).toHaveCount(238)
    await expect(dropDown).not.toHaveCount(239) // we can use .not method to negative assertion. negative test cases
})