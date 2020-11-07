import { CommentCreatePayload, CommentEditPayload } from '../../../api/payloads';
import { commentCreate, commentEdit } from '../redux/actions';

export const createComment = (formObject: CommentCreatePayload) => commentCreate(formObject);

export const editComment = (id: string, formObject: CommentEditPayload) => {
  const payload = {
    id: id,
    payload: formObject,
  }
  return commentEdit(payload);
}

