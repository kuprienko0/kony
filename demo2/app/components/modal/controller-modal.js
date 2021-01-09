import ViewModal from "./view-modal.js";

export default class ControllerModal{
    constructor({ subscribe, events  }) {
        this.view = new ViewModal();

        subscribe(events.SHOW_DETAILS_MODAL, this.onShowDetails);
    }

    onShowDetails = (data) =>{
        this.view.showDetails(data);
    }



}