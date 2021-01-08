export default class ViewSortSearch {
    constructor(onSort, onSearch, onFilter) {
    this.onSort = onSort;
    this.onSearch = onSearch;
    this.onFilter = onFilter;
    this.filterBlock = document.querySelector('.product-filter');
    };

    render = (categories) =>{
        const sortSearch = document.querySelector('.sort-search');
        sortSearch.innerHTML =  `
            <div class="sort-search d-flex justify-content-around bg-secondary bg-gradient">
                <div class="sort">
                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by price
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

        Object.entries(categories).forEach(([name, isActive]) => this.createCategory(name, isActive));
        this.filterBlock.insertAdjacentHTML('afterbegin','<p class="choose-category">Choose category:</p>')
    };


    createCategory = (name, isActive) => {
        const formCheck = document.createElement('div');
        formCheck.classList.add('form-check');
        formCheck.innerHTML = `
            <input class="form-check-input" type="checkbox" value="" id="${name}" checked="${isActive}">
                 <label class="form-check-label" for="${name}">
                        ${name}
                 </label>`
        formCheck.querySelector(".form-check-input").addEventListener('change', (e)=> this.onFilter(e,name));
        this.filterBlock.appendChild(formCheck);
    }



};