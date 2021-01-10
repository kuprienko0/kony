export default class ModelBot{
    get url(){
        const token = '1530316377:AAFUD1RozKwSYJNX-XR3m9SQVwuWZl9sZpU';
        const chatId = '385692306';

        return `https://api.telegram.org/bot${ token }/sendMessage?chat_id=${ chatId }&parse_mode=MarkdownV2&text=`;
    }

    send = order => {
        fetch(`${ this.url }${ order }`);
    }

}