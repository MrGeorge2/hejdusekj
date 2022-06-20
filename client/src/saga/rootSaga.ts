import * as saga from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
import { GameTypes } from '../components/games/gameTypes';
import { FETCH_LEADERS } from '../store/leader/types';
import { FECH_LOCALIZATION } from '../store/localization/types';
import { addNewLeaderWatcher, fetchLeadersWatcher, fetchLeadersWorker } from './leader/leaderSaga';
import { fetchLocalizationWatcher, fetchLocalizationWorker, languageSwapperWatcher } from './localization/localizationSaga';
import snakeChangeDirectionWatcher from './snake/snakeSaga';

/**
 * Saga that initializes the application
 */
function* initializeSaga() {
    yield saga.all([
        call(fetchLocalizationWorker,{ type: FECH_LOCALIZATION, payload: 'cs' }),
        call(fetchLeadersWorker, {type: FETCH_LEADERS, payload: GameTypes.SNAKE})
    ]);
}

export default function* rootSaga() {
    yield saga.all([
        snakeChangeDirectionWatcher(),
        fetchLocalizationWatcher(),
        languageSwapperWatcher(),
        fetchLeadersWatcher(),
        initializeSaga(),
        addNewLeaderWatcher()
    ]);
}