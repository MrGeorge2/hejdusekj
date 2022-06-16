import React from "react"
import { selectLocalization } from "../../store/localization/selectors";
import { useAppSelector } from "../../store/rootStore";

interface ILocProps {
    locKey: string;
}

/**
 * Component for showing localization strings.
 * @param param0 
 * @returns 
 */
export const Loc: React.FunctionComponent<ILocProps> = ({ 
    locKey 
}) => {
    const localizationValue = useAppSelector(state => selectLocalization(state, locKey));

    return (
        <React.Fragment>
            {localizationValue}
        </React.Fragment>
    )
}