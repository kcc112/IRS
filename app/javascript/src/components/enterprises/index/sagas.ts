import {
  debounce, call, all, put
} from 'redux-saga/effects';

import { enterprisesFetch, enterprisesOverwrite } from '../redux/actions';
import { api } from '../../../api/api';
import { mapJSONToEnterprisesIndex } from './mappers';
import { apiRequestIncrement, apiRequestDecrement } from '../../app/redux/actions';

export function* onFetchEnterprises() {
  try {
    yield put(apiRequestIncrement());
    const { data } = yield call(api.fetchEnterprises);
    const enterprises = mapJSONToEnterprisesIndex(data);

    yield put(enterprisesOverwrite(enterprises));
    yield put(apiRequestDecrement());
  } catch (err) {
  }
}


export function* watchEnterprisesIndex() {
  yield all([
    debounce(200, enterprisesFetch, onFetchEnterprises),
  ]);
}