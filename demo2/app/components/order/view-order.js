export default class ViewOrder{
    modalContent = document.querySelector('#modal .modal-content');

    constructor(onBackToCart, sendOrder) {
        this.onBackToCart = onBackToCart;
        this.sendOrder = sendOrder;
    }

    render = () =>{
        this.modalContent.innerHTML = `
        <div class="modal-header bg-warning bg-gradient">
            <h5 class="modal-title "><i class="bi bi-person-circle"></i>User Information</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        `;

        const userInformationBody = document.createElement('div');
        userInformationBody.classList.add('modal-body');
        userInformationBody.innerHTML = `
            <form class="order-form">
                <div class="mb-3">
                    <label for="userName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="userName" name="name">
                </div>
                <div class="mb-3">
                    <label for="userSurname" class="form-label">Surname</label>
                    <input type="text" class="form-control" id="userSurname" name="surname">
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Phone number</label>
                    <input type="text" class="form-control" id="phoneNumber" name="phone" aria-describedby="phoneHelp">
                    <div id="phoneHelp" class="form-text">We'll never share your phone number with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="userEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="userCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="userCity" name="city">
                </div>
                <div class="mb-3">
                    <label for="userAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="userAddress" name="address">
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Payment method</option>
                    <option value="1">Cash to the courier</option>
                    <option value="2">Payment online</option>
                </select>
                <div class="d-flex justify-content-end mt-2">
                    <button type="button" class="btn btn-secondary back-to-cart-btn">Back to cart</button>
                    <button type="submit" class="btn btn-primary send-order-btn">Submit</button>
                </div>
            </form>
        `;
        userInformationBody.querySelector('.order-form').addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e)
        })
        userInformationBody.querySelector('.back-to-cart-btn').addEventListener('click', this.onBackToCart);
        userInformationBody.querySelector('.send-order-btn').addEventListener('click', this.sendOrder());
        this.modalContent.appendChild(userInformationBody);
    }
}