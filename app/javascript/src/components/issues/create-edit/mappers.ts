import { IIssuesTypes } from '../../../api/types';
import { IssuesTypes } from '../redux/types';


export const mapJSONToIssuesTypesArray = (response: IIssuesTypes): IssuesTypes[] => {
  const { types } = response;

  return types.map(type => {
    return { id: type.id, type: type.type }
  })
};