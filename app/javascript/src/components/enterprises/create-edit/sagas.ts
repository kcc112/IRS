import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  enterpriseEdit,
  enterpriseCreate 
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError
} from '../../app/redux/actions';
import { EnterpriseEditPayload } from '../../../api/payloads';

export function* onEditEnterprise(action: Action<{ id: string; payload: EnterpriseEditPayload }>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.editEnterprise, id, payload);
    yield put(apiRequestDecrement());
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* onEnterpriseCreate(action: Action<EnterpriseEditPayload>) {
  try {
    const { payload } = action;

    yield put(apiRequestIncrement());
    yield call(api.createEnterprise, payload);
    yield put(apiRequestDecrement());
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* watchEnterpriseCreateEdit() {
  yield all([
    takeLatest(enterpriseEdit, onEditEnterprise),
    takeLatest(enterpriseCreate, onEnterpriseCreate),
  ]);
}