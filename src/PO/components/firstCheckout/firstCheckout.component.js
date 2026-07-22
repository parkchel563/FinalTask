const BaseComponent = require('../common/base.component')

class FirstCheckoutComponent extends BaseComponent{

    constructor(){
        super('.checkout_info')
    }

    get name(){
        return this.rootEl.$('#first-name')
    }

    get surname(){
        return this.rootEl.$('#last-name')
    }

    get postalCode(){
        return this.rootEl.$('#postal-code')
    }

    get continueBtn(){
        return $('#continue')
    }
}

module.exports = FirstCheckoutComponent;