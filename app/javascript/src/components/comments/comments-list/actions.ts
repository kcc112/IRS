import { hideModalSuccess, showModalSuccess } from '../../app/redux/actions';
import { commentsClear, commentsFetch } from '../redux/actions';

export const fetchComments = (id: string) => {
  const params = {
    issue_id: id
  }
  return commentsFetch({ params });
}

export const clearComments = () => commentsClear();

export const showModal = () => showModalSuccess();

export const hideModal = () => hideModalSuccess();
