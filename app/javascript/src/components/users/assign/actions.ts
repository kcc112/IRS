import { AssignUserPayload } from '../../../api/payloads';
import { hideModalSuccess } from '../../app/redux/actions';
import { assignUserToEnterprise } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const assignToEnterprise = (id: string, payload: AssignUserPayload) =>  { 
  const req = {
    id: id,
    payload
  }
  return assignUserToEnterprise(req);;
};
