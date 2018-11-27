type Listener = ((...payload: any) => void) & { isOnce?: boolean };
interface ListenersMap {
    [propName: string]: Listener[];
};

export default class EventEmitter {
    public listenersMap: ListenersMap;
    public addListener: (eventName: string, listener: Listener) => void;
    public removeListener: (eventName: string, listener: Listener) => void;

    constructor() {
        this.listenersMap = {};
        this.addListener = this.on;
        this.removeListener = this.off;
    };

    on(eventName: string, listener: Listener) {
        if (undefined === this.listenersMap[eventName]) {
            this.listenersMap[eventName] = [];
        }
        this.listenersMap[eventName].push(listener);
        return this;
    };

    /**
     * 添加单次监听器 listener 到名为 eventName 的事件。 
     * 当 eventName 事件下次触发时，监听器会先被移除，然后再调用。
     */
    once(eventName: string, listener: Listener) {
        listener.isOnce = true;
        this.on(eventName, listener);
        return this;
    };

    off(eventName: string, listener: Listener) {
        // 指定事件的函数栈
        const listeners = this.listenersMap[eventName];
        if (undefined !== listeners) {
            const index = listeners.findIndex((fn: Listener) => fn === listener);
            listeners.splice(index, 1);
        }
        return this;
    };

    /**
     * 移除全部监听器或指定的 eventName 事件的监听器。
     * @param {String} 事件名 
     */
    removeAllListeners(eventName?: string) {
        if (undefined === eventName) {
            this.listenersMap = {};
        } else {
            this.listenersMap[eventName] = [];
        }
        return this;
    };

    /**
     * 按照监听器注册的顺序，同步地调用每个注册到名为 eventName 的事件的监听器，并传入提供的参数。
     * @param {String|Symbol} 事件名 
     * @param {Any} 载荷数据 
     * @returns {Boolean} 如果事件有监听器，则返回 true，否则返回 false。
     */
    emit(eventName: string, ...payload: any) {
        const listeners = this.listenersMap[eventName];
        if (undefined !== listeners && 0 < listeners.length) {
            for (let [index, listener] of listeners.entries()) {
                if (listener.isOnce) {
                    let listenerClone = listener;
                    listeners.splice(index, 1);
                    listenerClone(...payload);
                } else {
                    listener(...payload);
                }
            }
            return true;
        } else {
            return false;
        }
    };
};