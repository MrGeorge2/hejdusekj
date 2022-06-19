import React from "react";
import { Container, Grid } from "../grid/grid";
import { Loc } from "../localization/loc";
import { SvgThumbNail } from "../svgThumbNail/svgThumbNail";

export const HomePage: React.FunctionComponent = () => {
    return (
        <Container fluid={false}>
            <AboutMe />
            <ThisPage />
            <Skills />
        </Container>
    )
}

export const AboutMe: React.FunctionComponent = () => {
    return (
        <Container fluid>
            <div className="aboutMe">
                <div className="aboutMe__header">
                    <h1><Loc locKey="aboutMe.Hi" /></h1>
                </div>
                <div className="aboutMe__content">
                    <p><Loc locKey="aboutMe.Iam" /></p>
                    <p><Loc locKey="aboutMe.Iam.Desc" /></p>
                </div>
            </div>
        </Container>
    );
}

export const ThisPage: React.FunctionComponent = () => {
    return (
        <Container fluid>
            <div className="whatCanYouFindHere">
                <div className="whatCanYouFindHere__header">
                    <h1><Loc locKey="ThisPage.WhatCanYouFindHere" /></h1>
                </div>
                <div className="whatCanYouFindHere__content">
                    <div className="whatCanYouFindHere__content__localization">
                        <h2><Loc locKey="ThisPage.Localization" /></h2>
                        <p><Loc locKey="ThisPage.Localization.Desc" /></p>
                    </div>
                </div>

                <div className="whatCanYouFindHere__content">
                    <div className="whatCanYouFindHere__content__snake ">
                        <h2><Loc locKey="ThisPage.Snake" /></h2>
                        <p><Loc locKey="ThisPage.Snake.Desc" /></p>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export const Skills: React.FunctionComponent = () => {
    const technologiesSrc = [
        "dotnet",
        "python",
        "mariadb",
        "mssql",
        "typescript",
        "react",
        "redux",
        "redux-saga",
        "docker",
    ];

    React.useEffect(() => {
        console.log(process.env.PUBLIC_URL)
    }, [])
    return (
        <Container fluid>
            <div className="skills">
                <div className="skills__header">
                    <h1><Loc locKey="Skills.WhatIUse" /></h1>
                </div>
                <div className="skills__content">
                    <Grid
                        XS={{ size: 1, gap: 1 }}
                        S={{ size: 3, gap: 1 }}
                        L={{ size: 6, gap: 1 }}
                        XL={{ size: 9, gap: 1 }}
                    >
                        {
                            technologiesSrc.map(techSrc => {
                                return (
                                    <SvgThumbNail
                                        key={techSrc}
                                        src={`${process.env.PUBLIC_URL}/img/skills/${techSrc}.svg`}
                                        alt={techSrc}
                                    />
                                )
                            })
                        }
                    </Grid>
                </div>
            </div>
        </Container>
    )
}