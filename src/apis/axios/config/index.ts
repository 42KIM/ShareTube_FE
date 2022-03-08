import axios from 'axios';
import { BASE_URL, REQUEST_TYPE } from '@/constants';

const setInstance = <T>(requestType: string) => {
  const instance = axios.create({ baseURL: BASE_URL });
  // request interceptor
  switch (requestType) {
    case REQUEST_TYPE.DEFAULT:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'application/json',
            ...config.headers
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );
      break;

    case REQUEST_TYPE.AUTH:
      instance.interceptors.request.use(
        (config) => {
          config.headers = {
            'Content-Type': 'application/json',
            // storage에서 token 가져오기
            token: `${''}`,
            ...config.headers
          };
          return config;
        },
        (error) => Promise.reject(error.response)
      );
      break;
  }
  // response interceptor
  instance.interceptors.response.use(
    (response) => {
      if (response.data.success) return response.data.response;
    },
    (error) => Promise.reject(error.response)
  );

  return instance;
};

export { setInstance };
