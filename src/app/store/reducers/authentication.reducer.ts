import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from './../actions/autnetication.actions';

export interface AuthState {
    userID?: string;
    emailAddress: string;
}

export const initialState: AuthState = {
    emailAddress: null
}

export const authReducer = createReducer(initialState,
    on(AuthenticationActions.getUserID,
        (state, action) => ({...state, userID: action.userID})),
    on(AuthenticationActions.getUserEmailAddress,
        (state, action) => ({...state, emailAddress: action.emailAddress}))
);

// export const getUserID = (state: AuthState) => state.userID;
// export const getUserEmailAddress = (state: AuthState) => state.emailAddress;