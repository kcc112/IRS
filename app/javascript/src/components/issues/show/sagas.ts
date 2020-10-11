import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  issueFetch,
  issueFetchSuccessfully
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
} from '../../app/redux/actions';
import { mapJSONToIssueShow } from './mappers';

export function* onIssueFetch(action: Action<{ id: string; }>) {
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

export function* watchIssueShow() {
  yield all([takeLatest(issueFetch, onIssueFetch)]);
}