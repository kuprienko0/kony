export default class ViewCart{
    constructor(onShowCart) {
        this.onShowCart = onShowCart;
    }

    cartBlock = document.querySelector('.header');
    render = () => {
        this.cartBlock.innerHTML = `
        <nav class="navbar navbar-dark bg-dark bg-gradient">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Food Shop</a>
                <button type="button" class="btn-cart cart-btn"></button>
            </div>
        </nav>`
        this.cartBlock.querySelector('.btn-cart').addEventListener('click', () => this.onShowCart());


    }
}