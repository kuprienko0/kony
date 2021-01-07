import ViewContent from "./view-content.js";
import ModelContent from "./model-content.js";

export default class ControllerContent {
    constructor({subscribe, events, notify}) {
        this.view = new ViewContent(this.onShowDetails);
        this.model = new ModelContent();

        this.notify = notify;
        this.events = events;

        subscribe(events.AFTER_SORT, this.onSort);
        subscribe(events.AFTER_SEARCH, this.onSearch);

        this.init();
    };

    init = async () => {
        const data = await this.model.getData();
        this.notify(this.events.ON_DATA_LOAD, data)
        this.view.render(data);
    };

    onShowDetails = (elem) => {
        this.notify(this.events.SHOW_DETAILS_MODAL, elem)
    };

    onSort = (data) => this.view.render(data);
    onSearch = (data) => this.view.render(data);
}