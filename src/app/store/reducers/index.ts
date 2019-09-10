import { environment } from './../../../environments/environment.prod';
import { ActionReducerMap, Action, MetaReducer } from '@ngrx/store';
import * as fromAuth from './authentication.reducer';
import { State } from '../state';


export const reducers: ActionReducerMap<State, Action> = {
  authState: fromAuth.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];