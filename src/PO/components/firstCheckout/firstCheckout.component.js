const BaseComponent = require('../common/base.component')

class FirstCheckoutComponent extends BaseComponent{

    constructor(){
        super('.checkout_info')
    }

    input(param){
        const selectors = {
            name: '#first-name',
            surname: '#last-name',
            postalCode: '#postal-code'
        }
        return $(selectors[param])
    }

    get continueBtn(){
        return $('#continue')
    }
}

module.exports = FirstCheckoutComponent;