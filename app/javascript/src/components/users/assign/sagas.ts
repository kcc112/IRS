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
import { AssignUserPayload } from '../../../api/payloads';
import { assignUserToEnterprise } from '../redux/actions';
import { UserInformationsEvent } from '../../users-informations/redux/types';
import { emitUserInformationsEvent } from '../../users-informations/redux/actions';

export function* onAssignUserToEnterprise(action: Action<{ id: string; payload: AssignUserPayload  }>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.assignUserToEnterprise, id, payload);
    yield put(showAlert({ message: 'User assigned successfully', type: AlertType.SUCCESS }));
    yield put(emitUserInformationsEvent(UserInformationsEvent.EDITED_SUCCESSFULLY));
  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchAssignUserToEnterprise() {
  yield all([
    takeLatest(assignUserToEnterprise, onAssignUserToEnterprise),
  ]);
}