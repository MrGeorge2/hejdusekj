import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/rootStore';
import { Block, BlockType, SnakeDirection } from '../../store/snake';
import { ChangeDirectionAction } from '../../store/snake/actions';
import { selectFood, selectSnakeBlocks } from '../../store/snake/selectors';
import './snake.scss'

export const SnakeGame: React.FunctionComponent = ({

}) => {
    const dispatch = useDispatch()

    const handleKeyDown = (e: React.KeyboardEvent) => {
        console.log(e)
        switch (e.code) {
            case "ArrowLeft":
                dispatch(ChangeDirectionAction(SnakeDirection.Left));
                break;

            case "ArrowUp":
                dispatch(ChangeDirectionAction(SnakeDirection.Up));
                break;

            case "ArrowRight":
                dispatch(ChangeDirectionAction(SnakeDirection.Right));
                break;

            case "ArrowDown":
                dispatch(ChangeDirectionAction(SnakeDirection.Down));
                break;

            default:
                break;
        }
    }

    const blocks = useAppSelector(state => selectSnakeBlocks(state));
    const food = useAppSelector(state => selectFood(state));

    return (
        <div className='snakeGame' onKeyDown={handleKeyDown} tabIndex={0}>
            {
                blocks.map((block, i) => {
                    return <SnakeBlock x={block.x} y={block.y} blockType={block.blockType} key={`SnakeBlock${i}`} />
                })
            }

            <SnakeBlock x={food.x} y={food.y} blockType={food.blockType} />
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