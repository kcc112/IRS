import { currentUserFetch, rolesFetch } from '../../session/redux/actions';

export const fetchCurrentUser = () => currentUserFetch();

export const fetchRoles = () => rolesFetch();