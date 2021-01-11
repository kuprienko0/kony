export default class ModelOrderHistory{
    get actualHistory(){
        return JSON.parse(localStorage.getItem('order-history') || '[]');
    }
}