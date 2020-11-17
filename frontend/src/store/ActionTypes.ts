import {AnyAction} from "redux";

export enum FeedBackActions {
    ADD_FEEDBACK = 'ADD_FEEDBACK'
}

export interface Feedback {
    firstName: string
    lastName: string
    email: string
}

export class AddFeedback implements AnyAction{
    type: any = FeedBackActions.ADD_FEEDBACK.valueOf();
    feedback:Feedback

    constructor(feedback: Feedback) {
        this.feedback = feedback;
    }
}
