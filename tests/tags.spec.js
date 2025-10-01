import{test,expect} from '@playwright/test'

test('Tagging ',{tag:'@sanity',}, async({page})=>{

    console.log('Test started')
})

test('Tagging 2',{tag:'@smoke',}, async({page})=>{

    console.log('Test started 2')
})

test('Tagging 3',{tag:'@reg',}, async({page})=>{

    console.log('Test started 3') // npx playwright test tests/tags.spec.js --project chromium --grep '@reg'  //to run this test
})

test('Tagging 4',{tag:'@smoke',}, async({page})=>{

    console.log('Test started 4')
})

test('Tagging 5',{
    tag:'@smoke@reg',
}, async({page})=>{

    console.log('Test started 5')   // npx playwright test tests/tags.spec.js --project chromium --grep '@smoke@reg'  //to run this test
})