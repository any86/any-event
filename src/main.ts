interface Listeners {
    [propName: string]: (() => void)[];
};

export default class EventEmitter {
    public listeners: Listeners;

    constructor() {
        this.listeners = {};
    };

    on(eventName: string, listener: () => void) {
        if (undefined === this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listener);
    };

    off(eventName: string, listener: () => void) {

    };
};