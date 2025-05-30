const {test,expect}= require('@playwright/test')



test('Home Page',async ({page})=>{
await page.goto('https://www.demoblaze.com/')

let pageTitle=  await page.title()
console.log('This is the page title: ', pageTitle)
await expect(page).toHaveTitle('STORE')

let pageUrl=  await page.url()
console.log('This is the page url: ', pageUrl)
await expect(page).toHaveURL('https://www.demoblaze.com/')
await page.close()
 
})