import {test,expect} from '@playwright/test'


test.describe.only('Group 1',()=>{
test('Grouping 1',async({page})=>{
   // await page.goto('https://demoblaze.com/')
    console.log('Grouping 1')

})

test('Grouping 2',async({page})=>{
   // await page.goto('https://demoblaze.com/')
    console.log('Grouping 2')

})

})



test.describe.skip('Group 2',()=>{

test('Grouping 3',async({page})=>{
  //  await page.goto('https://demoblaze.com/')
    console.log('Grouping 3')

})

test('Grouping 4',async({page})=>{
   // await page.goto('https://demoblaze.com/')
    console.log('Grouping 4')

})

test('Grouping 5',async({page})=>{
    console.log('Grouping 5')

})

})





