export default class ModelBot{
    get url(){


        return `https://api.telegram.org/bot${ this.token }/sendMessage?chat_id=${ this.chatId }&parse_mode=MarkdownV2&text=`;
    }

    send = order => {
        fetch(`${ this.url }${ order }`);
    }

    initTokens = _ => {
        this.token = localStorage.getItem('bot');
        this.chatId = localStorage.getItem('chat');
    }

}