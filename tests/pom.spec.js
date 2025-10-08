import {test,expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import { HomePage }  from '../pages/HomePage'
import { CartPage } from '../pages/cart'


test.skip('POM',async({page})=>{

    // Page Object Model
    await page.goto('https://demoblaze.com/')
    await page.locator('a:has-text("Log in")').click()
    await page.locator('#loginusername').fill('Shahrukh12')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('button:has-text("Log in")').click()
   

})

test('POM with class',async({page})=>{
    const login= new LoginPage(page)
    
    
    // Page Object Model  Login
    await login.loginPage()
    await login.login('shahrukh12','test@123')
await page.waitForSelector('#nameofuser', { state: 'visible' });
    //await expect(page.locator('.oxd-userdropdown-name')).toHaveText('marta ffff')
    
    // Page Object Model  Home Page
    const home= new HomePage(page)
    await home.addProduct('Samsung galaxy s6')
    await home.addProduct('Nokia lumia 1520')
    await home.addProduct('Nexus 6')
   // await home.addProduct('Sone xperia z5')
    await home.navigateToCart()

    // Page Object Model  Cart Page
    const cart= new CartPage(page)
    await cart.verifyProduct('Samsung galaxy s6')
    await cart.verifyProduct('Nokia lumia 1520')
    await cart.verifyProduct('Nexus 6')
    //await cart.verifyProductInCart('Sone xperia z5')
    await cart.placeOrder()

})