import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  IssuesIndex,
  IssueShow,
  IssuesEvent,
} from './types';

export const selectIssuesIndex = createSelector<AppState, IssuesIndex[], IssuesIndex[]>(
  state => state.issues.entities.issues,
  issues => issues
);

export const selectIssue = createSelector<AppState, IssueShow | undefined, IssueShow | undefined>(
  state => state.issues.entities.issue,
  issue => issue
);

export const selectIssuesEvent = createSelector<AppState, IssuesEvent[], IssuesEvent[]>(
  state => state.issues.eventAccumulator,
  eventAccumulator => eventAccumulator
);
