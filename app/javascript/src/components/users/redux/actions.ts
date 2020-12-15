import { createAction } from 'redux-act';
import { AssignUserPayload } from '../../../api/payloads';

export const userActivate = createAction<{
  id: string;
  succesfullCallback: () => void;
}>('activate user');

export const userDeactivate = createAction<{
  id: string;
  succesfullCallback: () => void;
}>('deactivate user');

export const assignUserToEnterprise = createAction<{ 
  id: string;
  payload: AssignUserPayload;
}>('assign user to enterprise');