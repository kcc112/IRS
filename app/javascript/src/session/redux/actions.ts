import { createAction } from 'redux-act';

import { Role, CurrentUser } from './types';

export const rolesFetch = createAction('fetch roles');
export const rolesFetchSuccesfull = createAction<Role[]>('succesfully fetch roles');

export const currentUserFetch = createAction('fetch current user');
export const currentUserFetchSuccesfull = createAction<CurrentUser>('succesfully fetch current user');
