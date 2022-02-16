import { BUTTON_SIZE, BUTTON_COLOR } from '@/constants';

type IButtonSize = keyof typeof BUTTON_SIZE;
type ButtonColorKeys = keyof typeof BUTTON_COLOR;
type IButtonColor = typeof BUTTON_COLOR[ButtonColorKeys];

export type { IButtonSize, IButtonColor };
