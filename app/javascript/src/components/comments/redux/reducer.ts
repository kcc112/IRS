import { createReducer } from 'redux-act';

import { CommentsState } from './types';
import {
  removeEventFromAccumulator,
  commentsFetchSuccessfully,
  commentsClear,
  emitCommentsEvent,
  commentEditSuccessfully,
  commentCreateSuccessfully, commentDelete
} from './actions';

const initialState: CommentsState = {
  entities: {
    comments: [],
  },
  eventAccumulator: [],
};

const comments = createReducer<CommentsState>({}, initialState);

comments.on(commentsFetchSuccessfully, (state, comments) => ({
  ...state,
  entities: {
    ...state.entities,
    comments,
  },
}));

comments.on(commentsClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    comments: [],
  },
}));

comments.on(commentEditSuccessfully, (state, comment) => ({
  ...state,
  entities: {
    ...state.entities,
    comments: [...state.entities.comments.filter(com => com.id === comment.id), comment],
  },
}));

comments.on(commentCreateSuccessfully, (state, comment) => ({
  ...state,
  entities: {
    ...state.entities,
    comments: [...state.entities.comments, comment],
  },
}));

comments.on(commentDelete, (state, payload) => ({
  ...state,
  entities: {
    ...state.entities,
    comments: state.entities.comments.filter(comment => comment.id === payload.id),
  },
}));

comments.on(removeEventFromAccumulator, (state, newEvent) => ({
  ...state,
  eventAccumulator: state.eventAccumulator.filter(event=> event !== newEvent)
}));

comments.on(emitCommentsEvent, (state, event) => ({
  ...state,
  eventAccumulator: [...state.eventAccumulator, event]
}));

export default comments;