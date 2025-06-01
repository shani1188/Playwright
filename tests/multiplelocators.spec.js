import{test,expect} from '@playwright/test'

test('Multiple locators',async({page})=>{

    await page.goto('https://demoblaze.com/')

   // const links = await page.$$('a')
    
    // for(const link of links)
    // {
    //   const linkText = await link.textContent()
    //   console.log(linkText)
    // }
    
    await page.waitForSelector('a.hrefch')
    const products = await page.$$('a.hrefch')

    for(const product of products)
        { 
            const productText = await product.textContent()
            console.log(productText) 
        }
})