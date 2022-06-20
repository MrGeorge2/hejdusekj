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
export const FECH_LOCALIZATION = "localization/LOAD_LOCALIZATION";

export type FetchLocalizationType = {
    type: typeof FECH_LOCALIZATION,
    payload: string // language code
}

export const SWITCH_LOCALIZATION_ACTION_CREATOR = "localization/SWITCH_LOCALIZATION";
export type SwitchLocalizationActionCreatorType = {
    type: typeof SWITCH_LOCALIZATION_ACTION_CREATOR,
    payload: string // language code
}

export type LocalizationActionCreatorType = FetchLocalizationType;