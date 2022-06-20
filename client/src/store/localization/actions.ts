import * as types from './types'

/**
 * Add localization
 */
export const AddLocalization = (payload: readonly types.Localization[]): types.AddLocalizationType => {
    return {
        type: types.ADD_LOCALIZATION,
        payload: payload
    }
}

/**
 * Switch active language
 */
export const SwitchActiveLanguage = (payload: string): types.SwitchActiveLanguageType => {
    return {
        type: types.SWITCH_ACTIVE_LANGUAGE,
        payload: payload
    }
}

/**
 * Action creators
 */


/**
 * Switch active language
 * @param payload 
 * @returns 
 */
export const SwitchActiveLanguageActionCreator = (payload: string): types.SwitchLocalizationActionCreatorType => {
    return {
        type: types.SWITCH_LOCALIZATION_ACTION_CREATOR,
        payload: payload
    }
}

/**
 * Fetch localization
 * @param payload 
 * @returns 
 */
export const FetchLocalization = (payload: string): types.FetchLocalizationType => {
    return {
        type: types.FECH_LOCALIZATION,
        payload: payload
    }
}