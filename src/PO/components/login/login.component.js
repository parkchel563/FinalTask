const BaseComponent = require('../common/base.component')

class LoginComponent extends BaseComponent{

    constructor(){
        super('#login_button_container')
    }

    get name(){
        return this.rootEl.$('#user-name')
    }
    
    get password(){
        return this.rootEl.$('#password')
    }

    get loginBtn(){
        return this.rootEl.$('#login-button')
    }
}

module.exports = LoginComponent