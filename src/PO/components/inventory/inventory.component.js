const BaseComponent = require('../common/base.component')

class InventoryComponent extends BaseComponent{

    constructor(){
        super('.inventory_item')
    }

    get items() {
    return $$('.inventory_item');
    }

    async addToCart(itemName) {
    const items = await this.items;

    for(let item of items){
         const name = await item.$('.inventory_item_name ').getText()

         if(name == itemName){
            await item.$('button').click()
            break;
         }
    }
    }
}

module.exports = InventoryComponent