import { IResponse } from '../../../api/types';
import { EnterprisesIndex } from '../redux/types';

export const mapJSONToEnterprisesIndex = (response: IResponse): EnterprisesIndex[] => {
  const { data } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        name: entity.attributes.name ? entity.attributes.name : '',
        description: entity.attributes.description ? entity.attributes.description : '',
      }
    }
  });
};