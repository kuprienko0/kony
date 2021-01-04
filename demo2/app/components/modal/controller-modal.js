import ViewModal from "./view-modal.js";
import ModelModal from "./model-modal.js";

export default class ControllerModal{
    constructor() {
        this.model = new ModelModal();
        this.view = new ViewModal();
    }
}