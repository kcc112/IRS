import { createAction } from 'redux-act';

import { UserRoleEditPayload } from '../../api/payloads';
import { Role, CurrentUser } from './types';

export const rolesFetch = createAction('trigger fetch roles');
export const rolesFetchSuccesfull = createAction<Role[]>('succesfully fetch roles');

export const currentUserFetch = createAction('trigger fetch current user');
export const currentUserFetchSuccesfull = createAction<CurrentUser>('succesfully fetch current user');


export const roleEdit = createAction<{
  userId: string;
  payload: UserRoleEditPayload;
}>('trigger edit role');
