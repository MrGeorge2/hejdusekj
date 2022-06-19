import { put, takeEvery } from "redux-saga/effects";
import { GameTypes } from "../../components/games/gameTypes";
import { fetchLeaderBoard } from "../../services/leaderBoardService";
import { ADD_LEADERS, FetchLeadersType, FETCH_LEADERS, Leader } from "../../store/leader/types";

/**
 * Read leaders from async generator
 * @param languageCode 
 * @returns 
 */
async function readLocalizationGenerator(gameType: GameTypes): Promise<readonly Leader[]> {
    const leaders: Leader[] = [];

    for await (const leader of fetchLeaderBoard(gameType))
        leaders.push(leader);

    return leaders;
}

/**
 * Worker saga for fetching leaders.
 * @param action 
 */
export function* fetchLeadersWorker(action: FetchLeadersType) {
    const leaders: readonly Leader[] = yield readLocalizationGenerator(action.payload);

    yield put({ type: ADD_LEADERS, payload: leaders });
}


/**
 * Watcher saga for fetching leaders
 */
export function* fetchLeadersWatcher() {
    yield takeEvery(FETCH_LEADERS, fetchLeadersWorker);
}