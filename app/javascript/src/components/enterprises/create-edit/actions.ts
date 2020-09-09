import { enterpriseCreate, fetchEnterpriseToEdit, enterpriseClear, enterpriseEdit } from '../redux/actions';
import { EnterpriseEditPayload } from '../../../api/payloads';
import { hideModalSuccess } from '../../app/redux/actions';

export const createEnterprise = (formObject: EnterpriseEditPayload) => enterpriseCreate(formObject);

export const hideModal = () => hideModalSuccess();

export const fetchEnterprise = (id: string) => fetchEnterpriseToEdit({ id: id });

export const clearEnterprise = () => enterpriseClear();

export const editEnterprise = (args: { id: string; formObject: EnterpriseEditPayload; }) => {
  const { id, formObject } = args;
  const payload = {
    id: id,
    payload: formObject,
  };
  return enterpriseEdit(payload);
};