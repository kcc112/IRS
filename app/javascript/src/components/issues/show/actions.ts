import { hideModalSuccess } from '../../app/redux/actions';
import { issueClear, issueFetch } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const fetchIssue = (id: string) => issueFetch({ id: id });

export const clearIssue = () => issueClear();