const LoginPage = require('../../PO/pages/login.page')

const InventoryPage = require('../../PO/pages/inventory.page')

const CartPage = require('../../PO/pages/cart.page')

const FirstCheckout = require('../../PO/pages/first_checkout.page')

const SecondCheckoutPage = require('../../PO/pages/second_checkout.page')

const CompletedCheckoutPage = require('../../PO/pages/completed_checkout.page')

const {pages } = require('../../PO/index')

const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const firstCheckout = new FirstCheckout()
const secondCheckout = new SecondCheckoutPage()
const completedCheckout = new CompletedCheckoutPage()

describe("End-to-end checkout", () => {
  it("Should complete checkout successfully", async () => {
    
    await pages('login').open()
    
    await pages('login').loginComponent.name.setValue("standard_user")
    
    await pages('login').loginComponent.password.setValue("secret_sauce")
    
    await pages('login').loginComponent.loginBtn.click()
    
    await expect(browser).toHaveUrl(pages('inventory').url)
    
    await pages('inventory').inventoryComponent.addToCartBtn.click()
    
    await expect(pages('inventory').headerComponent.cartBadge).toHaveText("1")
    
    await pages('inventory').headerComponent.cartBadge.click()
    
    await expect(pages('cart').cartComponent.inventoryItemName).toHaveText("Sauce Labs Backpack")
    
    await pages('cart').cartComponent.confirmBtn.click()
    
    await pages('firstCheckout').firstCheckoutComponent.name.setValue("Mykyta")
    await pages('firstCheckout').firstCheckoutComponent.surname.setValue("Zaitsev")
    await pages('firstCheckout').firstCheckoutComponent.postalCode.setValue("61100")
    
    await pages('firstCheckout').firstCheckoutComponent.continueBtn.click()
    
    await pages('secondCheckout').secondCheckoutComponent.finishBtn.click()
    
    await expect(pages('completedCheckout').completedCheckoutComponent.completeHeader).toHaveText("Thank you for your order!")
    
  
  })
  
})

