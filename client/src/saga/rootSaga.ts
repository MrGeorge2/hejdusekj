import * as saga from 'redux-saga/effects';
import snakeChangeDirectionWatcher from './snake/snakeSaga';

function* helloWorldSaga() {
    yield saga.call(() => console.log("Hello world  from saga"))
}

export default function* rootSaga() {
    yield saga.all([
        helloWorldSaga(),
        snakeChangeDirectionWatcher()
    ]);
}