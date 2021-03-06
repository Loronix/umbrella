import {
    Fn,
    Fn0,
    IDeref,
    IID
} from "@thi.ng/api";
import { Transducer } from "@thi.ng/transducers";
import { Stream } from "./stream";
import { Subscription } from "./subscription";

export const enum State {
    IDLE,
    ACTIVE,
    DONE,
    ERROR,
    DISABLED // TODO currently unused
}

/**
 * Closing behavior for `StreamMerge` and `StreamSync`.
 */
export const enum CloseMode {
    NEVER,
    FIRST,
    LAST
}

/**
 * Reverse lookup for `State` enums
 */
// export const __State = (<any>exports).State;

export interface ISubscriber<T> {
    next: Fn<T, void>;
    error?: Fn<any, void>;
    done?: Fn0<void>;
    /**
     * Internal use only. Do not use.
     */
    __owner?: ISubscribable<any>;
    [id: string]: any;
}

export interface ISubscribable<T> extends IDeref<T>, IID<string> {
    subscribe<C>(
        sub: Partial<ISubscriber<T>>,
        xform: Transducer<T, C>,
        id?: string
    ): Subscription<T, C>;
    // subscribe<S extends Subscription<T, C>, C>(sub: S): S;
    subscribe<C>(sub: Subscription<T, C>): Subscription<T, C>;
    subscribe<C>(xform: Transducer<T, C>, id?: string): Subscription<T, C>;
    subscribe(sub: Partial<ISubscriber<T>>, id?: string): Subscription<T, T>;
    unsubscribe(sub?: Partial<ISubscriber<T>>): boolean;
    getState(): State;
}

export interface ISubscribableSubscriber<T>
    extends ISubscriber<T>,
        ISubscribable<any> {}

export interface IStream<T> extends ISubscriber<T> {
    cancel: StreamCancel;
}

export type StreamCancel = () => void;
export type StreamSource<T> = (sub: Stream<T>) => StreamCancel;

export let DEBUG = false;
