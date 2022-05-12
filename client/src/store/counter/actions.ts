import * as types from './types'

export const AddAction = (payload: number = 0): types.AddType => {
    return {
        type: types.ADD,
        payload: payload
    }
}

export const SubtrackAction = (payload: number = 0): types.SubtrackType => {
    return {
        type: types.SUBTRACK,
        payload: payload
    }
}