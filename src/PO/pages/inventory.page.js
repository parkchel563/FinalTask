const {InventoryComponent, HeaderComponent} = require("../components/index");
const BasePage = require('../pages/base.page')

class InventoryPage extends BasePage{

    get url(){
        return 'https://www.saucedemo.com/inventory.html'
    }

    constructor(){
        super('/inventory.html')
        this.inventoryComponent = new InventoryComponent()
    }
     
}

module.exports = InventoryPage;