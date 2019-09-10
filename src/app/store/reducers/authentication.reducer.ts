import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from './../actions/autnetication.actions';
import * as authState from '../state/auth.state';

export const authReducer = createReducer(authState.initialState,
    on(AuthenticationActions.getUserDetails,
        (state, Action) => ({...state, userID: Action.userID, emailAddress: Action.emailAddress}))
);

