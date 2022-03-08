import { request } from '../axios';

const authApi = {
  loginWithUserData: (id: string | string[]) =>
    request.get(`/auth/result/${id}`)
};

export default authApi;
