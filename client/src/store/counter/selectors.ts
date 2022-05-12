import { RootState } from "../rootReducer";

export const getCount = (state: RootState) => {
    return state.counter.count
}