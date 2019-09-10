import { AuthState } from './../state/auth.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as AuthenticationActions from './../actions/autnetication.actions';
import * as authState from '../state/auth.state';

export const authReducer = createReducer(authState.initialState,
    on(AuthenticationActions.getUserDetails,
        (state, {userID, emailAddress}) => ({...state, userID: userID, emailAddress: emailAddress}))
);

export function reducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
  }