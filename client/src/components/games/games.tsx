import { Container, Grid } from "../grid/grid"
import { LeaderBoard } from "../leaderBoard/leaderBoard"
import { Loc } from "../localization/loc"
import { SnakeGame } from "../snakeGame/snake"
import { GameTypes } from "./gameTypes"

import './games.scss';

export const Games: React.FunctionComponent = () => {
    return(
        <Container fluid>
            <div className="games">
                <div className="games__header">
                    <Loc locKey="games.Header"/>
                </div>

                <div className="games__content">
                    <Grid 
                        className="games__content__game game_snake"
                        XS={{ size: 1, gap: 1 }}
                        S={{ size: 3, gap: 1 }}
                    >
                        <SnakeGame />
                        <LeaderBoard gameType={GameTypes.SNAKE} />
                    </Grid>
                </div>
            </div>
        </Container>
    )
}