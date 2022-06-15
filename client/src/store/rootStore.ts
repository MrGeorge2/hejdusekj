import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootSaga";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { snakeReducer } from "./snake/reducers";
import { languageReducer } from "./localization/reducers";
import { leaderReducer } from "./leader/reducers";


function configureAppStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            leader: leaderReducer,
            snake: snakeReducer,
            language: languageReducer,
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
