import { hideModalSuccess } from '../../app/redux/actions';
import { assignToIssue } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const assignUserToIssue = (issueId: string, userId: string) => {
  const payload = {
    id: issueId,
    payload: {
      assigned_to_id: userId,
    }
  }
  return assignToIssue(payload);
}