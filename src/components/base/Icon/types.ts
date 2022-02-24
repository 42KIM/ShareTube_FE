import { IColor, IIconNames, IIconSize } from '@/types';

interface IconProps {
  icon: IIconNames;
  size: IIconSize;
  color?: IColor;
}

export type { IconProps };
