import { IResponseObject, IEntityType, IResponseBase } from '../api/types';

export const getRelatedObjectsByType = (data: IResponseObject, included: IResponseObject[], type: IEntityType): IResponseObject[] => {
  const relationship = getRelationshipContentAsArray(data, type);
  const includedIds = relationship.map(data => data.id);
  return included.filter(include => includedIds.indexOf(include.id) >= 0);
}

function getRelationshipContentAsArray(data: IResponseObject, type: IEntityType): IResponseBase[] {
  if (
    data
    && type in data.relationships
    && !Array.isArray(data.relationships[type])
  ) {
    const relationship = data.relationships[type];
    if (relationship && 'data' in relationship && relationship.data && Array.isArray(relationship.data)) return relationship.data;
    if (relationship && 'data' in relationship && relationship.data && !Array.isArray(relationship.data)) return [relationship.data];
  }
  return [];
}