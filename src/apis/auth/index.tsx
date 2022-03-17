import { request, authRequest } from '../axios';
import { ILogInPayload } from '@/types';

const authApi = {
  getLoginData: (id: string): Promise<ILogInPayload> =>
    request.get(`/auth/result/${id}`)
};

export default authApi;
