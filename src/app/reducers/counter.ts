import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');

export interface ICountState {
  counter: number;
}

export const initialState: ICountState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrease, state => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(clear, state => ({
    ...state,
    counter: initialState.counter,
  }))
);

export const featureSelector =
  createFeatureSelector<ICountState>('counter');

export const countSelector = createSelector(
  featureSelector,
  state => state.counter,
);
