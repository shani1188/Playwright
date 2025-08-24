import {test,expect} from '@playwright/test';
import { table } from 'console';

test('Web tables testing',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Table = await page.locator('#productTable')
    
    // total number of rows & columns
    const columns = await Table.locator('thead tr th')
    console.log('Total number of Column: ',await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await Table.locator('tbody tr')
    console.log('Total number of Rows: ',await rows.count())
    expect(await rows.count()).toBe(5)

    // Select Checkbox based on Name of product
    // const matchedrow =rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })
    // await matchedrow.locator('td input').check()
    
    //Select multiple products by using reusable function
    // await selectproduct(rows,page,'Smartphone')
    // await selectproduct(rows,page,'Smartwatch')
    // await selectproduct(rows,page,'Tablet')


    // print all product details using loop
    // for(let i=0; i<await rows.count();i++){
        
    //     const row= rows.nth(i)
    //     const tds=row.locator('td')
    //     // get all column data for particular row
    //     for(let j=0; j<await tds.count()-1;j++){

    //         let value = await tds.nth(j).textContent()
    //         console.log(value)
    //     }
    // }



    // print all producss details using pagination
    const pages=await page.locator('#pagination li')
    console.log('Total number of pages: ',await pages.count())

    for(let p=1; p<await pages.count();p++){
        if (p>0){await pages.nth(p).click()}
        for(let i=0; i<await rows.count();i++){
        
        const row= rows.nth(i)
        const tds=row.locator('td')
        // get all column data for particular row
        for(let j=0; j<await tds.count()-1;j++){

            let value = await tds.nth(j).textContent()
            console.log(value)
        } }await page.waitForTimeout(2000)
    }

await page.waitForTimeout(5000)


})

async function selectproduct(rows,page,productname)
{
    const matchedrow =rows.filter({
        has: page.locator('td'),
        hasText: productname
    })
    await matchedrow.locator('td input').check()
}