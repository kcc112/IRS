import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  issueCreate,
  fetchIssueToEdit,
  issueEdit,
  emitIssuesEvent, issueFetchSuccessfully
} from '../redux/actions';
import { api } from '../../../api/api';
import { ApiError, ErrorTypes } from '../../../api/errors';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert
} from '../../app/redux/actions';
import { IssueCreatePayload, IssueEditPayload } from '../../../api/payloads';
import { IssuesEvent } from '../redux/types';
import { AlertType } from '../../shared/alerts/types';
import { mapJSONToIssueShow } from '../show/mappers';

export function* onEditIssue(action: Action<{ id: string; payload: IssueEditPayload }>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.editIssue, id, payload);
    yield put(emitIssuesEvent(IssuesEvent.EDITED_SUCCESSFULLY));
    yield put(showAlert({ message: 'Issue updated successfully', type: AlertType.SUCCESS }));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_INVALID) yield put(showAlert({ message: data.error, type: AlertType.ERROR }));
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* onFetchIssueToEdit(action: Action<{ id: string; }>) {
  try {
    const { id } = action.payload;

    yield put(apiRequestIncrement());
    const { data } = yield call(api.showIssue, id);
    const issue = mapJSONToIssueShow(data);
    if (issue) yield put(issueFetchSuccessfully(issue));
  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* onIssueCreate(action: Action<IssueCreatePayload>) {
  try {
    const { payload } = action;

    yield put(apiRequestIncrement());
    yield call(api.createIssue, payload);
    yield put(emitIssuesEvent(IssuesEvent.CREATED_SUCCESSFULLY));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_INVALID) yield put(showAlert({ message: data.error, type: AlertType.ERROR }));
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchEnterpriseCreateEdit() {
  yield all([
    takeLatest(issueEdit, onEditIssue),
    takeLatest(issueCreate, onIssueCreate),
    takeLatest(fetchIssueToEdit, onFetchIssueToEdit),
  ]);
}