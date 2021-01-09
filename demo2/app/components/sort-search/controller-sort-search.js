import ViewSortSearch from "./view-sort-search.js";
import ModelSortSearch from "./model-sort-search.js";

export default class  ControllerSortSearch{
    constructor({ subscribe, events, notify }) {
        this.view = new ViewSortSearch(this.onSort, this.onSearch, this.onFilter);
        this.model = new ModelSortSearch();

        this.notify = notify;
        this.events = events;
        subscribe(events.ON_DATA_LOAD, this.onDataLoad)

        this.init();
    }

    init = () =>{
        this.view.render(this.model.activeFilters.activeCategories);
    }

    onDataLoad = (data) =>{
        this.model.products = data;
    }

    updateFilter = (newFilters) =>{
        const filters = this.model.activeFilters;
        const updatedFilters = {...filters, ...newFilters};
        this.model.activeFilters = updatedFilters;
    }

    onFilter = (event, name) =>{
        this.updateFilter({activeCategories: {...this.model.activeFilters.activeCategories, [name]: event.target.checked}});
        const filteredData = this.model.filterData();
        this.notify(this.events.ON_FILTER, filteredData)
    }


    onSort = (event, type) =>{
        event.preventDefault();
        this.updateFilter({sortBy: type});
        const filteredData = this.model.filterData();
        this.notify(this.events.ON_FILTER, filteredData)
    }

    onSearch = (event) => {
        this.updateFilter({searchBy: event.target.value});
        const filteredData = this.model.filterData();
        this.notify(this.events.ON_FILTER, filteredData)
    }
}















