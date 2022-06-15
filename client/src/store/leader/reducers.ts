import * as types from './types';


const initialState: types.LeaderState = {
    leaders: [],
}

export const leaderReducer = (state = initialState, action: types.LeaderActions): Readonly<types.LeaderState> => {
    switch (action.type) {
        case types.ADD_LEADERS:{
            return {
                ...state,
                leaders: [...state.leaders, ...action.payload],
            }
        }

       default: {
            return { ...state }
        }
    }
}