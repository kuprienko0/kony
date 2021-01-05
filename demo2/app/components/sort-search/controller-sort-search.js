import ViewSortSearch from "./view-sort-search.js";
import ModelSortSearch from "./model-sort-search.js";

export default class  ControllerSortSearch{
    constructor({ subscribe, events, notify }) {
        this.view = new ViewSortSearch(this.onSort);
        this.model = new ModelSortSearch();

        this.notify = notify;
        this.events = events;
        subscribe(events.ON_DATA_LOAD, this.onDataLoad)

        this.init();
    };

    init = () =>{
        this.view.render();
    };

    onDataLoad = (data) =>{
        this.model.products = data;
    };

    onSort = (event, type) =>{
        event.preventDefault();
        const sortedData = this.model.sort(type);
        this.notify(this.events.AFTER_SORT, sortedData)
    }

}