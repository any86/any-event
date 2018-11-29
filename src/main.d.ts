import {Listener, ListenersMap} from './types';

declare class EventEmitter {
    public listenersMap: ListenersMap;

    public on: (eventName: string, listener: Listener) => EventEmitter;

    public once: (eventName: string, listener: Listener) => EventEmitter;

    public off: (eventName: string, listener: Listener) => EventEmitter;

    public emit: (eventName: string, ...payload: any) => boolean;

    public destroy: () => void;
}

export = EventEmitter;