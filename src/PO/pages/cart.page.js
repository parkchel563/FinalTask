const {CartComponent} = require('../components/index')
const BasePage = require('../pages/base.page')

class CartPage extends BasePage{

    constructor(){
        super('/cart.html')
        this.cartComponent = new CartComponent()
    }

}

module.exports = CartPage;