import ViewContent from "./view-content.js";
import ModelContent from "./model-content.js";

export default class ControllerContent{
    constructor() {
        this.view = new ViewContent();
        this.model = new ModelContent();
        this.init();
    };

    init = async () =>{
        const data = await this.model.getData();
        this.view.render(data);
    }
}