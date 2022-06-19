import { RootState } from "../rootStore";;

/**
 * Select all leaders from the store.
 * @param state 
 * @param locCode 
 * @returns 
 */
export const selectAllLeaders = (state: RootState, gameType: string) => {
    const leaders = state.leader.leaders
        .filter(leader => leader.gameType === gameType)
        .sort((a, b) => b.score - a.score);
        
    return leaders;
}

/**
 * Select actual champion
 * @param state 
 * @param gameType 
 * @returns 
 */
export const selectChampion = (state: RootState, gameType: string) => {
    const leaders = state.leader.leaders.filter(leader => leader.gameType === gameType);
    const champions = leaders.sort((a, b) => b.score - a.score)

    if (champions.length > 0) {
        return champions[0];
    }
    return null;
}
