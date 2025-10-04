import {test,expect} from '@playwright/test'

test('Fail',async({page})=>{
    test.fail()  // this annotation is used to mark a test as expected to fail. It can be useful in scenarios where a known issue exists, and you want to acknowledge it without causing the entire test suite to fail.
    console.log('This test is supposed to fail')
    expect(1).toBe(2)
})

test.skip('skip',async({page})=>{
    test.fail()  // this annotation is used to mark a test as expected to fail. It can be useful in scenarios where a known issue exists, and you want to acknowledge it without causing the entire test suite to fail.
    console.log('This test is supposed to fail')
    expect(1).toBe(2)
})

test('Fail with browser',async({page,browserName})=>{
   
    console.log('This test is supposed to fail')
    if(browserName==='firefox'){
        test.fail()  
    }
    
})


test('Test slow',async({page,browserName})=>{
   
    console.log('Testing the slow annotation')
    await page.goto('https://demoblaze.com/')
    
})