import * as types from './types';


const initialState: types.LocalizatinState = {
    localizations: [],
    activeLanguage: 'cs'
}

export const languageReducer = (state = initialState, action: types.LocalizationActions): Readonly<types.LocalizatinState> => {
    switch (action.type) {

        case types.ADD_LOCALIZATION: {
            return {
                ...state,
                localizations: [...state.localizations, ...action.payload]
            }
        }

        case types.SWITCH_ACTIVE_LANGUAGE: {
            return {
                ...state,
                activeLanguage: action.payload
            }
        }

        default: {
            return { ...state }
        }
    }
}