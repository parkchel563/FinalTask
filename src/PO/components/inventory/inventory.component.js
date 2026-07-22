const BaseComponent = require('../common/base.component')

class InventoryComponent extends BaseComponent{

    constructor(){
        super('.inventory_item')
    }


    get addToCartBtn(){
        return this.rootEl.$('.btn_primary')
    }
}

module.exports = InventoryComponent