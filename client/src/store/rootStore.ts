import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootSaga";


function configureAppStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            counter: counterReducer
        },
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);

    return store
}

export const Store = configureAppStore();

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch