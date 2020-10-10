import { IResponse } from '../../../api/types';
import { formatDate } from '../../../healpers/date-format-helper';
import { getRelatedObjectsByType, getRelationshipContentAsArray } from '../../../healpers/included-helper';
import { IssuesIndex } from '../redux/types';

export const mapJSONToIssuesIndex = (response: IResponse): IssuesIndex[] => {
  const { data, included } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    const [reportedBy] = getRelatedObjectsByType(entity, included, 'reported_by');
    const [assignedTo] = getRelatedObjectsByType(entity, included, 'assigned_to');
    const [reportedByUserInfoRelation] = getRelationshipContentAsArray(reportedBy, 'user_informations');
    const [assignedToUserInfoRelation] = getRelationshipContentAsArray(assignedTo, 'user_informations');
    const reportedByUserInfo = reportedBy ? included.find(obj => obj.id === reportedByUserInfoRelation.id) : undefined;
    const assignedToUserInfo = assignedTo ? included.find(obj => obj.id === assignedToUserInfoRelation.id) : undefined;

    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        issueType: entity.attributes.issue_type,
        description: entity.attributes.description ? entity.attributes.description : '',
        createdAt: formatDate(entity.attributes.created_at),
        updatedAt: formatDate(entity.attributes.updated_at),
        issueStatus: entity.attributes.status,
        reportedBy: reportedByUserInfo ? {
          userId: reportedByUserInfo.id,
          userName: reportedByUserInfo.attributes.name,
          userSurname: reportedByUserInfo.attributes.surname,
        } : undefined,
        assignedTo: assignedToUserInfo ? {
          userId: assignedToUserInfo.id,
          userName: assignedToUserInfo.attributes.name,
          userSurname: assignedToUserInfo.attributes.surname,
        } : undefined,
      },
    };
  });
};