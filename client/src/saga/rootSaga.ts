import * as saga from 'redux-saga/effects';

function* helloWorldSaga() {
    yield saga.call(() => console.log("Hello world  from saga"))
}

export default function* rootSaga() {
    yield saga.all([
        helloWorldSaga()
    ]);
}