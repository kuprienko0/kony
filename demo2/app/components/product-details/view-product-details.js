export default class ViewProductDetails {
    bootstrapModal = new bootstrap.Modal(document.getElementById('modal'));
    modalContent = document.querySelector('#modal .modal-content');


    constructor(onAddCart) {
        this.onAddCart = onAddCart;
    }



    showDetails = (data) => {
        this.modalContent.innerHTML = `
        <div class="modal-header bg-warning bg-gradient">
             <h5 class="modal-title ">${data.productName}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <img src="${data.img}" class="card-img-top" alt="...">
            <div class="modal-body">
                <p><b>Ingredients:</b> ${data.ingredients}</p>
                <p><b>Manufacture:</b> ${data.manufacture}</p>
            </div>
            <div class="product-info d-flex justify-content-around">
                    <p class="card-text fs-4">Units: ${data.units}</p>
                    <p class="card-text fs-4">Price: ${data.price} ₴</p>
                </div>
            <div class="modal-footer" >
                <button type="button" class="addToCart btn btn-secondary" data-bs-dismiss="modal">Add to cart</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
        `;
        this.modalContent.querySelector('.addToCart').addEventListener('click', ()=>this.onAddCart(data))
        this.bootstrapModal.show();
    }


}