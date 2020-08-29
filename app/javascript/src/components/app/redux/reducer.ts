import { createReducer } from 'redux-act';

import {
  apiRequestError,
  apiRequestIncrement,
  apiRequestDecrement,
  showModalSuccess,
  hideModalSuccess,
} from './actions';
import { AppMeta } from './types';

export const initialState: AppMeta = {
  error: undefined,
  showModal: false,
  showLoader: false,
};

const meta = createReducer<AppMeta>({}, initialState);

meta.on(hideModalSuccess, state => ({
  ...state,
  showModal: false,
}));

meta.on(showModalSuccess, state => ({
  ...state,
  showModal: true,
}));

meta.on(apiRequestError, (state, error) => ({
  ...state,
  error,
}));

meta.on(apiRequestIncrement, state => ({
  ...state,
  showLoader: true,
}));

meta.on(apiRequestDecrement, state => ({
  ...state,
  showLoader: false,
}));

export default meta;
