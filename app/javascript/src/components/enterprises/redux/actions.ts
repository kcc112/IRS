import { createAction } from 'redux-act';

import { 
  EnterprisesIndex,
  EnterpriseEvent,
  EnterpriseShow
} from './types';
import { 
  EnterpriseEditPayload,
  EnterpriseCreatePayload
} from '../../../api/payloads';

export const enterprisesFetch = createAction('fetch enterprises trigger');
export const enterpriseFetch = createAction<{id: string}>('fetch enterprise trigger');
export const enterprisesClear = createAction('clear enterprises');
export const enterpriseClear = createAction('clear enterprise');
export const enterprisesFetchSuccessfully = createAction<EnterprisesIndex[]>('enterprises fetch successfully');
export const enterpriseFetchSuccessfully = createAction<EnterpriseShow>('enterprise fetch successfully');

export const enterpriseEdit = createAction<{ 
  id: string;
  payload: EnterpriseEditPayload;
}>('edit enterprise trigger');
export const fetchEnterpriseToEdit = createAction<{id: string}>('fetch enterprise to edit');

export const enterpriseCreate = createAction<EnterpriseCreatePayload>('create enterprise trigger');

export const enterpriseDelete = createAction<{id: string}>('enterprise delete');

export const emitEnterpriseEvent = createAction<EnterpriseEvent>('emit enterprise event');
export const removeEventFromAccumulator = createAction<EnterpriseEvent>('remove event from accumulator');