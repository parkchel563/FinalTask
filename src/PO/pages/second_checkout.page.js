const {SecondCheckoutComponent} = require('../components/index')
const BasePage = require('../pages/base.page')

class SecondCheckoutPage extends BasePage{

    constructor(){
        super('/checkout-step-two.html')
        this.secondCheckoutComponent = new SecondCheckoutComponent()
    }

}

module.exports = SecondCheckoutPage;