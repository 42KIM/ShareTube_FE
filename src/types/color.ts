import { COLOR } from '@/constants';

type ColorKeys = keyof typeof COLOR;
type IColor = typeof COLOR[ColorKeys];

export type { IColor };
