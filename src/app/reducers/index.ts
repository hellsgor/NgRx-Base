import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {counterReducer, ICountState} from './counter';

export interface State {
  counter: ICountState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
