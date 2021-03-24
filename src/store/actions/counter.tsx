import { Action } from "redux";

export const ADD_COUNTER = '[Counter] Increment Counter';
export const SUB_COUNTER = '[Counter] Decrement Counter';


export class AddCounter implements Action {
    readonly type = ADD_COUNTER;
    constructor(public payload: number) { }
}
export class SubCounter implements Action {
    readonly type = SUB_COUNTER;
    constructor(public payload: number) { }
}

export type CounterActions = AddCounter | SubCounter;
