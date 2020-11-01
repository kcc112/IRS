import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  commentCreate, emitCommentsEvent
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert,
} from '../../app/redux/actions';
import { CommentCreatePayload } from '../../../api/payloads';
import { AlertType } from '../../shared/alerts/types';
import { CommentsEvent } from '../redux/types';

export function* onCommentCreate(action: Action<CommentCreatePayload>) {
  try {
    const { payload } = action;

    yield put(apiRequestIncrement());
    yield call(api.createComment, payload);
    yield put(emitCommentsEvent(CommentsEvent.CREATED_SUCCESSFULLY));
    yield put(showAlert({ message: 'Comment created successfully', type: AlertType.SUCCESS }));
  } catch (err) {
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchCommentCreate() {
  yield all([
    takeLatest(commentCreate, onCommentCreate),
  ]);
}