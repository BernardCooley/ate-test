import { createAction, props } from '@ngrx/store';

export const getUserID = createAction('[Auth] Get user id', props<{userID: string}>())
export const getUserEmailAddress = createAction('[Auth] Get user email address', props<{emailAddress: string}>())