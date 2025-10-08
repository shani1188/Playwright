export class LoginPage{
    constructor(page){
        this.page=page
        
        this.username='#loginusername'
        this.password='#loginpassword'
        this.loginBtn='//button[text()="Log in"]'
        this.loginlink='a:has-text("Log in")'
    }

    async loginPage(){
        await this.page.goto('https://www.demoblaze.com/index.html')
    }
    async login(username,password){
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginBtn).click()
    }
}