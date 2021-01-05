export default class ViewSortSearch {
    constructor(onSort) {
    this.onSort = onSort;

    };

    render = () =>{
        const sortSearch = document.querySelector('.sort-search');
        sortSearch.innerHTML =  `
            <div class="sort">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter for price
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" data-type="exp" href="#">Expensive first</a></li>
                    <li><a class="dropdown-item" data-type="cheap" href="#">Cheap first</a></li>
                </ul>
            </div>`
        sortSearch.querySelector('a[data-type=exp]').addEventListener('click', ()=> this.onSort('price-exp'));
        sortSearch.querySelector('a[data-type=cheap]').addEventListener('click', ()=> this.onSort('price-cheap'));
    };



};