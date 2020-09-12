import { IResponse } from '../../../api/types';
import { UsersInformationsIndex } from '../redux/types';
import { getRelatedObjectsByType } from '../../../healpers/included-helper';
import { formatDate } from '../../../healpers/date-format-helper';

export const mapJSONToUsersInformationsIndex = (response: IResponse): UsersInformationsIndex[] => {
  const { data, included } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    const user = getRelatedObjectsByType(entity, included, 'user');
    const enterpriseEntity = getRelatedObjectsByType(user[0], included, 'enterprise');
    const enterprise = enterpriseEntity[0] ? included.find(obj => obj.id === enterpriseEntity[0].id) : undefined;

    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        name: entity.attributes.name ? entity.attributes.name : '',
        surname: entity.attributes.surname ? entity.attributes.surname : '',
        phone_number: entity.attributes.phone_number ? entity.attributes.phone_number  : '',
        email: user[0] ? user[0].attributes.email : '', 
        role: user[0] ? user[0].attributes.role.toUpperCase() : '', 
        createdAt: user[0] ? formatDate(user[0].attributes.created_at) : '',
        enterpriseId: enterprise ? enterprise.id : '',
        enterpriseName: enterprise ? enterprise.attributes.name : '', 
      }
    }
  });
};