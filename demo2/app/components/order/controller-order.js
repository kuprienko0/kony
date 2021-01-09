import ModelOrder from "./model-order.js";
import ViewOrder from "./view-order.js";

export default class ControllerOrder{
    constructor({notify, subscribe, events}) {
        this.model = new ModelOrder();
        this.view = new ViewOrder(this.onBackToCart);

        this.notify = notify;
        this.events = events;

        subscribe(this.events.CREATE_ORDER, this.onCreateOrder)
    }

    onCreateOrder = (cartData) =>{
        this.model.insertOrderData = cartData;
        this.view.render();
    }

    onBackToCart = () => {
        this.notify(this.events.BACK_FROM_ORDER);
    }
}