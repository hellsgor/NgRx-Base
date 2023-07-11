import {createAction, createFeatureSelector, createReducer, createSelector, on, props} from '@ngrx/store';

export const COUNTER_KEY = 'counter';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');
export const changeUpdatedAt = createAction(
  '[COUNTER] change updated at',
  props<{ updatedAt: number }>(),
);

export interface ICountState {
  counter: number;
  updatedAt?: number;
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
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt,
  })),
);

export const featureSelector =
  createFeatureSelector<ICountState>(COUNTER_KEY);

export const countSelector = createSelector(
  featureSelector,
  state => state.counter,
);

export const updatedAtSelector = createSelector(
  featureSelector,
  state => state.updatedAt,
);
