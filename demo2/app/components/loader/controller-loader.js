import ViewLoader from "./view-loader.js";

export default class ControllerLoader{
    constructor({ subscribe, unsubscribe, events }){
        this.view = new ViewLoader();

        subscribe(events.ON_DATA_LOAD, this.onLoad);
        this.unsubscribe = unsubscribe;

        this.events = events;
        this.render = this.view.render;

    }

    onLoad = _ => {
        this.unsubscribe(this.events.ON_DATA_LOAD, this.onLoad);
        this.view.hideLoader();
    }

}