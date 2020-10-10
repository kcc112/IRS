import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  emitIssuesEvent, resolveIssue
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { IssuesEvent } from '../redux/types';
import { AlertType } from '../../shared/alerts/types';

export function* onResolveIssue(action: Action<{id: string;}>) {
  try {
    const { id } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.resolveIssue, id);
    yield put(emitIssuesEvent(IssuesEvent.RESOLVED_SUCCESSFULLY));
    yield put(showAlert({ message: 'Successfully resolved issue', type: AlertType.SUCCESS }));

  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchResolveIssue() {
  yield all([takeLatest(resolveIssue, onResolveIssue)]);
}