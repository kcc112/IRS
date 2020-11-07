import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import routes from '../routes/routes';
import { currentUserFetch, rolesFetch } from '../session/redux/actions';
import store from '../store/store';
import paths from './paths';
import { 
  EnterpriseEditPayload,
  EnterpriseCreatePayload,
  UserInformationsEditPayload,
  UserRoleEditPayload,
  IssueCreatePayload,
  IssueEditPayload, 
  IssueAssignPayload, 
  CommentCreatePayload
} from './payloads';
import { IndexParams } from './types';

export const axiosInstance = axios.create({
  baseURL: paths.baseUrl,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const customConfig = { ...config };
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  customConfig.headers['X-CSRF-Token'] = token;
  return customConfig;
});

axiosInstance.interceptors.response.use((resopnse: AxiosResponse) => {
  return resopnse;
}, (error) => {
  if (error.response.status === 401 || error.response.status === 403) {
    const { dispatch } = store;
    dispatch(currentUserFetch());
    dispatch(rolesFetch());
    window.location.replace(routes.irs.root);
  } else {
    throw error;
  }
});

export const api = (axiosIns => {
  const axiosInstance = axiosIns;
  return {
    async fetchApplicationRoles() {
      return axiosInstance.get(paths.session.roles.index);
    },
    async fetchCurentUser() {
      return axiosInstance.get(paths.session.currentUser.index);
    },
    async editUserRole(id: string, payload: UserRoleEditPayload) {
      return axiosInstance.put(paths.session.roles.edit(id), payload);
    },

    async fetchEnterprises() {
      return axiosInstance.get(paths.enterprises.index);
    },
    async createEnterprise(payload: EnterpriseCreatePayload) {
      return axiosInstance.post(paths.enterprises.create, payload);
    },
    async editEnterprise(id: string, payload: EnterpriseEditPayload) {
      return axiosInstance.put(paths.enterprises.edit(id), payload);
    },
    async showEnterprise(id: string) {
      return axiosInstance.get(paths.enterprises.show(id));
    },
    async deleteEnterprise(id: string) {
      return axiosInstance.delete(paths.enterprises.delete(id));
    },

    async fetchUsersInformations() {
      return axiosInstance.get(paths.usersInformations.index);
    },
    async showUserInformations(id: string) {
      return axiosInstance.get(paths.usersInformations.show(id));
    },
    async editUserInformations(id: string, payload: UserInformationsEditPayload) {
      return axiosInstance.put(paths.usersInformations.edit(id), payload);
    },

    async fetchIssues() {
      return axiosInstance.get(paths.issues.index);
    },
    async createIssue(payload: IssueCreatePayload) {
      return axiosInstance.post(paths.issues.create, payload);
    },
    async editIssue(id: string, payload: IssueEditPayload) {
      return axiosInstance.put(paths.issues.edit(id), payload);
    },
    async showIssue(id: string) {
      return axiosInstance.get(paths.issues.show(id));
    },
    async deleteIssue(id: string) {
      return axiosInstance.delete(paths.issues.delete(id));
    },
    async fetchIssuesTypes() {
      return axiosInstance.get(paths.issues.issuesTypes);
    },
    async assignToIssues(id: string, payload: IssueAssignPayload) {
      return axiosInstance.put(paths.issues.assign(id), payload);
    },
    async resolveIssue(id: string) {
      return axiosInstance.put(paths.issues.resolve(id));
    },

    async fetchCommentsList(params?: IndexParams) {
      return axiosInstance.get(paths.comments.comments_list, { params });
    },
    async createComment(payload: CommentCreatePayload) {
      return axiosInstance.post(paths.comments.create, payload);
    },
    async deleteComment(id: string) {
      return axiosInstance.delete(paths.comments.delete(id));
    },
  };
})(axiosInstance);