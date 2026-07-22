const BaseComponent = require('../common/base.component')

class CartComponent extends BaseComponent{

    constructor(){
        super('.cart_item');
    }

    get inventoryItemName(){
        return this.rootEl.$('.inventory_item_name')
    }

    get confirmBtn(){
        return $('#checkout')
    }
}

module.exports = CartComponent;