import React from 'react';
import { Block, BlockType } from '../../store/snake';
import './snake.scss'

export const SnakeGame: React.FunctionComponent = ({

}) => {
    return (
        <div className='snakeGame'>
            <SnakeBlock x={50} y={50} blockType={BlockType.Body} />

        </div>
    );
}


const SnakeBlock: React.FunctionComponent<Block> = ({
    x,
    y,
    blockType
}) => {
    return (
        <div
            className={`snakeBlock ${BlockType[blockType]}blockType`}
            style={{
                gridColumnStart: x + 1,
                gridColumnEnd: x + 1,
                gridRowStart: y + 1,
                gridRowEnd: y + 1
            }}
        >

        </div>
    )
}