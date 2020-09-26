import { usersInformationsFetch, usersInformationsClear } from '../redux/actions';
import { showModalSuccess } from '../../app/redux/actions';
import { roleEdit } from '../../../session/redux/actions';

export const fetchUsersInformations = () => usersInformationsFetch();

export const clearUsersInformations = () => usersInformationsClear();

export const showModal = () => showModalSuccess();

export const editRole = (userId: string, roleId: string) => {
  return roleEdit({
    userId,
    payload: {
      role: {
        value: roleId,
      },
    },
  });
};