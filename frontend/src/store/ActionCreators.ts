import {AddFeedback, Feedback} from "./ActionTypes";

//redux does not allow classes as actions, thus convert Action to Object.
export const addFeedback = (feedback: Feedback): AddFeedback => ({...new AddFeedback(feedback)})
