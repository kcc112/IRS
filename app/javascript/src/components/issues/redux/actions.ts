import { createAction } from 'redux-act';

import { 
  IssuesIndex,
  IssueShow,
  IssuesEvent
} from './types';
import { 
  IssueEditPayload,
  IssueCreatePayload,
} from '../../../api/payloads';

export const issuesFetch = createAction('fetch issues trigger');
export const issueFetch = createAction<{id: string}>('fetch issue trigger');
export const issuesClear = createAction('clear issues');
export const issueClear = createAction('clear issue');
export const issuesFetchSuccessfully = createAction<IssuesIndex[]>('issues fetch successfully');
export const issueFetchSuccessfully = createAction<IssueShow>('issue fetch successfully');

export const issueEdit = createAction<{ 
  id: string;
  payload: IssueEditPayload;
}>('edit issue trigger');
export const fetchIssueToEdit = createAction<{id: string}>('fetch issue to edit');

export const issueCreate = createAction<IssueCreatePayload>('create issue trigger');


export const emitIssuesEvent = createAction<IssuesEvent>('emit issues event');
export const removeEventFromAccumulator = createAction<IssuesEvent>('remove event from accumulator');