import { ActionReducerMap, Action } from '@ngrx/store';
import * as fromAuth from './authentication.reducer';
import { State } from '../state';


export const reducers: ActionReducerMap<State, Action> = {
  authState: fromAuth.authReducer
};