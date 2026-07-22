const BasePage = require("./base.page");
const CartPage = require("./cart.page");
const CompletedCheckoutPage = require("./completed_checkout.page");
const FirstCheckoutPage = require("./first_checkout.page");
const InventoryPage = require("./inventory.page");
const LoginPage = require("./login.page");
const SecondCheckoutPage = require("./second_checkout.page");

function pages(name){
    const items = {
        base: new BasePage(),
        cart: new CartPage(),
        completedCheckout: new CompletedCheckoutPage(),
        firstCheckout: new FirstCheckoutPage(),
        inventory: new InventoryPage(),
        login: new LoginPage(),
        secondCheckout: new SecondCheckoutPage()
    }

    return items[name];
}

module.exports = {
    BasePage,
    CartPage,
    CompletedCheckoutPage,
    FirstCheckoutPage,
    InventoryPage,
    LoginPage,
    SecondCheckoutPage,
    pages
}