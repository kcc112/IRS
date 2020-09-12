import {
  debounce, call, all, put
} from 'redux-saga/effects';

import { 
  usersInformationsFetch,
  usersInformationsFetchSuccessfully
} from '../redux/actions';
import { api } from '../../../api/api';
import { mapJSONToUsersInformationsIndex } from './mappers';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError
} from '../../app/redux/actions';

export function* onUsersInformationsFetch() {
  try {
    yield put(apiRequestIncrement());
    const { data } = yield call(api.fetchUsersInformations);
    const usersInformations = mapJSONToUsersInformationsIndex(data);

    yield put(usersInformationsFetchSuccessfully(usersInformations));
    yield put(apiRequestDecrement());
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* watchUsersInformationsIndex() {
  yield all([
    debounce(200, usersInformationsFetch, onUsersInformationsFetch),
  ]);
}