export default class ViewContent {
    products = document.getElementById('products');
    modalContent = document.querySelector('#modal .modal-content');
    bootstrapModal = new bootstrap.Modal(document.getElementById('modal'));
    render = (data) =>{
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
            card.querySelector('.btn-info').addEventListener('click', ()=>this.showDetails(elem));
            this.products.appendChild(card);
        } );
    };
    showDetails = (data) =>{
        this.modalContent.innerHTML = `
        <div class="modal-header bg-success bg-gradient">
                <h5 class="modal-title ">${data.productName}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <img src="${data.img}" class="card-img-top" alt="...">
            <div class="modal-body">
                <p><b>Ingredients:</b> ${data.ingredients}</p>
                <p><b>Manufacture:</b> ${data.manufacture}</p>
                <p><b>Amount:</b> ${data.amount}</p>
            </div>
            <div class="product-info d-flex justify-content-around">
                    <p class="card-text fs-4">Units: ${data.units}</p>
                    <p class="card-text fs-4">Price: ${data.price} ₴</p>
                </div>
            <div class="modal-footer" >
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Add to cart</button>
                <button type="button" class="btn btn-primary">Close</button>
            </div>
        `
        this.bootstrapModal.show();
    }

}