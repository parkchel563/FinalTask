
const {CompletedCheckoutComponent} = require('../components/index')
const BasePage = require('../pages/base.page')

class CompletedCheckoutPage extends BasePage{

    constructor(){
        super('/checkout-complete.html')
        this.completedCheckoutComponent = new CompletedCheckoutComponent()
    }

}

module.exports = CompletedCheckoutPage;