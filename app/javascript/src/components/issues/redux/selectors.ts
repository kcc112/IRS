import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  IssuesIndex,
  IssueShow,
  IssuesEvent,
  IssuesTypes,
  IssueEdit
} from './types';

export const selectIssuesIndex = createSelector<AppState, IssuesIndex[], IssuesIndex[]>(
  state => state.issues.entities.issues,
  issues => issues
);

export const selectIssue = createSelector<AppState, IssueShow | undefined, IssueShow | undefined>(
  state => state.issues.entities.issue,
  issue => issue
);

export const selectIssueEdit = createSelector<AppState, IssueEdit | undefined, IssueEdit | undefined>(
  state => state.issues.entities.issueEdit,
  issue => issue
);

export const selectIssuesEvent = createSelector<AppState, IssuesEvent[], IssuesEvent[]>(
  state => state.issues.eventAccumulator,
  eventAccumulator => eventAccumulator
);

export const selectIssuesTypes = createSelector<AppState, IssuesTypes[], IssuesTypes[]>(
  state => state.issues.meta.issuesTypes,
  issuesTypes => issuesTypes
);
