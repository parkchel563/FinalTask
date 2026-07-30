const { pages } = require('../../PO/index')

const users = require('../../data/users')

const testData = require('../../data/testData')

describe("End-to-end checkout", () => {
  it("Should complete checkout successfully", async () => {
    
    await pages('login').open()
    
    await pages('login').loginComponent.name.setValue(testData.standardUser.name)
    
    await pages('login').loginComponent.password.setValue(testData.standardUser.password)
    
    await pages('login').loginComponent.loginBtn.click()
    
    await expect(browser).toHaveUrl(pages('inventory').url)
    
    await pages('inventory').inventoryComponent.addToCart(testData.product.name)
    
    await expect(pages('inventory').headerComponent.cartBadge).toHaveText("1")
    
    await pages('inventory').headerComponent.cartBadge.click()
    
    await expect(pages('cart').cartComponent.inventoryItemName).toHaveText(testData.product.name)
    
    await pages('cart').cartComponent.confirmBtn.click()
    
    await pages('firstCheckout').firstCheckoutComponent.input('name').setValue(testData.checkoutData.name)
    await pages('firstCheckout').firstCheckoutComponent.input('surname').setValue(testData.checkoutData.surname)
    await pages('firstCheckout').firstCheckoutComponent.input('postalCode').setValue(testData.checkoutData.postalCode)
    
    await pages('firstCheckout').firstCheckoutComponent.continueBtn.click()
    
    await pages('secondCheckout').secondCheckoutComponent.finishBtn.click()
    
    await expect(pages('completedCheckout').completedCheckoutComponent.completeHeader).toHaveText(testData.messages.completedCheckout)
    
  })
  
})
describe("Data driven login", () => {
  
    users.forEach(user => {
      it(`Login as ${user.name}`, async () => {

        await pages('login').open()
        await $('#login_button_container').waitForExist();

        await pages('login').loginComponent.name.setValue(user.name)
    
        await pages('login').loginComponent.password.setValue(user.password)
    
        await pages('login').loginComponent.loginBtn.click()

        await pages('login').validateLogin(user)

        })
    });
  
})

