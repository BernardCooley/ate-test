import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, authReducer } from './authentication.reducer';

export interface State {
  authState: AuthState
}

export const reducers: ActionReducerMap<State> = {
  authState: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
