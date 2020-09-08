import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';

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

export const selectAlertMessage = createSelector<AppState, string, string>(
  state => state.meta.alertMessag,
  alertMessag => alertMessag
);
