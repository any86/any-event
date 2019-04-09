import { Listener } from './interface';
export default class EventEmitter {
    private _listenersMap;
    constructor();
    on(eventName: string, listener: Listener): EventEmitter;
    once(eventName: string, listener: Listener): EventEmitter;
    off(eventName: string, listener?: Listener): EventEmitter;
    emit(eventName: string, ...payload: any): boolean;
    has(eventName: string): boolean;
    getEventNames(): string[];
    destroy(): void;
}
