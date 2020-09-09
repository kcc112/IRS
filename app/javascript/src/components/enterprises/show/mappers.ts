import { IResponse } from '../../../api/types';
import { EnterpriseShow } from '../redux/types';

export const mapJSONToEnterpriseShow = (response: IResponse): EnterpriseShow | undefined => {
  const { data } = response;

  if (Array.isArray(data)) return undefined;

  return {
    id: data.id,
    type: data.type,
    attributes: {
      name: data.attributes.name ? data.attributes.name : '',
      description: data.attributes.description ? data.attributes.description : '',
    }
  }
};