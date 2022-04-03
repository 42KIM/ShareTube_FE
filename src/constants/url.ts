const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const PAGE_URL = {
  home: '/',
  login: '/login',
  myList: '/list/my',
  sharedList: '/list/shared',
  subscriptions: '/list/subscriptions'
} as const;

export { BASE_URL, PAGE_URL };
