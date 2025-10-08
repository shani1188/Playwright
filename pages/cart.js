export class CartPage{
    constructor(page){
        this.page=page
        this.nOfProducts='#tbodyid tr td:nth-child(2)'
        this.productPrice='#tbodyid tr td:nth-child(3)'
        this.totalPrice='#totalp'
        this.placeorderBtn='//button[text()="Place Order"]'
    }
    
    async verifyProduct(productName){
        const products= await this.page.$$(this.nOfProducts)
        for(const product of products){
            console.log('Product in the cart: ', await product.textContent())
            if (productName===await product.textContent()){
                return true
                break;
            }
        }
    }
    async placeOrder(){
        await this.page.click(this.placeorderBtn)
    }
}