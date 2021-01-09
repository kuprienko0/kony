export default class ModelOrder{
    orderData;
    set insertOrderData(data){
        this.orderData = [...data]
    }
}