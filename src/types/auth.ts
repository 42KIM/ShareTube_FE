import type { ISubsSummary } from '@/types';

interface IUser {
  email: string;
  id: string;
  nickname: string;
  profile: string;
  role: 'USER' | 'ADMIN';
}

interface ILogInPayload {
  isLoggedIn: boolean;
  accessToken: string;
  user: IUser;
  youtubeSubs: ISubsSummary;
}

export type { IUser, ILogInPayload };
