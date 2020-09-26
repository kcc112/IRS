import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { api } from '../api/api';
import { 
  currentUserFetch,
  currentUserFetchSuccesfull,
  roleEdit,
  rolesFetch,
  rolesFetchSuccesfull
} from './redux/actions';
import { mapJSONToCurrentUser, mapJSONToRoleArray } from './mappers';
import { apiRequestError, showAlert } from '../components/app/redux/actions';
import { UserRoleEditPayload } from '../api/payloads';
import { AlertType } from '../components/shared/alerts/types';
import { UserInformationsEvent } from '../components/users-informations/redux/types';
import { emitUserInformationsEvent } from '../components/users-informations/redux/actions';

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

export function* onEditUserRole(action: Action<{ userId: string; payload: UserRoleEditPayload;}>) {
  const { userId, payload } = action.payload;
  try {
    yield call(api.editUserRole, userId, payload);
    yield put(showAlert({ message: 'User role updated successfully', type: AlertType.SUCCESS }));
    yield put(emitUserInformationsEvent(UserInformationsEvent.EDITED_SUCCESSFULLY));
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* watchSession() {
  yield all([
    takeLatest(currentUserFetch, onCurrentUserFetch),
    takeLatest(rolesFetch, onFetchApplicationRoles),
    takeLatest(roleEdit, onEditUserRole),
  ]);
}