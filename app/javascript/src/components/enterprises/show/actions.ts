import { hideModalSuccess } from '../../app/redux/actions';
import { enterpriseFetch } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const fetchEnterprise = (id: string) => enterpriseFetch({ id: id })