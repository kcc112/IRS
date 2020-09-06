import axios, { AxiosRequestConfig } from 'axios';

import paths from './paths';
import { EnterpriseEditPayload, EnterpriseCreatePayload } from './payloads';

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
    async fetchEnterprises() {
      return axiosInstance.get(paths.enterprises.index);
    },
    async createEnterprise(payload: EnterpriseCreatePayload) {
      return axiosInstance.post(paths.enterprises.create, payload);
    },
    async editEnterprise(id: string, payload: EnterpriseEditPayload) {
      return axiosInstance.put(paths.enterprises.edit(id), payload);
    }
  };
})(axiosInstance);