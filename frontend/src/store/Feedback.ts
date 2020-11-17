import {AddFeedback, Feedback, FeedBackActions} from "./ActionTypes";

const initialState : Array<Feedback> = [];

export const FeedBackReducer = (state = initialState, action:any) : Array<Feedback> => {
    switch (action.type) {
        case FeedBackActions.ADD_FEEDBACK:
            state.push((action as AddFeedback).feedback);
            alert('state is now: ' + JSON.stringify(state));
            return state;
        default:
            return state;
    }
}
