import { createAction, props } from '@ngrx/store';

export const getUserDetails = createAction('[Auth] Get user details', props<{userID: string; emailAddress: string}>());