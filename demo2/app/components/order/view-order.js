export default class ViewOrder{
    modalContent = document.querySelector('#modal .modal-content');

    constructor(onBackToCart) {
        this.onBackToCart = onBackToCart;
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
            <form>
                <div class="mb-3">
                    <label for="userName" class="form-label">Name</label>
                    <input type="email" class="form-control" id="userName">
                </div>
                <div class="mb-3">
                    <label for="userSurname" class="form-label">Surname</label>
                    <input type="email" class="form-control" id="userSurname">
                </div>
                <div class="mb-3">
                    <label for="phoneNumber" class="form-label">Phone number</label>
                    <input type="email" class="form-control" id="phoneNumber" aria-describedby="phoneHelp">
                    <div id="phoneHelp" class="form-text">We'll never share your phone number with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="userEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="userCity" class="form-label">City</label>
                    <input type="email" class="form-control" id="userCity">
                </div>
                <div class="mb-3">
                    <label for="userAddress" class="form-label">Address</label>
                    <input type="email" class="form-control" id="userAddress">
                </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Payment method</option>
                    <option value="1">Cash to the courier</option>
                    <option value="2">Payment online</option>
                </select>
                <div class="d-flex justify-content-end mt-2">
                    <button type="button" class="btn btn-secondary back-to-cart-btn">Back to cart</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        `;
        userInformationBody.querySelector('.back-to-cart-btn').addEventListener('click', this.onBackToCart);
        this.modalContent.appendChild(userInformationBody);
    }
}