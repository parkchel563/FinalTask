describe("End-to-end checkout", () => {
  it("Should complete checkout successfully", async () => {
    
    await browser.url("https://www.saucedemo.com/")
    
    await $('#user-name').setValue("standard_user")
    
    await $('#password').setValue("secret_sauce")
    
    await $('#login-button').click()
    
    expect(browser).toHaveUrlContaining("invetory.html")
    
    await $('.btn_primary').click()
    
    expect($(".shopping_cart_badge")).toHaveText("1")
    
    await $(".shopping_cart_link").click()
    
    expect($('.inventory_item_name')).toHaveText("Sauce Labs Backpack")
    
    await $("#checkout").click()
    
    await $('#first-name').setValue("Mykyta")
    await $('#last-name').setValue("Zaitsev")
    await $('#postal-code').setValue("61100")
    
    await $("#continue").click()
    
    await $("#finish").click()
    
    expect($('.complete-header')).toHaveText("Thank you for your order!")
    
  
  })
  
})