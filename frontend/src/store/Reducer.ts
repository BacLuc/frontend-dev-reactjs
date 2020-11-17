import {DISHES} from "../shared/dishes";

export interface AppState {
    dishes:Array<any>
}

export const initialState:AppState= {
    dishes: DISHES
}

export const Reducer = (state:AppState = initialState, action: any): AppState => {
    return state;
}