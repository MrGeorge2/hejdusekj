import * as types from './types'

/**
 * Add leader (fetch from api) to the store.
 */
export const AddLeaders = (payload: readonly types.Leader[]): types.AddLeadersType => {
    return {
        type: types.ADD_LEADERS,
        payload: payload
    }
}

/**
 * Add new leader
 */
export const AddNewLeaderActionCreator = (payload: Readonly<types.Leader>): types.AddNewLeaderType => {
    return {
        type: types.ADD_NEW_LEADER,
        payload: payload
    }
}