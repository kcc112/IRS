import { IResponse } from '../../../api/types';
import { UsersInformationsIndex } from '../redux/types';

export const mapJSONToUsersInformationsIndex = (response: IResponse): UsersInformationsIndex[] => {
  const { data } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        name: entity.attributes.name ? entity.attributes.name : '',
        surname: entity.attributes.surname ? entity.attributes.surname : '',
        phone_number: entity.attributes.phone_number ? entity.attributes.phone_number  : '',
      }
    }
  });
};