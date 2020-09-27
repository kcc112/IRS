import { issuesFetch, issuesClear } from '../redux/actions';
import { showModalSuccess } from '../../app/redux/actions';

export const fetchIssues = () => issuesFetch();

export const clearIssues = () => issuesClear();

export const showModal = () => showModalSuccess();