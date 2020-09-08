import { createAction } from 'redux-act';

import { 
  EnterprisesIndex,
  EnterpriseEvent
} from './types';
import { 
  EnterpriseEditPayload,
  EnterpriseCreatePayload
} from '../../../api/payloads';

export const enterprisesFetch = createAction('fetch enterprises trigger');
export const enterprisesClear = createAction('clear enterprises');
export const enterprisesFetchSuccessfully = createAction<EnterprisesIndex[]>('enterprises fetch successfully');

export const enterpriseEdit = createAction<{ 
  id: string;
  payload: EnterpriseEditPayload;
}>('edit enterprise trigger');

export const enterpriseCreate = createAction<EnterpriseCreatePayload>('create enterprise trigger');

export const emitEnterpriseEvent = createAction<EnterpriseEvent>('emit enterprise event');
export const removeEventFromAccumulator = createAction<EnterpriseEvent>('remove event from accumulator');