const BaseComponent = require('../common/base.component')

class InventoryComponent extends BaseComponent{

    constructor(){
        super('.inventory_item')
    }

    async addToCart(itemName){
        await $(`//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`).click();
    }
}

module.exports = InventoryComponent