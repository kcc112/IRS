import axios from 'axios';

import paths from './paths';

export const axiosInstance = axios.create({
  baseURL: paths.baseUrl,
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
  };
})(axiosInstance);