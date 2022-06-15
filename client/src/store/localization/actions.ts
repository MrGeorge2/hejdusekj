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