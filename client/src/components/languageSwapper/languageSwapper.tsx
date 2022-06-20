import { SwitchActiveLanguageActionCreator } from "../../store/localization/actions";
import { selectActiveLanguage } from "../../store/localization/selectors"
import { useAppDispatch, useAppSelector } from "../../store/rootStore"
import './languageSwapper.scss';

/**
 * Language swapper component
 * @returns 
 */
export const LanguageSwapper: React.FunctionComponent = () => {
    const activeLanguage = useAppSelector(state => selectActiveLanguage(state))
    const dispatch = useAppDispatch();

    return (
        <a 
            className="languageSwapper"
            onClick={() => dispatch(SwitchActiveLanguageActionCreator(activeLanguage === "en" ? "cs" : "en"))}
        >
            <img 
                className="languageSwapper__flag"
                src={`${process.env.PUBLIC_URL}/img/flags/${activeLanguage}.svg`} 
                alt="languageFlag" 
            />

        </a>
    )
}