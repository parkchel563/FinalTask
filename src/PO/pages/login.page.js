const {LoginComponent} = require('../../PO/components/index')
const BasePage = require('../pages/base.page')

class LoginPage extends BasePage{

    constructor(){
        super('/')
        this.loginComponent = new LoginComponent()
    }

    async validateLogin(user){
        const currentUrl = await browser.getUrl()

        if(currentUrl.includes('/inventory.html')){

          await expect(browser).toHaveUrl(`${browser.options.baseUrl}/inventory.html`)

        }else{

          await expect(this.loginComponent.errorMessage).toHaveText(user.error)
      
        }
    }

}

module.exports = LoginPage;