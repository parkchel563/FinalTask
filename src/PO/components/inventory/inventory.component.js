class InventoryComponent {

    get rootEl(){
        return $('.inventory_item')
    }

    get addToCartBtn(){
        return this.rootEl.$('.btn_primary')
    }
}

module.exports = InventoryComponent