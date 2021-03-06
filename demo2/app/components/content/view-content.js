export default class ViewContent {
    constructor(onShowDetails, onAddCart) {
        this.onShowDetails = onShowDetails;
        this.onAddCart = onAddCart;
    }

    products = document.getElementById('products');

    render = (data) =>{
        debugger;
        this.products.innerHTML = '';
        console.log(data)
        data.forEach((elem) =>{
            const card = document.createElement('div');
            card.classList.add('card-wrapper');
            card.innerHTML = `
            <div class="card product-card">
                <div class=" card-img d-flex justify-content-center"> 
                    <img src="${elem.img}" class="card-img-top" alt="...">
                </div>
                <div class="card-body ">
                    <p class="card-text  fw-bold fs-4" >${elem.productName}</p>
                    <div class="product-info d-flex justify-content-between">
                        <p class="card-text fst-italic fs-5">${elem.units}</p>
                        <p class="card-text fs-4">${elem.price} ₴</p>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <div class="btn-group d-flex " role="group" aria-label="Basic example">
                        <button type="button" class="btn-details btn btn-info">Details</button>
                        <button type="button" class="btn-on-cart btn btn-secondary">Add to cart</button>
                    </div>
                </div>
            </div>
            `;

           card.querySelector('.btn-details').addEventListener('click', ()=>this.onShowDetails(elem));
           card.querySelector('.btn-on-cart').addEventListener('click', ()=>this.onAddCart(elem));

           this.products.appendChild(card);
        } );
    };


}