import { hideModalSuccess } from '../../app/redux/actions';
import { enterpriseDelete } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const deleteEnterprise = (id: string) => enterpriseDelete({ id: id });
