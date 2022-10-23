import { Action, handleActions } from 'redux-actions';
import { ICartsState } from '../../../types';
import { ECartsActions } from '../actions';

const initialState: ICartsState = {
  carts: null,
  detail: null,
};

export const cartsReducer = handleActions<ICartsState, any>(
  {
    [ECartsActions.SET_CARTS]: (state, action) => ({
      ...state,
      carts: action.payload,
    }),
    [ECartsActions.SET_DETAILS]: (state, action) => ({
      ...state,
      detail: action.payload,
    }),
  },
  initialState,
);
