import { createAction } from 'redux-act';

import { 
  UserInformationsEvent,
  UsersInformationsIndex,
  UserInformationsShow,
} from './types';
import { 
  UserInformationsEditPayload,
} from '../../../api/payloads';

export const usersInformationsFetch = createAction('fetch users informations trigger');
export const userInformationsFetch = createAction<{id: string}>('fetch user informations trigger');
export const usersInformationsClear = createAction('clear users informations');
export const userInformationsClear = createAction('clear user informations');
export const usersInformationsFetchSuccessfully = createAction<UsersInformationsIndex[]>('users informations fetch successfully');
export const userInformationsFetchSuccessfully = createAction<UserInformationsShow>('user informations fetch successfully');

export const userInformationsEdit = createAction<{ 
  id: string;
  payload: UserInformationsEditPayload;
}>('edit user informations trigger');
export const fetchUserInformationsToEdit = createAction<{id: string}>('fetch user informations to edit');


export const emitUserInformationsEvent = createAction<UserInformationsEvent>('emit users informations event');
export const removeEventFromAccumulator = createAction<UserInformationsEvent>('remove event from accumulator');