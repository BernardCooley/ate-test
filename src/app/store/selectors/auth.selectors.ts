import { State } from './../state/index';
import { AuthState } from './../state/auth.state';
import { createSelector } from '@ngrx/store';



export const selectFeature = (state: State) => state.authState;

export const selectUserID = createSelector(
    selectFeature,
    (state: AuthState) => state.userID
);

export const selectUserEmailAddress = createSelector(
    selectFeature,
    (state: AuthState) => state.emailAddress
);