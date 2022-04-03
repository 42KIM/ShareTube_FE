import { request, authRequest } from '../axios';
import { ILogInPayload } from '@/types';

const authApi = {
  getInitialData: (id: string): Promise<ILogInPayload> =>
    request.get(`/auth/result/${id}`),
  logout: (): Promise<string> => authRequest.get('/auth/logout')
};

export default authApi;
