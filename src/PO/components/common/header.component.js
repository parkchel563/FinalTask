class HeaderComponent{

    get burgerMenu(){
        return $('#react-burger-menu-btn')
    }

    item(type){
        const selectors = {
            cart: 'link',
            cartBarge: 'badge'
        }

        return $(`.shopping_cart_${selectors[type]}`)
    }

    get cart(){
        return this.item('cart')
    }

    get cartBadge(){
        return this.item('cartBarge')
    }

}
module.exports = HeaderComponent;