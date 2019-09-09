import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from './../actions/autnetication.actions';

export interface AuthState {
    userID: string;
    emailAddress: string;
}

export const initialState: AuthState = {
    userID: null,
    emailAddress: null
}

export const authReducer = createReducer(initialState,
    on(AuthenticationActions.getUserID,
        (state, {userID}) => ({...state, userID: userID})),
    on(AuthenticationActions.getUserEmailAddress,
        (state, {emailAddress}) => ({...state, emailAddress: emailAddress}))
);