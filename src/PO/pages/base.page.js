const {HeaderComponent} = require('../components/index')

class BasePage {

    constructor(url){
        this.pageUrl = url
        this.headerComponent = new HeaderComponent()
    }

    async open(){
        return browser.url(this.pageUrl)
    }
}

module.exports = BasePage;