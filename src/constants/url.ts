const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const PAGE_URL = {
  main: '/',
  login: '/login'
} as const;

export { BASE_URL, PAGE_URL };
