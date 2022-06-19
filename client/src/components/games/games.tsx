import { Container } from "../grid/grid"
import { SnakeGame } from "../snakeGame/snake"

export const Games: React.FunctionComponent = () => {
    return(
        <Container fluid>
            <div className="games">
                <div className="games__header">
                    <SnakeGame/>
                </div>
            </div>
        </Container>
    )
}