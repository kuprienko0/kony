export default class ModelSortSearch{
    products;
    sortMethods = {
        'price-exp' : (a,b) => a.price - b.price,
        'price-cheap' : (a,b) => b.price - a.price
    };
    sort = (type) =>{
        this.products = this.products.sort(this.sortMethods[type]);
        return this.products;
    };

    search = searchText => {
        const textToLower = searchText.toLowerCase();
        console.log(searchText, this.products);
        return this.products.filter(({ productName }) => productName.toLowerCase().includes(textToLower));

    };
};