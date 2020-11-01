import { IResponse } from '../../../api/types';
import { formatDate } from '../../../healpers/date-format-helper';
import { getRelatedObjectsByType, getRelationshipContentAsArray } from '../../../healpers/included-helper';
import { CommentsIndex } from '../redux/types';

export const mapJSONToCommentsIndex = (response: IResponse): CommentsIndex[] => {
  const { data, included } = response;

  if (!Array.isArray(data)) return [];

  return data.map(entity => {
    const [userRelated] = getRelatedObjectsByType(entity, included, 'user');
    const [userInfoRelation] = getRelationshipContentAsArray(userRelated, 'user_informations');
    const relatedUserInfo = userRelated ? included.find(obj => obj.id === userInfoRelation.id) : undefined;

    return {
      id: entity.id,
      type: entity.type,
      attributes: {
        comment: entity.attributes.content,
        createdAt: formatDate(entity.attributes.created_at),
        updatedAt: formatDate(entity.attributes.updated_at),
        commentOwner: relatedUserInfo ? {
          id: !Array.isArray(relatedUserInfo.relationships.user) &&
                  !Array.isArray(relatedUserInfo.relationships.user.data) ?
                  relatedUserInfo.relationships.user.data.id : '',
          name: relatedUserInfo.attributes.name,
          surname: relatedUserInfo.attributes.surname,
        } : undefined,
      },
    };
  });
};