export type Listener = ((...payload: any) => void) & { isOnce?: boolean }

export interface ListenersMap {
    [propName: string]: Listener[];
}