import ViewModal from "./view-modal.js";
import ModelModal from "./model-modal.js";

export default class ControllerModal{
    constructor({ subscribe, events, notify }) {
        this.model = new ModelModal();
        this.view = new ViewModal();


        subscribe(events.SHOW_DETAILS_MODAL, this.onShow);

        this.notify = notify;
        this.events = events;
    }
    onShow = (data) =>{
        this.view.showDetails(data);
    }
}