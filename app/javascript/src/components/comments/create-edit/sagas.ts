import {
  call, all, put, takeLatest
} from 'redux-saga/effects';
import { Action } from 'redux-act';

import { 
  commentCreate, commentEdit, emitCommentsEvent
} from '../redux/actions';
import { api } from '../../../api/api';
import {
  apiRequestIncrement,
  apiRequestDecrement,
  apiRequestError,
  showAlert,
} from '../../app/redux/actions';
import { CommentCreatePayload, CommentEditPayload } from '../../../api/payloads';
import { AlertType } from '../../shared/alerts/types';
import { CommentsEvent } from '../redux/types';
import { ApiError, ErrorTypes } from '../../../api/errors';

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

export function* onEditComment(action: Action<{ id: string; payload: CommentEditPayload }>) {
  try {
    const { id, payload } = action.payload;

    yield put(apiRequestIncrement());
    yield call(api.editComment, id, payload);
    yield put(emitCommentsEvent(CommentsEvent.EDITED_SUCCESSFULLY));
    yield put(showAlert({ message: 'Comment updated successfully', type: AlertType.SUCCESS }));
  } catch (err) {
    const { response } = err;
    const data = response.data as ApiError;
    if (data && data.type === ErrorTypes.RECORD_INVALID) yield put(showAlert({ message: data.error, type: AlertType.ERROR }));
    yield put(apiRequestError(err));
  } finally {
    yield put(apiRequestDecrement());
  }
}

export function* watchCommentCreateEdit() {
  yield all([
    takeLatest(commentCreate, onCommentCreate),
    takeLatest(commentEdit, onEditComment),
  ]);
}