import { IResponse } from '../../../api/types';
import { UserInformationsShow } from '../redux/types';

export const mapJSONToUserInformationsShow = (response: IResponse): UserInformationsShow | undefined => {
  const { data } = response;

  if (Array.isArray(data)) return undefined;

  return {
    id: data.id,
    type: data.type,
    attributes: {
      name: data.attributes.name ? data.attributes.name : '',
      surname: data.attributes.surname ? data.attributes.surname : '',
      phoneNumber: data.attributes.phone_number ? data.attributes.phone_number : '',
    }
  }
};