import { GameTypes } from "../components/games/gameTypes";
import { Leader } from "../store/leader/types";

const ADD_NEW_LEADER_MUTATION = `
mutation($nickName: String!, $score: Int!, $gameType: GameType!){      
    addNewLeader(inputLeader: {        
        nickName: $nickName,        
        score: $score,        
        gameType: $gameType      
    }) {            
        score        
        gameType        
        nickName 
    }}
`;


/**
 * Add new leader to the server.
 * @param nickName 
 * @param score 
 * @param gameType 
 * @returns 
 */
export async function addNewLeaderAsync(nickName: string, score: number, gameType: GameTypes): Promise<Readonly<Leader>> {
    const resultTrader = await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: ADD_NEW_LEADER_MUTATION,
            variables: { nickName: nickName, score: score, gameType: gameType },
        }),
    }).then(r => r.json());

    // TODO better logging
    if (resultTrader.errors){
        console.log(resultTrader.errors);
        throw new Error(resultTrader.errors[0].message);
    }

    const leader: Leader = resultTrader.data.addNewLeader;
    return leader;
}


const GET_LEADERS_QUERY = `
    query($gameType: GameType!, $pageSize: Int!, $page: Int!){  
        leaderBoard(gameType: $gameType, pageSize: $pageSize, page: $page){    
            score    
            gameType
            nickName    
            id  
        }
    }
`;

/**
 * Fetches leaders from the server.
 * @param gameType 
 */
export async function* fetchLeaderBoard(gameType: GameTypes): AsyncGenerator<Readonly<Leader>, void, void> {
    const PAGE_SIZE = 20;
    let page = 0;
    let hasNextPage = true;

    while (hasNextPage) {
        const fetchedLeaders: any = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: GET_LEADERS_QUERY,
                variables: { gameType: gameType, pageSize: 10, page: page },
            }),
        }).then(r => r.json());

        // TODO better logging
        if (fetchedLeaders.errors){
            console.log(fetchedLeaders.errors);
            throw new Error(fetchedLeaders.errors[0].message);
        }

        if (fetchedLeaders.data.leaderBoard.length === 0) {
            hasNextPage = false;
        }

        for (const leader of fetchedLeaders.data.leaderBoard) {
            yield {
                score: leader.score,
                nickName: leader.nickName,
                gameType: leader.gameType,
            }
        }
        
        page++;
    }
}