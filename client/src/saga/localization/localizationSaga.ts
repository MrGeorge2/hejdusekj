import { takeLatest } from "redux-saga/effects";
import { FECH_LOCALIZATION, FetchLocalizationType } from "../../store/localization/types";


export function* fetchLocalizationWorker(action: FetchLocalizationType) {
    
}

export default function* fetchLocalizationWatcher() {
    yield takeLatest(FECH_LOCALIZATION, fetchLocalizationWorker)
}