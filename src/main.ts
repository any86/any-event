type Listener = (payload:any) => void;
interface Listeners {
    [propName: string]: Listener[];
};


export default class EventEmitter {
    public listeners: Listeners;

    constructor() {
        this.listeners = {};
    };

    on(eventName: string, listener: Listener) {
        if (undefined === this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listener);
    };

    off(eventName: string, listener: Listener) {
        // 指定事件的函数栈
        const listeners = this.listeners[eventName];
        const index = listeners.findIndex((fn: Listener) => fn === listener);
        listeners.splice(index, 1);
    };

    emit(eventName: string, payload: any){
        const listeners = this.listeners[eventName];
        for(let listener of listeners) {
            listener(payload);
        }
    };
};