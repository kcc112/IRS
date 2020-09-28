import {
  debounce, call, all, put
} from 'redux-saga/effects';

import { issuesFetch, issuesFetchSuccessfully } from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError
} from '../../app/redux/actions';
import { mapJSONToIssuesIndex } from './mappers';

export function* onIssuesFetch() {
  try {
    yield put(apiRequestIncrement());
    const { data } = yield call(api.fetchIssues);

    const issues = mapJSONToIssuesIndex(data);

    yield put(issuesFetchSuccessfully(issues));
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