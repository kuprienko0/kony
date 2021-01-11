import ViewProductDetails from "./view-product-details.js";

export default class ControllerProductDetails{
    constructor({ subscribe, events, notify  }) {
        this.view = new ViewProductDetails(this.onAddCart);

        this.notify = notify;
        this.events = events;

        subscribe(events.SHOW_DETAILS_MODAL, this.onShowDetails);
    }

    onShowDetails = (product) =>{
        this.view.showDetails(product);
    }

    onAddCart = (elem) => {
        this.notify(this.events.ON_ADD_CART, elem)
    }



}