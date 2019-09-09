import { createAction, props } from '@ngrx/store';

export const getUserID = createAction('Get User ID', props<{userID: string}>())
export const getUserEmailAddress = createAction('Get User Email Address', props<{emailAddress: string}>())