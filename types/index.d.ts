export type Listener = ((...payload: any) => void) & { isOnce?: boolean }

export interface ListenersMap {
    [propName: string]: Listener[];
}

declare class EventEmitter {
    public listenersMap: ListenersMap;

    public on: (eventName: string, listener: Listener) => EventEmitter;

    public once: (eventName: string, listener: Listener) => EventEmitter;

    public off: (eventName: string, listener: Listener) => EventEmitter;

    public emit: (eventName: string, ...payload: any) => boolean;

    public destroy: () => void;
}