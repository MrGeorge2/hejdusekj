import * as types from './types'

// Starts the game
export const StartGameAction = (): types.StartGameType => {
    return {
        type: types.START_GAME
    }
}

// Changes direction of snakes head
export const ChangeDirectionAction = (payload: types.SnakeDirection): types.SnakeActionCreatorType => {
    return {
        type: types.CHANGE_DIRECTION,
        payload: payload
    }
}

// Set snake blocks
export const SetBlocksAction = (payload: readonly types.Block[]): types.SetBlocksType => {
    return {
        type: types.SET_BLOCKS,
        payload: payload
    }
}


// Set foot position
export const SetFoodPositionAction = (payload: {x: number, y: number}): types.SetFootPositionType => {
    return {
        type: types.SET_FOOD_POSITION,
        payload: payload
    }
}

// Increments score
export const IncrementScoreAction = (): types.IncrementScoreType => {
    return {
        type: types.INCREMENT_SCORE,
    }
}

// Resets score
export const ResetScoreAction = (): types.ResetScoreType => {
    return {
        type: types.RESET_SCORE,
    }
}