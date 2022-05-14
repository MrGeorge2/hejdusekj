import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootSaga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { snakeReducer } from "./snake/reducers";


function configureAppStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            counter: counterReducer,
            snake: snakeReducer
        },
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);

    return store
}

export const Store = configureAppStore();

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
