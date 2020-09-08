import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  enterpriseEdit,
  enterpriseCreate, 
  emitEnterpriseEvent
} from '../redux/actions';
import { api } from '../../../api/api';
import { ApiError, ErrorTypes } from '../../../api/errors';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { EnterpriseEditPayload } from '../../../api/payloads';
import { EnterpriseEvent } from '../redux/types';

export function* onEditEnterprise(action: Action<{ id: string; payload: EnterpriseEditPayload }>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.editEnterprise, id, payload);
    yield put(emitEnterpriseEvent(EnterpriseEvent.EDITED_SUCCESSFULLY));
  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* onEnterpriseCreate(action: Action<EnterpriseEditPayload>) {
  try {
    const { payload } = action;

    yield put(apiRequestIncrement());
    yield call(api.createEnterprise, payload);
    yield put(emitEnterpriseEvent(EnterpriseEvent.CREATED_SUCCESSFULLY));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_INVALID) yield put(showAlert({ message: data.error }));
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchEnterpriseCreateEdit() {
  yield all([
    takeLatest(enterpriseEdit, onEditEnterprise),
    takeLatest(enterpriseCreate, onEnterpriseCreate),
  ]);
}