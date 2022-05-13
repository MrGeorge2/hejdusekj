import { Reducer } from "redux";
import * as types from './types';

const initialState: types.SnakeGameStateType = {
    blocks: [{
        x: Math.floor(types.PLAYGROUND_WIDTH / 2) + 1,
        y: Math.floor(types.PLAYGROUN_HEIGHT / 2) + 1,
        blockType: types.BlockType.Head
    }],
    score: 0,
    snakeVelocity: 0,
    direction: types.SnakeDirection.Up
}

export const snakeReducer: Reducer<types.SnakeGameStateType> = (state  = initialState, action: types.SnakeActions): Readonly<types.SnakeGameStateType> => {
    switch (action.type) {
        case (types.START_GAME): {
            return {
                ...state,
                snakeVelocity: types.INITIAL_VELOCITY
            }
        }

        case (types.SET_BLOCKS): {
            return {
                ...state,
                blocks: [...action.payload]
            }
        }

        default: { 
            return {...state }
        }
    }
}