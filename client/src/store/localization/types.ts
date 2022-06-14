export type Localization = {
    key: string
    value: string
    language: string
}

export type LocalizatinState = {
    localizations: Localization[]
    activeLanguage: string
}

/** Actions  */

export const ADD_LOCALIZATION = "localization/ADD";

export type AddLocalizationType = {
    type: typeof ADD_LOCALIZATION
    payload: Localization[]
}

export const SWITCH_ACTIVE_LANGUAGE = "localization/SWITCH_ACTIVE_LANGUAGE";

export type SwitchActiveLanguageType = {
    type: typeof SWITCH_ACTIVE_LANGUAGE
    payload: string
}

export type LocalizationActions = AddLocalizationType | SwitchActiveLanguageType;