const BaseComponent = require('../common/base.component')

class CompletedCheckoutComponent extends BaseComponent{

    constructor(){
        super('#checkout_complete_container')
    }

    get completeHeader(){
        return this.rootEl.$('.complete-header')
    }
}

module.exports = CompletedCheckoutComponent