export default class ViewOrderHistory{
    historyBlock = document.querySelector('.header-buttons');
    bootstrapModal = new bootstrap.Modal(document.getElementById('modal'));
    modalContent = document.querySelector('#modal .modal-content');

    constructor(onShowHistory) {
        this.onShowHistory = onShowHistory;
    }

    render = () => {
        this.historyBlock.insertAdjacentHTML('afterbegin', '<button type="button" class="history-btn btn btn-secondary me-3 h-25">History of orders</button>');
        this.historyBlock.querySelector('.history-btn').addEventListener('click', this.onShowHistory);
    }

    showOrderHistory = (orderData) => {
        if (!orderData.length) {
            this.modalContent.innerHTML = `
                 <div class="modal-header bg-warning bg-gradient">
                    <h5 class="modal-title "><i class="bi bi-cart2"></i> History of orders</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="w-100 d-flex justify-content-center">No orders :(</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            `;
            return this.bootstrapModal.show();
        }
        this.modalContent.innerHTML = `
             <div class="modal-header bg-warning bg-gradient">
                <h5 class="modal-title "><i class="bi bi-cart2"></i> History of orders</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Email</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderData.map((elem, index) => `
                            <tr>
                                <th scope="row">${index + 1}</th>
                                <td>${new Date(elem.date).toLocaleString()}</td>
                                <td>${elem.email}</td>
                                <td>${elem.totalPrice}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        `;
        this.bootstrapModal.show();
    }
}