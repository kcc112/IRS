import { IResponse } from '../../../api/types';
import { UsersInformationsIndex } from '../redux/types';
import { getRelatedObjectsByType } from '../../../healpers/included-helper';
import { formatDate } from '../../../healpers/date-format-helper';

export const mapJSONToUsersInformationsIndexArray = (response: IResponse): UsersInformationsIndex[] => {
  const { data, included } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    const [user] = getRelatedObjectsByType(entity, included, 'user');
    const [enterpriseEntity] = getRelatedObjectsByType(user, included, 'enterprise');
    const enterprise = enterpriseEntity ? included.find(obj => obj.id === enterpriseEntity.id) : undefined;

    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        name: entity.attributes.name ? entity.attributes.name : '',
        surname: entity.attributes.surname ? entity.attributes.surname : '',
        phone_number: entity.attributes.phone_number ? entity.attributes.phone_number  : '',
        email: user ? user.attributes.email : '', 
        role: user ? user.attributes.role.toUpperCase() : '', 
        createdAt: user ? formatDate(user.attributes.created_at) : '',
        enterpriseId: enterprise ? enterprise.id : '',
        enterpriseName: enterprise ? enterprise.attributes.name : '',
        userId: user ? user.id : '',
      }
    }
  });
};