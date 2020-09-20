import {
  call, all, put, takeLatest
} from 'redux-saga/effects';

import { api } from '../api/api';
import { 
  currentUserFetch,
  currentUserFetchSuccesfull,
  rolesFetch,
  rolesFetchSuccesfull
} from './redux/actions';
import { mapJSONToCurrentUser, mapJSONToRoleArray } from './mappers';
import { apiRequestError } from '../components/app/redux/actions';

export function* onCurrentUserFetch() {
  try {
    const data = yield call(api.fetchCurentUser);
    const currentUser = mapJSONToCurrentUser(data);
    yield put(currentUserFetchSuccesfull(currentUser));
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* onFetchApplicationRoles() {
  try {
    const data = yield call(api.fetchApplicationRoles);
    const roles = mapJSONToRoleArray(data);
    yield put(rolesFetchSuccesfull(roles));
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* watchSession() {
  yield all([
    takeLatest(currentUserFetch, onCurrentUserFetch),
    takeLatest(rolesFetch, onFetchApplicationRoles),
  ]);
}