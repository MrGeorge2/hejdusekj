import * as types from './types'

// Starts the game
export const StartGame = (): types.StartGameType => {
    return {
        type: types.START_GAME
    }
}

// Changes direction of snakes head
export const ChangeDirection = (payload: types.SnakeDirection) => {
    return {
        type: types.CHANGE_DIRECTION,
        payload: payload
    }
}

//
export const SetBlocks = (payload: readonly types.Block[]) => {
    return {
        type: types.SET_BLOCKS,
        payload: payload
    }
}