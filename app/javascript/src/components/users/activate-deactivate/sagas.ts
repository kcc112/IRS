import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { AlertType } from '../../shared/alerts/types';
import { userActivate, userDeactivate } from '../redux/actions';

export function* onUserDeactivate(action: Action<{ id: string; succesfullCallback: () => void; }>) {
  try {
    const { id, succesfullCallback } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.deactivateUser, id);
    yield put(showAlert({ message: 'User deactivated successfully', type: AlertType.SUCCESS }));
    succesfullCallback();

  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* onUserActivate(action: Action<{ id: string; succesfullCallback: () => void; }>) {
  try {
    const { id, succesfullCallback } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.activateUser, id);
    yield put(showAlert({ message: 'User activated successfully', type: AlertType.SUCCESS }));
    succesfullCallback();

  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchUserActivateDeactivate() {
  yield all([
    takeLatest(userActivate, onUserActivate),
    takeLatest(userDeactivate, onUserDeactivate),
  ]);
}