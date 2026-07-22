const LoginPage = require('../../PO/pages/login.page')

const InventoryPage = require('../../PO/pages/inventory.page')

const CartPage = require('../../PO/pages/cart.page')

const FirstCheckout = require('../../PO/pages/first_checkout.page')

const SecondCheckoutPage = require('../../PO/pages/second_checkout.page')

const CompletedCheckoutPage = require('../../PO/pages/completed_checkout.page')

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()
const cartPage = new CartPage()
const firstCheckout = new FirstCheckout()
const secondCheckout = new SecondCheckoutPage()
const completedCheckout = new CompletedCheckoutPage()

describe("End-to-end checkout", () => {
  it("Should complete checkout successfully", async () => {
    
    await loginPage.open()
    
    await loginPage.loginComponent.name.setValue("standard_user")
    
    await loginPage.loginComponent.password.setValue("secret_sauce")
    
    await loginPage.loginComponent.loginBtn.click()
    
    await expect(browser).toHaveUrl(inventoryPage.url)
    
    await inventoryPage.inventoryComponent.addToCartBtn.click()
    
    expect(inventoryPage.headerComponent.cartContainer).toHaveText("1")
    
    await inventoryPage.headerComponent.cartBadge.click()
    
    expect(cartPage.cartComponent.inventoryItemName).toHaveText("Sauce Labs Backpack")
    
    await cartPage.cartComponent.confirmBtn.click()
    
    await firstCheckout.firstCheckoutComponent.name.setValue("Mykyta")
    await firstCheckout.firstCheckoutComponent.surname.setValue("Zaitsev")
    await firstCheckout.firstCheckoutComponent.postalCode.setValue("61100")
    
    await firstCheckout.firstCheckoutComponent.continueBtn.click()
    
    await secondCheckout.secondCheckoutComponent.finishBtn.click()
    
    completedCheckout.completedCheckoutComponent.completeHeader.toHaveText("Thank you for your order!")
    
  
  })
  
})

