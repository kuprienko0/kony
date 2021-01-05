export default class ModelSortSearch{
    products;
    sortMethods = {
        'price-exp' : (a,b) => a.price - b.price,
        'price-cheap' : (a,b) => b.price - a.price
    };
    sort = (type) =>{
        return this.products.sort(this.sortMethods[type]);
    }
};