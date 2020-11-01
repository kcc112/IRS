import { CommentCreatePayload } from '../../../api/payloads';
import { commentCreate } from '../redux/actions';

export const createComment = (formObject: CommentCreatePayload) => commentCreate(formObject);
