import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  assignToIssue, emitIssuesEvent
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { IssueAssignPayload } from '../../../api/payloads';
import { IssuesEvent } from '../redux/types';
import { AlertType } from '../../shared/alerts/types';
import { ApiError, ErrorTypes } from '../../../api/errors';

export function* onAssignToIssue(action: Action<{id: string; payload: IssueAssignPayload}>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.assignToIssues, id, payload);
    yield put(emitIssuesEvent(IssuesEvent.ASSIGN_SUCCESSFULLY));
    yield put(showAlert({ message: 'Successfully assigned to issue', type: AlertType.SUCCESS }));

  } catch (err) {

    yield put(apiRequestError(err));
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.ISSUE_ALREADY_ASSIGNED) yield put(showAlert({ message: data.error, type: AlertType.ERROR }));
    yield put(emitIssuesEvent(IssuesEvent.REFRESH));

  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchAssignToIssue() {
  yield all([takeLatest(assignToIssue, onAssignToIssue)]);
}