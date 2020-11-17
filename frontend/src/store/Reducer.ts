import {DISHES} from "../shared/dishes";
import {combineReducers} from "redux";
import {FeedBackReducer} from "./Feedback";

export interface AppState {
    dishes:Array<any>
}

export const initialState:AppState= {
    dishes: DISHES
}

const AppReducer = (state: AppState = initialState, action: any): AppState => {
    return state;
}

export const Reducer = combineReducers({
                                           app: AppReducer,
                                           feedback: FeedBackReducer
                                       })