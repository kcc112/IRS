import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  userInformationsEdit,
  fetchUserInformationsToEdit,
  userInformationsFetchSuccessfully,
  emitUserInformationsEvent
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { UserInformationsEditPayload } from '../../../api/payloads';
import { mapJSONToUserInformationsShow } from '../show/mappers';
import { AlertType } from '../../shared/alerts/types';
import { ApiError, ErrorTypes } from '../../../api/errors';
import { UserInformationsEvent } from '../redux/types';

export function* onEditUserInformations(action: Action<{ id: string; payload: UserInformationsEditPayload }>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.editUserInformations, id, payload);
    yield put(showAlert({ message: 'User informations updated successfully', type: AlertType.SUCCESS }));
    yield put(emitUserInformationsEvent(UserInformationsEvent.EDITED_SUCCESSFULLY));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_INVALID) yield put(showAlert({ message: data.error, type: AlertType.ERROR }));
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* onFetchUserInformationsToEdit(action: Action<{ id: string; }>) {
  try {
    const { id } = action.payload;

    yield put(apiRequestIncrement());
    const { data } = yield call(api.showUserInformations, id);
    const userInformations = mapJSONToUserInformationsShow(data);
    if (userInformations) yield put(userInformationsFetchSuccessfully(userInformations));
  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchUserInformationsEdit() {
  yield all([
    takeLatest(userInformationsEdit, onEditUserInformations),
    takeLatest(fetchUserInformationsToEdit, onFetchUserInformationsToEdit),
  ]);
}