import ViewOrderHistory from "./view-order-history.js";
import ModelOrderHistory from "./model-order-history.js";

export default class ControllerOrderHistory{
    constructor() {
        this.view = new ViewOrderHistory(this.onShowHistory);
        this.model = new ModelOrderHistory();

        this.init();
    }

    init = () => this.view.render();

    onShowHistory = () => {
        this.view.showOrderHistory(this.model.actualHistory);
    }
}