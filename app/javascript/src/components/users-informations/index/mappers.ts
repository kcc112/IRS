import { IResponse } from '../../../api/types';
import { UsersInformationsIndex } from '../redux/types';
import { getRelatedObjectsByType } from '../../../healpers/included-helper';
import { formatDate } from '../../../healpers/date-format-helper';

export const mapJSONToUsersInformationsIndex = (response: IResponse): UsersInformationsIndex[] => {
  const { data, included } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    const users = getRelatedObjectsByType(entity, included, 'user');
    
    const enterprises = getRelatedObjectsByType(users[0], included, 'enterprise');

    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        name: entity.attributes.name ? entity.attributes.name : '',
        surname: entity.attributes.surname ? entity.attributes.surname : '',
        phone_number: entity.attributes.phone_number ? entity.attributes.phone_number  : '',
        email: users[0] ? users[0].attributes.email : '', 
        role: users[0] ? users[0].attributes.role.toUpperCase() : '', 
        createdAt: users[0] ? formatDate(users[0].attributes.created_at) : '',
        enterpriseId: enterprises[0] ? enterprises[0].id : '',
        enterpriseName: enterprises[0] ? enterprises[0].attributes.name : '', 
      }
    }
  });
};