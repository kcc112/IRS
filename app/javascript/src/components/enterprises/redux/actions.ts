import { createAction } from 'redux-act';

import { 
  EnterprisesIndex,
  EnterpriseShow
} from './types';
import { 
  EnterpriseEditPayload,
  EnterpriseCreatePayload
} from '../../../api/payloads';

export const enterprisesFetch = createAction('fetch enterprises trigger');
export const enterprisesFetchSuccessfully = createAction<EnterprisesIndex[]>('enterprises fetch successfully');

export const enterpriseEdit = createAction<{ 
  id: string;
  payload: EnterpriseEditPayload;
}>('edit enterprise trigger');
export const enterpriseEditedSuccessfully = createAction<EnterpriseShow>('enterprise edited successfully')

export const enterpriseCreate = createAction<EnterpriseCreatePayload>('create enterprise trigger');
export const enterpriseCreatedSuccessfully = createAction<EnterpriseShow>('enterprise created successfully')
