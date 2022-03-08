import { REQUEST_TYPE } from '@/constants';
import { setInstance } from './config';

const request = setInstance(REQUEST_TYPE.DEFAULT);
const authRequest = setInstance(REQUEST_TYPE.AUTH);

export { request, authRequest };
