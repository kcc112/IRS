import { enterpriseCreate } from '../redux/actions';
import { EnterpriseEditPayload } from '../../../api/payloads';
import { hideModalSuccess } from '../../app/redux/actions';

export const createEnterprise = (formObject: EnterpriseEditPayload) => enterpriseCreate(formObject);
export const hideModal = () => hideModalSuccess();