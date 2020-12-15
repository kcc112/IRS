import { usersInformationsFetch, usersInformationsClear } from '../redux/actions';
import { showModalSuccess } from '../../app/redux/actions';
import { roleEdit } from '../../../session/redux/actions';
import { userActivate, userDeactivate } from '../../users/redux/actions';

export const fetchUsersInformations = () => usersInformationsFetch();

export const clearUsersInformations = () => usersInformationsClear();

export const showModal = () => showModalSuccess();

export const activateUser = (id: string, callback: () => void) => {
  const payload = {
    id: id,
    succesfullCallback: callback
  }
  return userActivate(payload);
};

export const deactivateUser = (id: string, callback: () => void) => {
  const payload = {
    id: id,
    succesfullCallback: callback
  }
  return userDeactivate(payload);
};

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