import {
  debounce, call, all, put
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { commentsFetch, commentsFetchSuccessfully } from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError
} from '../../app/redux/actions';
import { IndexParams } from '../../../api/types';
import { mapJSONToCommentsIndex } from './mappers';

export function* onCommentsFetch(action: Action<{ params: IndexParams; }>) {
  try {
    const { params } = action.payload;

    yield put(apiRequestIncrement());
    const { data } = yield call(api.fetchCommentsList, params);

    const comments = mapJSONToCommentsIndex(data);

    yield put(commentsFetchSuccessfully(comments));
    yield put(apiRequestDecrement());
  } catch (err) {
    yield put(apiRequestError(err));
  }
}

export function* watchCommentsList() {
  yield all([
    debounce(200, commentsFetch, onCommentsFetch),
  ]);
}