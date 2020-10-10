import { hideModalSuccess } from '../../app/redux/actions';
import { resolveIssue } from '../redux/actions';

export const hideModal = () => hideModalSuccess();

export const issueResolve = (issueId: string) => {
  const payload = {
    id: issueId,
  }
  return resolveIssue(payload);
}