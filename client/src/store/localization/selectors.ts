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
