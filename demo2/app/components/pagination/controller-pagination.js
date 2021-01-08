import ViewPagination from "./view-pagination.js";
import ModelPagination from "./model-pagination.js";

export default class ControllerPagination{
    constructor({ subscribe, events, notify }) {
        this.view = new ViewPagination(this.onChangePage);
        this.model = new ModelPagination();

        this.notify = notify;
        this.events = events;

        subscribe(events.ON_DATA_LOAD, this.onDataLoad);
        subscribe(events.ON_FILTER, this.onDataLoad);

    }

    onDataLoad = (data) => {
        this.model.setProducts = data;
        const paginatedData = this.model.paginateData();
        this.view.render(this.model.pagesNumber, this.model.activePageNumber);
        this.notify(this.events.ON_PAGINATE, paginatedData);
    }

    onChangePage = (pageNumber) => {
        this.model.setCurrentPage = pageNumber;
        const paginatedData = this.model.paginateData();
        this.view.render(this.model.pagesNumber, this.model.activePageNumber);
        this.notify(this.events.ON_PAGINATE, paginatedData);
    }

}