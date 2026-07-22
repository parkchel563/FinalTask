const { pages } = require('../../PO/index')

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

