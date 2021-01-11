import ModelBot from "./model-bot.js";

export default class ControllerBot {
    constructor({subscribe, events}) {
        this.model = new ModelBot();

        subscribe(events.SEND_ORDER, this.onSend);
    }

    onSend = (order) => {
        this.model.initTokens()
        this.model.send(order);
    }
}