import { Reducer } from "redux";
import * as types from './types';

const initialState: types.SnakeGameStateType = {
    blocks: [{
        x: Math.floor(types.PLAYGROUND_WIDTH / 2) + 1,
        y: Math.floor(types.PLAYGROUN_HEIGHT / 2) + 1,
        blockType: types.BlockType.Head
    }],
    food: {
        x: Math.round(Math.random() * types.PLAYGROUND_WIDTH),
        y: Math.round(Math.random() * types.PLAYGROUN_HEIGHT),
        blockType: types.BlockType.Food
    },
    score: 0,
    snakeVelocity: 0,
    direction: types.SnakeDirection.Up,
    isStarted: false
}

export const snakeReducer = (state  = initialState, action: types.SnakeActions): Readonly<types.SnakeGameStateType> => {
    switch (action.type) {

        case (types.SET_BLOCKS): {
            return {
                ...state,
                blocks: [...action.payload]
            }
        }

        case (types.SET_FOOD_POSITION): {
            return {
                ...state,
                food: {
                    ...state.food,
                    x: action.payload.x,
                    y: action.payload.y
                }
            }
        }

        case (types.INCREMENT_SCORE): {
            return {
                ...state,
                score: state.score + 1
            }
        }

        case (types.RESET_SCORE): {
            return {
                ...state,
                score: 0
            }
        }

        case (types.SET_VELOCITY): {
            return {
                ...state,
                snakeVelocity: action.payload
            }
        }

        case (types.SET_DIRECTION): {
            return {
                ...state,
                direction: action.payload
            }
        }

        default: { 
            return {...state }
        }
    }
}