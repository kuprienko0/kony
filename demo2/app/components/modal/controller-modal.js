import ViewModal from "./view-modal.js";

export default class ControllerModal{
    constructor({ subscribe, events, notify }) {
        this.view = new ViewModal();

        subscribe(events.SHOW_DETAILS_MODAL, this.onShow);

        this.notify = notify;
        this.events = events;
    }
    onShow = (data) =>{
        this.view.showDetails(data);
    };


}