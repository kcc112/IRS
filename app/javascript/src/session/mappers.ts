import { CurrentUser, AppRoles, Role } from './redux/types';
import { ICurrentUser, IRoles } from '../api/types';

export const mapJSONToCurrentUser = (response: ICurrentUser): CurrentUser => {
  return {
    id: response.data.id,
    role:	response.data.role as keyof typeof AppRoles,
    email: response.data.email,
    name:	response.data.name,
    surname: response.data.surname,
    enterprise: response.data.enterprise,
    userInformationsId: response.data.user_informations_id,
  };
};

export const mapJSONToRoleArray = (response: IRoles): Role[] => {
  const { data } = response;

  return data.roles.map(role => {
    return { id: role.id, role: role.role }
  })
};