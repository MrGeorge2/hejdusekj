/**  Counter State  **/
export type CounterStateType = {
    count: number
}

/** Actions  */

export const ADD = "counter/ADD";
export const SUBTRACK = "counter/SUBTRACK";

export type AddType = {
    type: typeof ADD
    payload?: number
}

export type SubtrackType = {
    type: typeof SUBTRACK
    payload?: number
}

export type CounterActions = AddType | SubtrackType;