import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  CommentsIndex, CommentsEvent
} from './types';

export const selectIndexComments = createSelector<AppState, CommentsIndex[], CommentsIndex[]>(
  state => state.comments.entities.comments,
  comments => comments
);

export const selectCommentsEvent = createSelector<AppState, CommentsEvent[], CommentsEvent[]>(
  state => state.comments.eventAccumulator,
  eventAccumulator => eventAccumulator
);
