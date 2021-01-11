import ModelOrder from "./model-order.js";
import ViewOrder from "./view-order.js";

export default class ControllerOrder{
    constructor({notify, subscribe, events}) {
        this.model = new ModelOrder(this.setInvalidFormField, this.setValidFormField);
        this.view = new ViewOrder(this.onBackToCart, this.sendOrder);

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

    sendOrder = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const order = this.model.validateForm();
        if (order) {
            this.notify(this.events.SEND_ORDER, order);
        }
    }

    setInvalidFormField = (field) => {
        this.view.setInvalidField(field);
    }

    setValidFormField = (field) => {
        this.view.setValidField(field);
    }
}