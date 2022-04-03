import { ISubsFull } from '@/types';
import { request, authRequest } from '../axios';

const subscriptionApi = {
  getFullSubscriptions: (): Promise<ISubsFull> =>
    authRequest.get('/api/subscriptions'),
  getTopSubscriptions: () => {}
};

export default subscriptionApi;
