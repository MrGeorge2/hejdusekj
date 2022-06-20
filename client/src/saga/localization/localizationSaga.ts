import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchLocalizationsAsync } from "../../services/localizationService";
import { AddLocalization, FetchLocalization, SwitchActiveLanguage } from "../../store/localization/actions";
import { selectIsLanguageFetched, selectLanguageState } from "../../store/localization/selectors";
import { FECH_LOCALIZATION, FetchLocalizationType, LocalizatinState, Localization, SwitchLocalizationActionCreatorType, SWITCH_LOCALIZATION_ACTION_CREATOR } from "../../store/localization/types";


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
    const locStateString = localStorage.getItem(`localization_${action.payload}`);
    if (locStateString){
        const locState: LocalizatinState = JSON.parse(locStateString);
        yield put(AddLocalization(locState.localizations));
        yield put(SwitchActiveLanguage(locState.activeLanguage));
        return;
    }

    // Since redux saga does not support async generators, we need to read the generator in a separate function.
    const localizations: readonly Localization[] = yield call(readLocalizationGenerator, action.payload);

    for (const localization of localizations) {
        yield put(AddLocalization([localization]));
    }

    const languageState: LocalizatinState = yield select(selectLanguageState)
    localStorage.setItem(`localization_${action.payload}`, JSON.stringify(languageState));
}

/**
 * Watcher for fetching localizations
 */
export function* fetchLocalizationWatcher() {
    yield takeEvery(FECH_LOCALIZATION, fetchLocalizationWorker)
}

/**
 * Worker for swapping language
 * @param action 
 */
function* languageSwapperWorker(action: SwitchLocalizationActionCreatorType){
    const isLocLoaded: boolean = yield select(selectIsLanguageFetched, action.payload);

    if(!isLocLoaded){
        yield put(FetchLocalization(action.payload));
    }

    yield put(SwitchActiveLanguage(action.payload));
}

/**
 * Language swapper
 */
export function* languageSwapperWatcher(){
    yield takeLatest(SWITCH_LOCALIZATION_ACTION_CREATOR, languageSwapperWorker)
}