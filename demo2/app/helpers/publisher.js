export default class Publisher {
    listeners = {};

    subscribe = (eventType, callback) => {
        this.getListeners(eventType).push(callback);
    }

    unsubscribe = (eventType, callback) => {
        this.listeners[eventType] = this.getListeners(eventType).filter(func => func != callback);
    }

    notify = (eventType, data) => {
        this.getListeners(eventType).forEach(callback => callback(data));
    }

    getListeners = eventType => {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }

        return this.listeners[eventType];
    }
}