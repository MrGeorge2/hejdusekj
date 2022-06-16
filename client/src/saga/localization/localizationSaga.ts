import { call, put, takeEvery } from "redux-saga/effects";
import { fetchLocalizationsAsync } from "../../services/localizationService";
import { AddLocalization } from "../../store/localization/actions";
import { FECH_LOCALIZATION, FetchLocalizationType, Localization } from "../../store/localization/types";


/**
 * Read localization from generator
 * @param languageCode 
 * @returns 
 */
async function readLocalizationGenerator(languageCode: string): Promise<readonly Localization[]> {
    const localizations: Localization[] = [];
    for await (const localization of fetchLocalizationsAsync(languageCode)) {
        localizations.push(localization);
    }
    return localizations;
}

/**
 * Worker for fetching localizations
 * @param action 
 */
export function* fetchLocalizationWorker(action: FetchLocalizationType) {

    // Since redux saga does not support async generators, we need to read the generator in a separate function.
    const localizations: readonly Localization[] = yield call(readLocalizationGenerator, action.payload);

    for (const localization of localizations) {
        yield put(AddLocalization([localization]));
    }
}

/**
 * Watcher for fetching localizations
 */
export default function* fetchLocalizationWatcher() {
    yield takeEvery(FECH_LOCALIZATION, fetchLocalizationWorker)
}