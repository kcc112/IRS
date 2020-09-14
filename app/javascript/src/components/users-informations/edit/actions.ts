import { 
  fetchUserInformationsToEdit,
  userInformationsClear,
  userInformationsEdit
} from '../redux/actions';
import { hideModalSuccess } from '../../app/redux/actions';
import { UserInformationsEditFormObject } from './types';

export const hideModal = () => hideModalSuccess();

export const fetchUserInformations = (id: string) => fetchUserInformationsToEdit({ id: id });

export const clearUserInformations = () => userInformationsClear();

export const editUserInformations = (args: { id: string; formObject: UserInformationsEditFormObject; }) => {
  const { id, formObject } = args;
  const payload = {
    id: id,
    payload: {
      name: formObject.name,
      surname: formObject.surname,
      phone_number: formObject.phoneNumber,
    },
  };
  return userInformationsEdit(payload);
};