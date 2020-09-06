import { enterprisesFetch, enterprisesClear } from '../redux/actions';

export const fetchEnterprises = () => enterprisesFetch();

export const clearEnterprises = () => enterprisesClear();