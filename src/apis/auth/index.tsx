import { request, authRequest } from '../axios';

const authApi = {
  // response data 타입 정의 필요
  getLoginData: (id: string) => request.get(`/auth/result/${id}`)
};

export default authApi;
