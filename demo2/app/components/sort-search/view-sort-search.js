export default class ViewSortSearch {
    constructor(onSort, onSearch) {
    this.onSort = onSort;
    this.onSearch = onSearch;
    };

    render = () =>{
        const sortSearch = document.querySelector('.sort-search');
        sortSearch.innerHTML =  `
            <div class="sort-search d-flex justify-content-around bg-secondary bg-gradient">
                <div class="sort">
                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter for price
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" data-type="exp" href="#">Expensive first</a></li>
                        <li><a class="dropdown-item" data-type="cheap" href="#">Cheap first</a></li>
                    </ul>
                </div>
                <form class="d-flex">
                    <input class=" search-input form-control me-2" type="search" placeholder="Search" aria-label="Search">
                </form>
            </div>`
        sortSearch.querySelector('a[data-type=exp]').addEventListener('click', (e)=> this.onSort(e,'price-exp'));
        sortSearch.querySelector('a[data-type=cheap]').addEventListener('click', (e)=> this.onSort(e,'price-cheap'));

        sortSearch.querySelector('input.search-input').addEventListener('input', (e)=> this.onSearch(e));


    };



};