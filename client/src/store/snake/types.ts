// Constants
export const PLAYGROUND_WIDTH = 50; // In "blocks"
export const PLAYGROUN_HEIGHT = 50; // In "blocks"

export const INITIAL_VELOCITY = 1; // Block per second
export const VELOCITY_MULTIPLIER = 1.1 // After snake eats his food, this constant will multiply actual velocity

// State
export enum BlockType {
    Head,
    Body,
    Food
}

export enum SnakeDirection {
    Up,
    Down,
    Left,
    Right,
}

export type Block = {
    x: number;
    y: number;
    blockType: BlockType;
}

export type SnakeGameStateType = {
    blocks: readonly Block[];
    score: number;
    snakeVelocity: number;
    direction: SnakeDirection;
    food: Readonly<Block>
}

// Actions
export const START_GAME = "snakeGame/start";
export const SET_BLOCKS = "snakeGame/setBlocks";
export const SET_FOOD_POSITION = "snakeGame/setFoodPosition"
export const INCREMENT_SCORE = "snakeGame/incrementScore";
export const RESET_SCORE = "snakeGame/resetScore";

export type StartGameType = {
    type: typeof START_GAME;
}

export type SetBlocksType = {
    type: typeof SET_BLOCKS,
    payload: readonly Block[]
}

export type SetFootPositionType = {
    type: typeof SET_FOOD_POSITION,
    payload: {
        x: number,
        y: number
    }
}

export type IncrementScoreType = {
    type: typeof INCREMENT_SCORE,
}

export type ResetScoreType = {
    type: typeof RESET_SCORE,
}

export type SnakeActions = StartGameType | SetBlocksType | SetFootPositionType| IncrementScoreType | ResetScoreType;

// Action creators
export const CHANGE_DIRECTION = "snakeGame/changeDirectoryActionCreator";

export type ChangeDirectionType = {
    type: typeof CHANGE_DIRECTION,
    payload: SnakeDirection
}

export type SnakeActionCreatorType = ChangeDirectionType