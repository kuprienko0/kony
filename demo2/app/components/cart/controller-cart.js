import ViewCart from "./view-cart.js";
import ModelCart from "./model-cart.js";
export default class ControllerCart{
    constructor({subscribe, notify,  events}) {
        subscribe(events.ON_ADD_CART, this.onAddCart);
        subscribe(events.BACK_FROM_ORDER, this.renderCart);
        subscribe(events.SEND_ORDER, this.clearCart);

        this.view = new ViewCart(this.onShowCart, this.onIncreaseProductAmount, this.onReduceProductAmount, this.onDeleteProduct, this.onCreateOrder);
        this.model = new ModelCart();

        this.notify = notify;
        this.events = events;

        this.init();
    }

    init = () =>{
        this.view.render()
    }

    onShowCart = () =>{
        this.view.updateCart(this.model.getCartData, this.model.totalPrice);
        this.view.showCart();
    }

    onAddCart = (product) =>{
        this.model.addToCart(product);
    }

    onIncreaseProductAmount = (productId) => {
        this.model.increaseProduct(productId);
        this.view.updateCart(this.model.getCartData, this.model.totalPrice);
    }

    onReduceProductAmount = (productId) => {
        this.model.reduceProduct(productId);
        this.view.updateCart(this.model.getCartData, this.model.totalPrice);
    }

    onDeleteProduct = (productId) => {
        this.model.removeFromCart(productId);
        this.view.updateCart(this.model.getCartData, this.model.totalPrice);
    }

    onCreateOrder = () => {
        this.notify(this.events.CREATE_ORDER, {data: this.model.getCartData, totalPrice: this.model.totalPrice})
    }

    renderCart = () => {
        this.view.updateCart(this.model.getCartData, this.model.totalPrice);
    }

    clearCart = () => {
        this.model.clearCart();
        this.view.hideCart();
    }
}
