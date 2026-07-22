class FirstCheckoutComponent{

    get rootFormEl(){
        return $('.checkout_info')
    }

    get name(){
        return this.rootFormEl.$('#first-name')
    }

    get surname(){
        return this.rootFormEl.$('#last-name')
    }

    get postalCode(){
        return this.rootFormEl.$('#postal-code')
    }

    get continueBtn(){
        return $('#continue')
    }
}

module.exports = FirstCheckoutComponent;