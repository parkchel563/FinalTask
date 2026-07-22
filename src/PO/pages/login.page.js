const {LoginComponent} = require('../../PO/components/index')
const BasePage = require('../pages/base.page')

class LoginPage extends BasePage{

    constructor(){
        super('/')
        this.loginComponent = new LoginComponent()
    }

}

module.exports = LoginPage;