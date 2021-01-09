export default class ViewCart{
    bootstrapModal = new bootstrap.Modal(document.getElementById('modal'));

    constructor(onShowCart, onIncreaseProductAmount, onReduceProductAmount, onDeleteProduct, onCreateOrder) {
        this.onShowCart = onShowCart;
        this.onIncreaseProductAmount = onIncreaseProductAmount;
        this.onReduceProductAmount = onReduceProductAmount;
        this.onDeleteProduct = onDeleteProduct;
        this.onCreateOrder = onCreateOrder;
    }

    cartBlock = document.querySelector('.header');
    render = () => {
        this.cartBlock.innerHTML = `
        <nav class="navbar navbar-dark bg-dark bg-gradient">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Food Shop</a>
                <button type="button" class="btn-cart cart-btn"></button>
            </div>
        </nav>`
        this.cartBlock.querySelector('.btn-cart').addEventListener('click', () => this.onShowCart());


    }

    modalContent = document.querySelector('#modal .modal-content');
    updateCart = (cartData) => {
        this.modalContent.innerHTML = `
        <div class="modal-header bg-warning bg-gradient">
            <h5 class="modal-title "><i class="bi bi-cart2"></i> Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        `
        const modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        if (cartData.length) {
            modalBody.innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Total price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
        } else {
            modalBody.innerHTML = '<div class="d-flex justify-content-center">Your cart is empty</div>';
        }

        const tBody = modalBody.querySelector('tbody');
        cartData.forEach((elem, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${elem.productName}</td>
                    <td>${elem.price}</td>
                    <td>${elem.amount}</td>
                    <td>${Number(elem.price) * elem.amount}</td>
                    <td>
                        <i class="bi bi-plus-circle-fill increase"></i>
                        <i class="bi bi-dash-circle-fill reduce"></i>
                        <i class="bi bi-trash-fill"></i>
                    </td>
                </tr>
            `;
            tr.querySelector('.increase').addEventListener('click', () => this.onIncreaseProductAmount(elem.ID))
            tr.querySelector('.reduce').addEventListener('click', (event) => this.onReduceProductAmount(elem.ID))
            tr.querySelector('.bi-trash-fill').addEventListener('click', () => this.onDeleteProduct(elem.ID))
            tBody.appendChild(tr);
        });
        this.modalContent.appendChild(modalBody);

        if (cartData.length) {
            const modalFooter = document.createElement('div');
            modalFooter.classList.add('modal-footer');
            modalFooter.innerHTML = `
                <button type="button" class="continue-shopping btn btn-secondary" data-bs-dismiss="modal">Сontinue shopping</button>
                <button type="button" class="create-order btn btn-primary">Create the order</button>
            `;
            modalFooter.querySelector('.create-order').addEventListener('click', () => this.onCreateOrder() );
            this.modalContent.appendChild(modalFooter);
        }
    }

    showCart = () => this.bootstrapModal.show();
}