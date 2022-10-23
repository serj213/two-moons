import { combineReducers } from 'redux';
import { cartsReducer } from './carts/reducers';

export const rootReducer = combineReducers({
  cart: cartsReducer,
});
