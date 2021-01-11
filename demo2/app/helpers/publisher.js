import events from './events.js';
export default class Publisher {

    constructor() {
        if (typeof Publisher.instance === 'object') return Publisher.instance;

        Publisher.instance = this;

        return this;
    }

    listeners = {};

    subscribe = (eventType, callback) => {
        this.getListeners(eventType).push(callback);
    }

    unsubscribe = (eventType, callback) => {
        this.listeners[eventType] = this.getListeners(eventType).filter(func => func != callback);
    }

    notify = (eventType, data) => {
        console.log(eventType)
        this.getListeners(eventType).forEach(callback => callback(data));
    }

    getListeners = eventType => {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }

        return this.listeners[eventType];
    };

    get methods(){
        return {
            notify : this.notify,
            unsubscribe : this.unsubscribe,
            subscribe : this.subscribe,
            events
        }
    }
}