import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  enterpriseFetchSuccessfully,
  enterpriseFetch
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
} from '../../app/redux/actions';
import { mapJSONToEnterpriseShow } from '../show/mappers';
import enterprises from '../redux/reducer';

export function* onEnterpriseFetch(action: Action<{ id: string; }>) {
  try {
    const { id } = action.payload;

    yield put(apiRequestIncrement());
    const { data } = yield call(api.showEnterprise, id);
    const enterprise = mapJSONToEnterpriseShow(data);
    if (enterprises) yield put(enterpriseFetchSuccessfully(enterprise));
  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchEnterpriseShow() {
  yield all([
    takeLatest(enterpriseFetch, onEnterpriseFetch),
  ]);
}