import { enterpriseCreate } from '../redux/actions';
import { EnterpriseEditPayload } from '../../../api/payloads';

export const createEnterprise = (formObject: EnterpriseEditPayload) => enterpriseCreate(formObject);