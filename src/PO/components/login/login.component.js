class LoginComponent{
    
    get rootEl(){
        return $('#login_button_container')
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