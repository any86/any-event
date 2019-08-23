declare type Listener = ((...payload: any) => void) & {
    isOnce?: boolean;
};
export default class AnyEvent {
    private _listenersMap;
    constructor();
    on(eventName: string, listener: Listener): AnyEvent;
    once(eventName: string, listener: Listener): AnyEvent;
    off(eventName: string, listener?: Listener): AnyEvent;
    emit(eventName: string, ...payload: any): boolean;
    has(eventName: string): boolean;
    getEventNames(): string[];
    eventNames(): string[];
    destroy(): void;
}
export {};
