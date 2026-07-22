const LoginComponent = require('../../PO/components/login/login.component')

class LoginPage {

    constructor(){
        this.loginComponent = new LoginComponent()
    }
   async open(){
        await browser.url('https://www.saucedemo.com/')
    }
}

module.exports = LoginPage;