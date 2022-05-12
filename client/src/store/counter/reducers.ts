import { Reducer } from 'redux'
import * as types from './types'


const initialState: types.CounterStateType = {
    count: 0
}

export const counterReducer: Reducer<types.CounterStateType> = (state = initialState, action: types.CounterActions): Readonly<types.CounterStateType> => {
    if (!action.payload){
        return {...state}
    }

    switch (action.type) {
        case (types.ADD): {
            return {
                ...state,
                count: state.count + action.payload
            }
        }

        case (types.SUBTRACK): {
            return {
                ...state,
                count: state.count - action.payload
            }
        }
    }
    
}