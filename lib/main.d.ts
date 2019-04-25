declare type Listener = ((...payload: any) => void) & {
    isOnce?: boolean;
};
export default class EventEmitter {
    private _listenersMap;
    constructor();
    on(eventName: string, listener: Listener): EventEmitter;
    once(eventName: string, listener: Listener): EventEmitter;
    off(eventName: string, listener?: Listener): EventEmitter;
    emit(eventName: string, ...payload: any): boolean;
    has(eventName: string): boolean;
    getEventNames(): string[];
    eventNames(): string[];
    destroy(): void;
}
export {};
