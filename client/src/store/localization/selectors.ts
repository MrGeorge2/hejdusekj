import { RootState } from "../rootStore";

/**
 * Select localization
 * @param state 
 * @param locCode 
 * @returns 
 */
export const selectLocalization = (state: RootState, locCode: string) => {
    if (locCode == null) {
        return "";
    }
    
    const activeLanguage = state.language.activeLanguage;

    const localization = state.language.localizations.find(
        localization => localization.language === activeLanguage && localization.key === locCode);
    
    return localization ? localization.value : '';
}


/**
 * Select active language
 * @param state 
 * @returns 
 */
export const selectActiveLanguage = (state: RootState) => {
    return state.language.activeLanguage;
}

/**
 * Checks if localization is loaded
 * @param state 
 * @param languageCode 
 * @returns 
 */
export const selectIsLanguageFetched = (state: RootState, languageCode: string) => {
    return state.language.localizations.some(x => x.language === languageCode);
}

/**
 * Select whole language state
 * @param state 
 * @returns 
 */
export const selectLanguageState = (state: RootState) => {
    return state.language;
}