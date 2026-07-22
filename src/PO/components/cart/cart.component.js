class CartComponent{
    get itemRootEl(){
        return $('.cart_item')
    }

    get inventoryItemName(){
        return this.itemRootEl.$('.inventory_item_name')
    }

    get confirmBtn(){
        return $('#checkout')
    }
}

module.exports = CartComponent;