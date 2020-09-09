import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import { AlertType } from '../../shared/alerts/types';

export const selectShowModal = createSelector<AppState, boolean, boolean>(
  state => state.meta.showModal,
  showModal => showModal
);

export const selectLoaderState = createSelector<AppState, boolean, boolean>(
  state => state.meta.showLoader,
  showLoader => showLoader
);

export const selectApiError = createSelector<AppState, Error | undefined, Error | undefined>(
  state => state.meta.error,
  error => error
);

export const selectShowAlert = createSelector<AppState, boolean, boolean>(
  state => state.meta.showAlert,
  showAlert => showAlert
);

export const selectAlert= createSelector<AppState, { message: string; type: AlertType }, { message: string; type: AlertType }>(
  state => state.meta.alert,
  alertMessag => alertMessag
);
