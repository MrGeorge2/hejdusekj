export type Leader = {
    score: number;
    gameType: string;
    nickName: string;
}

export type LeaderState = {
    leaders: readonly Leader[];
}

/** Actions  */

export const ADD_LEADERS = "leaders/ADD";

export type AddLeadersType = {
    type: typeof ADD_LEADERS,
    payload: readonly Leader[]
}

export type LeaderActions = any | AddLeadersType;

/** Actions creators */

export const ADD_NEW_LEADER = "leaders/ADD_NEW_LEADER";
export type AddNewLeaderType = {
    type: typeof ADD_NEW_LEADER,
    payload: Readonly<Leader>
}

export type LeaderActionCreatorType = AddNewLeaderType;