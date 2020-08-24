import {
  debounce, call, all, put
} from 'redux-saga/effects';

import { enterprisesFetch, enterprisesOverwrite } from '../redux/actions';
import { api } from '../../../api/api';
import { mapJSONToEnterprisesIndex } from './mappers';

export function* onFetchEnterprises() {
  try {
    const { data } = yield call(api.fetchEnterprises);
    console.log(data)
    const enterprises = mapJSONToEnterprisesIndex(data);

    yield put(enterprisesOverwrite(enterprises));
  } catch (err) {
    console.log(err)
  }
}


export function* watchEnterprisesIndex() {
  yield all([
    debounce(200, enterprisesFetch, onFetchEnterprises),
  ]);
}