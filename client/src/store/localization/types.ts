export type Localization = {
    key: string
    value: string
    language: string
}

export type LocalizatinState = {
    localizations: readonly Localization[]
    activeLanguage: string
}

/** Actions  */

export const ADD_LOCALIZATION = "localization/ADD";
export const SWITCH_ACTIVE_LANGUAGE = "localization/SWITCH_ACTIVE_LANGUAGE";

export type AddLocalizationType = {
    type: typeof ADD_LOCALIZATION
    payload: readonly Localization[]
}

export type SwitchActiveLanguageType = {
    type: typeof SWITCH_ACTIVE_LANGUAGE
    payload: string
}

export type LocalizationActions = any | AddLocalizationType | SwitchActiveLanguageType;

// Actions creators
export const LOAD_LOCALIZATION = "localization/LOAD_LOCALIZATION";

export type LoadLocalizationType = {
    type: typeof LOAD_LOCALIZATION,
    payload: string // language code
}


export type LocalizationActionCreatorType = LoadLocalizationType;