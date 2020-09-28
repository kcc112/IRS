import { IResponse } from '../../../api/types';
import { formatDate } from '../../../healpers/date-format-helper';
import { getRelatedObjectsByType, getRelationshipContentAsArray } from '../../../healpers/included-helper';
import { IssueShow } from '../redux/types';

export const mapJSONToIssueShow = (response: IResponse): IssueShow | undefined => {
  const { data, included } = response;

  if (Array.isArray(data)) return undefined;

  const [reportedBy] = getRelatedObjectsByType(data, included, 'reported_by');
  const [assignedTo] = getRelatedObjectsByType(data, included, 'assigned_to');
  const [reportedByUserInfoRelation] = getRelationshipContentAsArray(reportedBy, 'user_informations');
  const [assignedToUserInfoRelation] = getRelationshipContentAsArray(assignedTo, 'user_informations');
  const reportedByUserInfo = reportedBy ? included.find(obj => obj.id === reportedByUserInfoRelation.id) : undefined;
  const assignedToUserInfo = assignedTo ? included.find(obj => obj.id === assignedToUserInfoRelation.id) : undefined;

  return {
    id: data.id,
    type: data.type,
    attributes: {
      issueType: data.attributes.issue_type,
      description: data.attributes.description ? data.attributes.description : '',
      createdAt: formatDate(data.attributes.created_at),
      updatedAt: formatDate(data.attributes.updated_at),
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
};