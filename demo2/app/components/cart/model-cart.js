export default class ModelCart{
    productsInCart = [];
    countPrice = 0;

    get getCartData () {
        return this.productsInCart;
    }

    get totalPrice (){
        return this.countPrice;
    }

    clearCart = () => {
        this.productsInCart = [];
    }

    addToCart = (product) =>{
        for (let i = 0; i < this.productsInCart.length; i++){
            if (this.productsInCart[i].ID === product.ID){
                if (Number(this.productsInCart[i].amountInStore) >= this.productsInCart[i].amount + 1) {
                    this.productsInCart[i].amount++;
                    break;
                }
                break;
            }

            if (i===this.productsInCart.length-1){
                this.productsInCart.push({...product,amount: 1});
                break;
            }
        }
        if (!this.productsInCart.length) {
            this.productsInCart.push({...product,amount: 1});
        }
        this.countTotalPrice();
    }

    countTotalPrice = () =>{
        this.countPrice = this.productsInCart.reduce((currValue, nextItem) =>{
            return currValue + nextItem.price * nextItem.amount
        },0)
    }

    removeFromCart = (productId) =>{
        const cartWithRemote = this.productsInCart.filter((item)=> item.ID !== productId);
        this.productsInCart = [...cartWithRemote];
        this.countTotalPrice();
    }

    reduceProduct = (productID) => {
        for (let i = 0; i < this.productsInCart.length; i++) {
            if (this.productsInCart[i].ID === productID) {
                this.productsInCart[i].amount <= 1 ? this.removeFromCart(productID) : this.productsInCart[i].amount--;
                break;
            }
        }
        this.countTotalPrice();
    }

    increaseProduct = (productID) => {
        for (let i = 0; i < this.productsInCart.length; i++) {
            if (this.productsInCart[i].ID === productID) {
                if (Number(this.productsInCart[i].amountInStore) >= this.productsInCart[i].amount + 1) {
                    this.productsInCart[i].amount++;
                    break;
                }
                break;
            }
        }
        this.countTotalPrice();
    }
}