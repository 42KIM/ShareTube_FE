import { FONT } from '@/constants';

type FontTypes = keyof typeof FONT;
type IFont = typeof FONT[FontTypes];

export type { IFont };
