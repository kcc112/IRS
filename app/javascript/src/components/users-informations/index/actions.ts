import { usersInformationsFetch, usersInformationsClear } from '../redux/actions';
import { showModalSuccess } from '../../app/redux/actions';

export const fetchUsersInformations = () => usersInformationsFetch();

export const clearUsersInformations = () => usersInformationsClear();

export const showModal = () => showModalSuccess();