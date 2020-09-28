import { 
  issueCreate,
  fetchIssueToEdit,
  issueClear,
  issueEdit
} from '../redux/actions';
import { hideModalSuccess } from '../../app/redux/actions';
import { IssueEditCreateFormObject } from './types';

export const createIssue = (formObject: IssueEditCreateFormObject) => {
  const payload = {
    description: formObject.description,
    issue_type: formObject.issueType,
    reported_by_id: formObject.reportedById
  }
  return issueCreate(payload);
}

export const hideModal = () => hideModalSuccess();

export const fetchIssue = (id: string) => fetchIssueToEdit({ id: id });

export const clearIssue = () => issueClear();

export const editIssue = (args: { id: string; formObject: IssueEditCreateFormObject; }) => {
  const { id, formObject } = args;
  const payload = {
    id: id,
    payload: {
      description: formObject.description,
      issue_type: formObject.issueType,
    },
  };
  return issueEdit(payload);
};
