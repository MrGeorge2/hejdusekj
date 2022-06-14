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

export const ADDLOC = "localization/ADD";

export type AddType = {
    type: typeof ADDLOC
    payload?: number
}


export type LocalizationActions = AddType ;