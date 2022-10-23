import { createAction } from 'redux-actions';
import { ICartsData, ICartsDetail } from '../../../types';

export enum ECartsActions {
  GET_CARTS = 'CARTS:GET_CARTS',
  SET_CARTS = 'CARTS:SET_CARTS',
  GET_DETAILS = 'CARTS:GET_DETAILS',
  SET_DETAILS = 'CARTS:SET_DETAILS',
}

const getCarts = createAction(ECartsActions.GET_CARTS);
const setCarts = createAction<ICartsData>(ECartsActions.SET_CARTS);
const getDetails = createAction(ECartsActions.GET_DETAILS);
const setDetails = createAction<ICartsDetail>(ECartsActions.SET_DETAILS);

export const cartsActions = {
  getCarts,
  setCarts,
  getDetails,
  setDetails,
};
