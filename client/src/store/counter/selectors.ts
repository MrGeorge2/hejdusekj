import { RootState } from "../rootStore";

export const getCount = (state: RootState) => {
    return state.counter.count
}