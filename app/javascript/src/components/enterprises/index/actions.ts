import { enterprisesFetch, enterprisesClear } from '../redux/actions';
import { showModalSuccess } from '../../app/redux/actions';

export const fetchEnterprises = () => enterprisesFetch();

export const clearEnterprises = () => enterprisesClear();

export const showModal = () => showModalSuccess();