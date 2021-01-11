export default class ModelOrder{
    orderData;
    regExps = {
        name: /^[a-zA-Zа-яА-Я]{1,}$/gm,
        surname: /^[a-zA-Zа-яА-Я]{1,}$/gm,
        email: /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/,
        phone: /[0]\d{9}/,
        city: /^[a-zA-Zа-яА-Я]{1,}$/gm,
        address: /^[a-zA-Zа-яА-Я 0-9/.()]{1,}$/gm,
        payment: /^[1]|[2]{1}$/gm,
    }

    constructor(setInvalidFormField, setValidFormField) {
        this.setInvalidFormField = setInvalidFormField;
        this.setValidFormField = setValidFormField;
    }

    set insertOrderData(data){
        this.orderData = {...data}
    }

    validateForm = () =>{
        const form = document.forms.createOrder.elements;
        let isValid = true;
        Object.entries(this.regExps).forEach(([key, regExp]) => {
            if (!form[key].value.match(regExp)){
                isValid = false;
                this.setInvalidFormField(form[key]);
            } else {
                this.setValidFormField(form[key]);
            }
        });
        if (isValid){
            this.writeOrderToHistory({
                date: new Date().toISOString(),
                totalPrice: this.orderData.totalPrice,
                email: form.email.value,
            });
            return `
              *Date:* ${new Date().toISOString()}
              %0A*Total price:* ${this.orderData.totalPrice}
              %0A*Products:* 
              %0A|*ID*|*Name*|*Amount*|
            ${this.orderData.data.map((item)=>`
              %0A|${item.ID}|${item.productName}|${item.amount}|
            `).join('')}
              %0A*Name:* ${form.name.value}
              %0A*Surname:* ${form.surname.value}
              %0A*Email:* ${form.email.value}
              %0A*Phone:* ${form.phone.value}
              %0A*City:* ${form.city.value}
              %0A*Address:* ${form.address.value}
              %0A*Payment:* ${form.payment.value === '1' ? 'Cash to the courier' : 'Payment online'}
            `;
        }
        return false;
    }

    writeOrderToHistory = (newOrder) => {
        const prevHistory = JSON.parse(localStorage.getItem('order-history') || '[]');
        localStorage.setItem('order-history', JSON.stringify([...prevHistory, newOrder]));
    }
}