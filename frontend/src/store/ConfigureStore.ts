import {createStore} from "redux";
import {Reducer} from "./Reducer";

export const ConfigureStore = () => {
    return createStore(Reducer)
}