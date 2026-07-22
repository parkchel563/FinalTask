const HeaderComponent = require("../components/common/header.component");
const SecondCheckoutComponent = require('../components/secondCheckout/secondCheckout.component')

class SecondCheckout{

    constructor(){
        this.headerComponent = new HeaderComponent()
        this.secondCheckoutComponent = new SecondCheckoutComponent()
    }

    async open(){
        browser.url('https://www.saucedemo.com/checkout-step-two.html')
    }
}

module.exports = SecondCheckout;