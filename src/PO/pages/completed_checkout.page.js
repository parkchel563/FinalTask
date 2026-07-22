
const HeaderComponent = require("../components/common/header.component");
const CompletedCheckoutComponent = require('../components/completedCheckout/completedCheckout.component.js')

class CompletedCheckout{

    constructor(){
        this.headerComponent = new HeaderComponent()
        this.completedCheckoutComponent = new CompletedCheckoutComponent()
    }

    async open(){
        browser.url('https://www.saucedemo.com/checkout-complete.html')
    }
}

module.exports = CompletedCheckout;