import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { AlertType } from '../../shared/alerts/types';
import { ApiError, ErrorTypes } from '../../../api/errors';
import { 
  apiRequestDecrement,
  apiRequestError,
  apiRequestIncrement,
  showAlert
} from '../../app/redux/actions';
import { api } from '../../../api/api';
import { commentDelete, emitCommentsEvent } from '../redux/actions';
import { CommentsEvent } from '../redux/types';


export function* onCommentDelete(action: Action<{id: string }>) {
  try {
    const { id } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.deleteComment, id);
    yield put(emitCommentsEvent(CommentsEvent.DELETED_SUCCESSFULLY));
    yield put(showAlert({ message: 'Comment deleted successfully', type: AlertType.SUCCESS }));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_NOT_FOUND) {
      yield put(showAlert({ message: "Couldn't find comment", type: AlertType.ERROR }));
      yield put(emitCommentsEvent(CommentsEvent.DELETED_SUCCESSFULLY));
    }
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchCommentDelete() {
  yield all([
    takeLatest(commentDelete, onCommentDelete),
  ]);
}