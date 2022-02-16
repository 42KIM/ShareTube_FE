import { ICONS, ICON_SIZE } from '../constants/icon';

type IIconNames = keyof typeof ICONS;
type IconSizeKeys = keyof typeof ICON_SIZE;
type IIconSize = typeof ICON_SIZE[IconSizeKeys];

export type { IIconNames, IIconSize };
