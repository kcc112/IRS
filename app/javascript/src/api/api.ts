import axios, { AxiosRequestConfig } from 'axios';

import paths from './paths';
import { 
  EnterpriseEditPayload,
  EnterpriseCreatePayload,
  UserInformationsEditPayload,
  UserRoleEditPayload 
} from './payloads';

export const axiosInstance = axios.create({
  baseURL: paths.baseUrl,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const customConfig = { ...config };
  const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  customConfig.headers['X-CSRF-Token'] = token;
  return customConfig;
});

export const api = (axiosIns => {
  const axiosInstance = axiosIns;
  return {
    async signOut() {
      return axiosInstance.delete(paths.devise.delete);
    },
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
  };
})(axiosInstance);