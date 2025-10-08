export class HomePage{

    constructor(page){
        this.page=page
        this.productList='#tbodyid h4 a'
        this.addToCart='a:has-text("Add to cart")'
        this.cart='#cartur'
        this.homePage='//a[text()="Home "]'
    }

    async addProduct(productName){
        const productlist= await this.page.$$(this.productList)
        for(const product of productlist){
            if(productName===await product.textContent()){
                await product.scrollIntoViewIfNeeded()
                await product.click()
                break;

            }
        }
        await this.page.waitForSelector(this.addToCart)
        await this.page.click(this.addToCart)
        await this.page.on('dialog', async dialog=>{
            if (dialog.message().includes('added')){
                await dialog.accept()
            }
            
        })
        await this.page.click(this.homePage)
        await this.page.waitForSelector(this.productList)

    }

    async navigateToCart(){
        await this.page.click(this.cart)
    }
}