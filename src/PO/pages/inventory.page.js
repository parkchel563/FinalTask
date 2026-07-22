const HeaderComponent = require("../components/common/header.component");
const InventoryComponent = require("../components/inventory/inventory.component");

class InventoryPage{

    get url(){
        return 'https://www.saucedemo.com/inventory.html'
    }

    constructor(){
        this.headerComponent = new HeaderComponent()
        this.inventoryComponent = new InventoryComponent()
    }

    async open(){
        browser.url('https://www.saucedemo.com/inventory.html')
    }

    
}

module.exports = InventoryPage;