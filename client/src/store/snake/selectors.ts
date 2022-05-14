import { RootState } from "../rootStore";

export const selectSnakeBlocks = (state: RootState) => {
    return state.snake.blocks;
}

export const selectHead = (state: RootState) => {
    return state.snake.blocks[0];
}

export const selectTail = (state: RootState) => {
    return state.snake.blocks[state.snake.blocks.length - 1];
}

export const selectFood = (state: RootState) => {
    return state.snake.food;
}

export const selectScore = (state: RootState) => {
    return state.snake.score;
}