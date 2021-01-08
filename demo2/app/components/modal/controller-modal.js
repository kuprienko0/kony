import ViewModal from "./view-modal.js";

export default class ControllerModal{
    constructor({ subscribe, events, notify }) {
        this.view = new ViewModal();

        subscribe(events.SHOW_DETAILS_MODAL, this.onShowDetails);
        subscribe(events.SHOW_CART_MODAL, this.onShowCart);

        this.notify = notify;
        this.events = events;
    }
    onShowDetails = (data) =>{
        this.view.showDetails(data);
    };

    onShowCart = () =>{
        this.view.showCart();
    };


}