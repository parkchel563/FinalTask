const {HeaderComponent} = require('../components/index')

class BasePage {

    constructor(url){
        this.pageUrl = url
        this.headerComponent = new HeaderComponent()
    }

    get url(){
        return `${browser.options.baseUrl}${this.pageUrl}`
    }

    async checkUrl(url){
        const currentUrl = await browser.getUrl()
        return await currentUrl.includes(url)
    }

    async open(){
        return browser.url(this.pageUrl)
    }
}

module.exports = BasePage;