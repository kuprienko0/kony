import ViewCart from "./view-cart.js";
export default class ControllerCart{
    constructor({subscribe, events, notify}) {

        this.notify = notify;
        this.events = events;

        this.view = new ViewCart(this.onShowCart);
        this.init();

    }
    init = () =>{
        this.view.render()
    }

    onShowCart = () =>{
        this.notify(this.events.SHOW_CART_MODAL)
    }
}
