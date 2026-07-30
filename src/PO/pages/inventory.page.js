const {InventoryComponent, HeaderComponent} = require("../components/index");
const BasePage = require('../pages/base.page')

class InventoryPage extends BasePage{

    constructor(){
        super('/inventory.html')
        this.inventoryComponent = new InventoryComponent()
    }
     
}

module.exports = InventoryPage;