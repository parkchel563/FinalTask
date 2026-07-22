
class CompletedCheckoutComponent {

    
    get RootEl(){
        return $('#checkout_complete_container')
    }

    get completeHeader(){
        return this.RootEl.$('.complete-header')
    }
}

module.exports = CompletedCheckoutComponent