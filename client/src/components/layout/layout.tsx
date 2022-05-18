import React from "react"
import { IBaseProps } from "../atoms/base/types"
import { Nav } from "../atoms/nav/nav"

const Header: React.FunctionComponent = (

) => {
    return (
        <Nav>
            {/*<Nav.Logo logoSrc={process.env.PUBLIC_URL + "/logo/logoSmall.svg"} logoAlt="logo JH" href="/" />*/}
            <Nav.Collapse collapseSize={760}>
                <Nav.Element text="CV" href="/cv"/>
                <Nav.Element text="Games" href="/games"/>
                <Nav.Element text="Github" href="https://github.com/MrGeorge2/hejdusekj"/>
                <Nav.Element text="Linkedin" href="https://cz.linkedin.com/in/jirihejdusek"/>
            </Nav.Collapse>
        </Nav>
    )
}

export const Layout: React.FunctionComponent<IBaseProps> = ({
    children
}) => {
    return (
        <React.Fragment>
            <Header />
            {children}

        </React.Fragment>
    )
}