const {FirstCheckoutComponent} = require("../components/index");
const BasePage = require('../pages/base.page')

class FirstCheckoutPage extends BasePage{

    constructor(){
        super('/checkout-step-one.html')
        this.firstCheckoutComponent = new FirstCheckoutComponent()
    }

}

module.exports = FirstCheckoutPage;