const HeaderComponent = require('../components/common/header.component')
const CartComponent = require('../components/cart/cart.component')

class CartPage{

    constructor(){
        this.headerComponent = new HeaderComponent()
        this.cartComponent = new CartComponent()
    }

    async open(){
        browser.url('https://www.saucedemo.com/cart.html')
    }
}

module.exports = CartPage;