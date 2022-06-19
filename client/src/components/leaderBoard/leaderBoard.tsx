import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import { selectAllLeaders } from "../../store/leader/selectors";
import { useAppSelector } from "../../store/rootStore";
import { GameTypes } from "../games/gameTypes";

interface LeaderBoardProps {
    gameType: GameTypes
}

/**
 * LeaderBoard component
 * @param param0 
 * @returns 
 */
export const LeaderBoard: React.FunctionComponent<LeaderBoardProps> = ({
    gameType
}) => {
    const leaders = useAppSelector(state => selectAllLeaders(state, gameType));

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">NickName</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                    leaders.map((leader, index) => {
                        return (
                            <TableRow key={`${index}-${leader.nickName}`}>
                                <TableCell align="right">{leader.nickName}</TableCell>
                                <TableCell align="right">{leader.score}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
          </Table>
        </TableContainer>
      );
}