export default class ViewContent {
    constructor(onShowDetails) {
        this.onShowDetails = onShowDetails;
    }
    products = document.getElementById('products');

    render = (data) =>{
        console.log('blablabla');
        data.forEach((elem, index) =>{
            if (index === 0) return false;
            const card = document.createElement('div');
            card.classList.add('card', 'm-3', 'shadow-sm', 'col-xxl-2', 'col-xl-3', 'col-lg-4', 'col-md-4', 'col-sm-6', 'col-12');
            card.innerHTML = `
            <img src="${elem.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text fw-bold fs-4" >${elem.productName}</p>
                <div class="product-info d-flex justify-content-between">
                    <p class="card-text fst-italic fs-5">${elem.units}</p>
                    <p class="card-text fs-4">${elem.price} ₴</p>
                </div>
            </div>
            <div class="card-footer bg-transparent">
                <div class="btn-group d-flex " role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info">Details</button>
                    <button type="button" class="btn btn-secondary">Add to cart</button>
                </div>
            </div>
            `;
           card.querySelector('.btn-info').addEventListener('click', ()=>this.onShowDetails(elem));
            this.products.appendChild(card);
        } );
    };


}