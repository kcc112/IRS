import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  emitEnterpriseEvent,
  enterpriseDelete,
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { EnterpriseEvent } from '../redux/types';
import { AlertType } from '../../shared/alerts/types';
import { ApiError, ErrorTypes } from '../../../api/errors';


export function* onEnterpriseDelete(action: Action<{id: string }>) {
  try {
    const { id } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.deleteEnterprise, id);
    yield put(emitEnterpriseEvent(EnterpriseEvent.DELETED_SUCCESSFULLY));
    yield put(showAlert({ message: 'Enterprise deleted successfully', type: AlertType.SUCCESS }));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_NOT_FOUND) {
      yield put(showAlert({ message: "Couldn't find Enterprise", type: AlertType.ERROR }));
      yield put(emitEnterpriseEvent(EnterpriseEvent.REFRESH));
    }
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchEnterpriseDelete() {
  yield all([
    takeLatest(enterpriseDelete, onEnterpriseDelete),
  ]);
}