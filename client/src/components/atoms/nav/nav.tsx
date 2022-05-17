import React from 'react';
import { INavCollapse, INavElement, INavLogo, INavProps } from "./types";
import '.nav.scss';


type NavLogoType = React.FunctionComponent<INavLogo>;
type NavElementType = React.FunctionComponent<INavElement>;
type NavCollapseType = React.FunctionComponent<INavCollapse>;

type NavType = React.FunctionComponent<INavProps> & NavLogoType & NavElementType & NavCollapseType;

const NavLogo: NavLogoType = ({
    id = "",
    className = "",
    onClick = () => { },
    style = {},
    logoSrc,
    logoAlt,
    href,
}) => {
    return (
        <a
            id={id}
            className={`nav nav-logo-container ${className}`}
            href={href}
            style={style}
            onClick={onClick}
        >
            <img className="nav-logo" src={logoSrc} alt={logoAlt}></img>
        </a>
    )
}


const NavElement: NavElementType = ({
    id = "",
    className = "",
    onClick = () => { },
    style = {},
    text = "",
    href = ""
}) => {
    return (
        <a
            id={id}
            className={`nav nav-element-container ${className}`}
            href={href}
            style={style}
            onClick={onClick}
        >
            <label>{text}</label>
        </a>
    )
}

const NavCollapse: NavCollapseType = ({
    id = "",
    className = "",
    onClick = () => { },
    style = {},
    children,
    collapseSize
}) => {
    const mediaQuery = window.matchMedia(`(min-width: ${collapseSize})`);

    const [isCollapsed, setIsCollapsed] = React.useState(mediaQuery.matches);

    const resizeHandler = (e: MediaQueryListEvent) => {
        setIsCollapsed(e.matches);
    }

    React.useEffect(() => {
        mediaQuery.addEventListener("change", resizeHandler);
        return () => mediaQuery.removeEventListener("change", resizeHandler);
    }, [])

    const collapseClsName = isCollapsed ? "nav-collapse-opened" : "nav-collapse-closed";

    return (
        <div
            id={id}
            className={`nav nav-collapse ${collapseClsName} ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </div>
    )
}
