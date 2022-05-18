import { IBaseProps } from "../base/types";


export interface INavElement extends IBaseProps {
    href?: string
    text?: string
}

export interface INavLogo extends INavElement {
    logoSrc: string
    logoAlt: string
    href: string
}

export interface INavCollapse extends IBaseProps {
    collapseSize: number
}

export interface INavProps extends IBaseProps {

}
