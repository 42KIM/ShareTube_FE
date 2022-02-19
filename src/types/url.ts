import { PAGE_URL } from '@/constants';

type PageUrlKeys = keyof typeof PAGE_URL;
type IPageUrl = typeof PAGE_URL[PageUrlKeys];

export type { IPageUrl };
