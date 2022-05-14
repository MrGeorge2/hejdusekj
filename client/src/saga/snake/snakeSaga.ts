import { call, put, select, takeLatest } from "redux-saga/effects";
import { IncrementScoreAction, ResetScoreAction, SetBlocksAction, SetFoodPositionAction } from "../../store/snake/actions";
import { selectFood, selectHead, selectScore, selectSnakeBlocks } from "../../store/snake/selectors";
import { CHANGE_DIRECTION, ChangeDirectionType, SnakeDirection, Block, BlockType, PLAYGROUND_WIDTH, PLAYGROUN_HEIGHT } from "../../store/snake/types";


function* gameOverWorkder() {
    const resetBlocks: readonly Block[] = [{
        x: Math.floor(PLAYGROUND_WIDTH / 2) + 1,
        y: Math.floor(PLAYGROUN_HEIGHT / 2) + 1,
        blockType: BlockType.Head
    }];

    yield put(SetBlocksAction(resetBlocks))

    const score: number = yield select(selectScore);
    alert(`GAME OVER! Your score is ${score}`);

    yield put(ResetScoreAction());
}

function* snakeChangeDirectionWorker(action: ChangeDirectionType) {
    const headState: Readonly<Block> = yield select(selectHead);
    
    // last head is now body
    const newBody: Block = {...headState}
    newBody.blockType = BlockType.Body;

    // move head to direction
    const head: Block = {...headState};

    switch (action.payload) {
        case SnakeDirection.Up:
            head.y -= 1;
            break;

        case SnakeDirection.Down:
            head.y += 1;
            break;

        case SnakeDirection.Left:
            head.x -= 1;
            break;

        case SnakeDirection.Right:
            head.x += 1;
            break;
    }

    // Add new head and body
    const blocksState: readonly Block[] = yield select(selectSnakeBlocks);

    const colision: boolean = yield call(() => 
        blocksState.some(snakeBlock => snakeBlock.x === head.x && snakeBlock.y === head.y));

    if (colision) {
        yield call(gameOverWorkder);
        return;
    }

    // Out of playground check
    if (head.x < 0 || head.x > PLAYGROUN_HEIGHT || head.y < 0 || head.y > PLAYGROUND_WIDTH){
        yield call(gameOverWorkder);
        return;
    }

    let blocks = [head, newBody, ...blocksState.slice(1)]

    const food: Readonly<Block> = yield select(selectFood);

    if (head.x === food.x && head.y === food.y){
        // generate new position of the food
        const x = Math.round(Math.random() * PLAYGROUND_WIDTH);
        const y = Math.round(Math.random() * PLAYGROUN_HEIGHT);

        yield put(SetFoodPositionAction({x: x, y: y}));
        yield put(IncrementScoreAction())
    }
    else{
        // remove tail
        blocks = [...blocks.slice(0, blocks.length - 1)]
    }

    yield put(SetBlocksAction(blocks))
}

export default function* snakeChangeDirectionWatcher() {
    yield takeLatest(CHANGE_DIRECTION, snakeChangeDirectionWorker)
}