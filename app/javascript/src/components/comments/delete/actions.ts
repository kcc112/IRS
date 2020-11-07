import { hideModalSuccess } from '../../app/redux/actions';
import { commentDelete } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const deleteComment = (id: string) => commentDelete({ id: id });
