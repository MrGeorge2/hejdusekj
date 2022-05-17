import { all, call, put, select, takeLatest, spawn, delay, takeEvery } from "redux-saga/effects";
import { ChangeDirectionAction, ResetScoreAction, SetBlocksAction, SetFoodPositionAction, SetSnakeDirectionAction, SetVelocityAction } from "../../store/snake/actions";
import { selectFood, selectHead, selectScore, selectSnakeBlocks, selectSnakeDirection, selectVelocity } from "../../store/snake/selectors";
import { CHANGE_DIRECTION, ChangeDirectionType, SnakeDirection, Block, BlockType, PLAYGROUND_WIDTH, PLAYGROUN_HEIGHT, INITIAL_VELOCITY, VELOCITY_MULTIPLIER } from "../../store/snake/types";

/**
 * gameloop
 */
function* gameLoop(){
    let velocity: number = yield select(selectVelocity);
    
    while (velocity !== 0) {

        const direction: SnakeDirection = yield select(selectSnakeDirection)

        yield put(ChangeDirectionAction(direction));
        
        // default 1s / velocity
        yield delay(1000 / velocity);

        velocity = yield select(selectVelocity);
    }
}

/**
 * Handle game start
 */
function* startGame() {
    yield put(SetVelocityAction(INITIAL_VELOCITY))
    yield spawn(gameLoop);
}

/**
 * Handle game over
 */
function* gameOverWorker() {
    const resetBlocks: readonly Block[] = [{
        x: Math.floor(PLAYGROUND_WIDTH / 2) + 1,
        y: Math.floor(PLAYGROUN_HEIGHT / 2) + 1,
        blockType: BlockType.Head
    }];

    yield put(SetBlocksAction(resetBlocks))

    const score: number = yield select(selectScore);
    alert(`GAME OVER! Your score is ${score}`);

    // Reset games attributes to default values
    yield put(ResetScoreAction());
    yield put(SetVelocityAction(0));
    yield put(SetSnakeDirectionAction(SnakeDirection.Up));
}

/**
 * Generates a food for snake
 */
function* generateFoodBlockWorker(head: Block) {
    let x = Math.round(Math.random() * PLAYGROUND_WIDTH);
    while (x === head.x) {
        x = Math.round(Math.random() * PLAYGROUND_WIDTH);
    }

    let y = Math.round(Math.random() * PLAYGROUN_HEIGHT);
    while (y === head.y) {
        y = Math.round(Math.random() * PLAYGROUN_HEIGHT);
    }

    yield put(SetFoodPositionAction({x: x, y: y}));

    // After snake eats a food, increment velocity
    const velocity: number = yield select(selectVelocity);
    yield put(SetVelocityAction(velocity * VELOCITY_MULTIPLIER));
}

function* snakeChangeDirectionWorker(action: ChangeDirectionType) {
    yield put(SetSnakeDirectionAction(action.payload));

    const velocity: number = yield select(selectVelocity);
    
    // Start game
    if (velocity === 0) {
        yield call(startGame)
    }

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
        yield call(gameOverWorker);
        return;
    }

    // Out of playground check
    if (head.x < 0 || head.x > PLAYGROUN_HEIGHT || head.y < 0 || head.y > PLAYGROUND_WIDTH){
        yield call(gameOverWorker);
        return;
    }

    let blocks = [head, newBody, ...blocksState.slice(1)]

    const food: Readonly<Block> = yield select(selectFood);

    if (head.x === food.x && head.y === food.y){
        // generate new position of the food
        yield call(generateFoodBlockWorker, head);
    }
    else{
        // remove tail
        blocks = [...blocks.slice(0, blocks.length - 1)]
    }

    yield put(SetBlocksAction(blocks))
}

export default function* snakeChangeDirectionWatcher() {
    yield all([
        takeEvery(CHANGE_DIRECTION, snakeChangeDirectionWorker),
    ]);
}