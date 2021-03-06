import ViewLoader from "./view-loader.js";

export default class ControllerLoader{
    constructor({ subscribe, unsubscribe, events }){
        this.view = new ViewLoader();

        subscribe(events.ON_DATA_LOAD, this.onLoad);
        this.unsubscribe = unsubscribe;

        this.events = events;

        this.init();
    }

    init = () => this.view.render();

    onLoad = () => {
        this.unsubscribe(this.events.ON_DATA_LOAD, this.onLoad);
        this.view.hideLoader();
    }

}