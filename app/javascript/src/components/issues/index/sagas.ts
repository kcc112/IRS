import {
  debounce, call, all, put
} from 'redux-saga/effects';

import { issuesFetch } from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError
} from '../../app/redux/actions';

export function* onIssuesFetch() {
  try {
    yield put(apiRequestIncrement());
    yield call(api.fetchIssues);

  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchIssuesIndex() {
  yield all([
    debounce(200, issuesFetch, onIssuesFetch),
  ]);
}