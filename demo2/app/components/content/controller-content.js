import ViewContent from "./view-content.js";
import ModelContent from "./model-content.js";

export default class ControllerContent {
    constructor({subscribe, events, notify}) {
        this.view = new ViewContent(this.onShowDetails, this.onAddCart);
        this.model = new ModelContent();

        this.notify = notify;
        this.events = events;

        subscribe(events.ON_PAGINATE, this.onPaginate);

        this.init();
    }

    init = async () => {
        const data = await this.model.getData();
        this.view.render(data);
        this.notify(this.events.ON_DATA_LOAD, data)
    }

    onShowDetails = (elem) => {
        this.notify(this.events.SHOW_DETAILS_MODAL, elem)
    }

    onAddCart = (elem) => {
        this.notify(this.events.ON_ADD_CART, elem)
    }

    onFilter = (data) => this.view.render(data);

    onPaginate = (data) => this.view.render(data);
}