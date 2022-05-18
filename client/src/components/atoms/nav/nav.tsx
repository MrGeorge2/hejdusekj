import React from 'react';
import { INavCollapse, INavElement, INavLogo, INavProps } from "./types";
import './nav.scss';


type NavLogoType = React.FunctionComponent<INavLogo>;
type NavElementType = React.FunctionComponent<INavElement>;
type NavCollapseType = React.FunctionComponent<INavCollapse>;

type NavType = React.FunctionComponent<INavProps> & { Logo: NavLogoType, Element: NavElementType, Collapse: NavCollapseType };

const NavLogo: NavLogoType = ({
    id,
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
            className={`nav nav-logo-container ${className ?? ""}`}
            href={href}
            style={style}
            onClick={onClick}
        >
            <img className="nav-logo" src={logoSrc} alt={logoAlt}></img>
        </a>
    )
}


const NavElement: NavElementType = ({
    id,
    className,
    onClick = () => { },
    style = {},
    text,
    href
}) => {
    return (
        <a
            id={id}
            className={`nav nav-element-container ${className ?? ""}`}
            href={href}
            style={style}
            onClick={onClick}
        >
            <label>{text}</label>
        </a>
    )
}

const NavCollapse: NavCollapseType = ({
    id,
    className,
    onClick,
    style,
    children,
    collapseSize
}) => {
    const [isCollapsed, setIsCollapsed] = React.useState(window.matchMedia(`(min-width: ${collapseSize}px)`).matches);

    const resizeHandler = (e: MediaQueryListEvent) => {
        setIsCollapsed(e.matches);
    }

    React.useEffect(() => {
        window.matchMedia(`(min-width: ${collapseSize}px)`).addEventListener("change", resizeHandler);
        return () => window.matchMedia(`(min-width: ${collapseSize}px)`).removeEventListener("change", resizeHandler);
    }, [])

    const collapseClsName = isCollapsed ? "nav-collapse-uncollapsed" : "nav-collapse-collapsed";

    return (
        <div
            id={id}
            className={`nav nav-collapse ${collapseClsName} ${className ?? ""}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </div>
    )
}

export const Nav: NavType = ({
    id,
    className,
    onClick,
    style,
    children,
}) => {
    return (
        <div
            id={id}
            className={`navbar ${className ?? ""}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </div>
    )
}

Nav.Logo = NavLogo;
Nav.Collapse = NavCollapse;
Nav.Element = NavElement;

