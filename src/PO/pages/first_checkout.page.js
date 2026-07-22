const HeaderComponent = require("../components/common/header.component");
const FirstCheckoutComponent = require("../components/firstCheckout/firstCheckout.component");

class FirstCheckout{

    constructor(){
        this.headerComponent = new HeaderComponent()
        this.firstCheckoutComponent = new FirstCheckoutComponent()
    }

    async open(){
        browser.url('https://www.saucedemo.com/checkout-step-one.html')
    }
}

module.exports = FirstCheckout;