import { createReducer } from 'redux-act';

import { IssuesState } from './types';
import {
  issuesFetchSuccessfully,
  issueFetchSuccessfully,
  issuesClear,
  issueClear,
  removeEventFromAccumulator, 
  emitIssuesEvent,
  issuesTypesFetchSuccessfully
} from './actions';

const initialState: IssuesState = {
  entities: {
    issues: [],
    issue: undefined,
  },
  meta: {
    issuesTypes: [],
  },
  eventAccumulator: [],
};

const issues = createReducer<IssuesState>({}, initialState);

issues.on(issuesFetchSuccessfully, (state, issues) => ({
  ...state,
  entities: {
    ...state.entities,
    issues,
  },
}));

issues.on(issueFetchSuccessfully, (state, issue) => ({
  ...state,
  entities: {
    ...state.entities,
    issue,
  },
}));

issues.on(issuesClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    issues: [],
  },
}));

issues.on(issueClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    issue: undefined,
  },
}));

issues.on(issuesTypesFetchSuccessfully, (state, issuesTypes) => ({
  ...state,
  meta: {
    ...state.meta,
    issuesTypes,
  },
}));

issues.on(removeEventFromAccumulator, (state, newEvent) => ({
  ...state,
  eventAccumulator: state.eventAccumulator.filter(event=> event !== newEvent)
}));

issues.on(emitIssuesEvent, (state, event) => ({
  ...state,
  eventAccumulator: [...state.eventAccumulator, event]
}));

export default issues;