import axios from 'axios';

import paths from './paths';

export const axiosInstance = axios.create({
  baseURL: paths.baseUrl,
});

export const api = (axiosIns => {
  const axiosInstance = axiosIns;
  return {

  };
})(axiosInstance);