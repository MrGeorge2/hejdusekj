import * as saga from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
import { FECH_LOCALIZATION } from '../store/localization/types';
import fetchLocalizationWatcher, { fetchLocalizationWorker } from './localization/localizationSaga';
import snakeChangeDirectionWatcher from './snake/snakeSaga';

/**
 * Saga that initializes the application
 */
function* initializeSaga() {
    yield call(fetchLocalizationWorker,{ type: FECH_LOCALIZATION, payload: 'cs' });
}

export default function* rootSaga() {
    yield saga.all([
        snakeChangeDirectionWatcher(),
        fetchLocalizationWatcher(),
        initializeSaga(),
    ]);
}