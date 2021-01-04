import ViewContent from "./view-content.js";
import ModelContent from "./model-content.js";

export default class ControllerContent{
    constructor({ subscribe, events, notify }) {
        this.view = new ViewContent(this.showDetails);
        this.model = new ModelContent();

        this.notify = notify;
        this.events = events;

        this.init();
    };

    init = async () =>{
        const data = await this.model.getData();
        this.view.render(data);
    };

    showDetails = (data) =>{
        this.notify(this.events.SHOW_DETAILS_MODAL, data)
    }
}