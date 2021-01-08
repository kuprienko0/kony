export default class ModelPagination{
    products;
    productsPerPage = 10;
    activePageNumber = 1;
    pages;

    set setProducts(data) {
        this.products = [...data];
    }

    set setCurrentPage(pageNumber) {
        this.activePageNumber = pageNumber;
    }

    get pagesNumber() {
        return this.pages;
    }

    get activePageNumber() {
        return this.activePageNumber;
    }

    paginateData = () => {
        this.pages = Math.ceil(this.products.length / this.productsPerPage);
        return [...this.products].splice((this.activePageNumber - 1) * this.productsPerPage, this.productsPerPage);
    }
}