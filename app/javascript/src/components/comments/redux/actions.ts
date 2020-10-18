import { createAction } from 'redux-act';

import { 
  CommentsIndex,
  CommentsEvent
} from './types';
import { 
  CommentEditPayload,
  CommentCreatePayload
} from '../../../api/payloads';
import { IndexParams } from '../../../api/types';

export const commentsFetch = createAction<{params: IndexParams}>('fetch comments trigger');
export const commentsClear = createAction('clear comments');
export const commentsFetchSuccessfully = createAction<CommentsIndex[]>('comments fetch successfully');

export const commentEdit = createAction<{ 
  id: string;
  payload: CommentEditPayload;
}>('edit comment trigger');
export const commentEditSuccessfully = createAction<CommentsIndex>('comments edit successfully');

export const commentCreate = createAction<CommentCreatePayload>('create comment');
export const commentCreateSuccessfully = createAction<CommentsIndex>('comments create successfully');

export const commentDelete = createAction<{id: string}>('comment delete');

export const emitCommentsEvent = createAction<CommentsEvent>('emit comments event');
export const removeEventFromAccumulator = createAction<CommentsEvent>('remove event from accumulator');