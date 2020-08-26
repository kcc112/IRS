import {
  call, all, put, takeLatest
} from 'redux-saga/effects';

import { api } from '../api/api';
import { 
  currentUserFetch,
  currentUserFetchSuccesfull
} from './redux/actions';
import { mapJSONToCurrentUser } from './mappers';

export function* onCurrentUserFetch() {
  try {
    const data = yield call(api.fetchCurentUser);
    const currentUser = mapJSONToCurrentUser(data);
    yield put(currentUserFetchSuccesfull(currentUser));
  } catch (err) {
  }
}

export function* watchSession() {
  yield all([
    takeLatest(currentUserFetch, onCurrentUserFetch),
  ]);
}