import {createStore} from "redux";
import {initialState, Reducer} from "./Reducer";

export const ConfigureStore = () => {
    return createStore(Reducer, initialState)
}