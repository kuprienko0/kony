export default class ModelSortSearch{
    activeFilters ={
        sortBy: null,
        searchBy: '',
        activeCategories: {
            'Beverages': true,
            'Bread & Bakery': true,
            'Dairy, Eggs & Cheese': true,
            'Fruits & Vegetables': true,
            'Grains, Pasta & Sides': true,
            'Meat & Seafood': true,
            'Sweets': true,
            'Snacks': true,
            'Sauces': true,
            'Tea & Coffee': true,
        }
    }
    products;
    sortMethods = {
        'price-cheap' : (a,b) => a.price - b.price,
        'price-exp' : (a,b) => b.price - a.price
    }

    get activeFilters(){
        return this.activeFilters;
    }

    set activeFilters(newFilter){
        this.activeFilters = newFilter;
    }

    filterData = () =>{
        let data = [...this.products];
        data = data.filter(({ productName }) => productName.toLowerCase().includes(this.activeFilters.searchBy.toLowerCase()));
        data = data.filter(({ category }) => this.activeFilters.activeCategories[category]);
        if (this.activeFilters.sortBy){
            data.sort(this.sortMethods[this.activeFilters.sortBy]);
        }
        return data;
    }
};