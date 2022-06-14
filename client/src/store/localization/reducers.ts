import { Reducer } from 'redux';
import * as types from './types';


const initialState: types.LocalizatinState = {
    localizations: [],
    activeLanguage: 'cs'
}

export const languageReducer: Reducer<types.LocalizatinState> = (state = initialState, action: types.LocalizationActions): Readonly<types.LocalizatinState> => {
    if (!action.payload){
        return {...state}
    }

    switch (action.type) {

        default: {
            return {...state}
        }
    }   
}