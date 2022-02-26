import { ReactElement } from 'react';
import type { IconProps } from './types';
import { ICONS } from '@/constants';

const Icon = ({ icon, size, color }: IconProps): ReactElement => {
  return (
    <svg
      height={size}
      fill={color}
      xmlns={'http://www.w3.org/2000/svg'}
      fillRule={'evenodd'}
      clipRule={'evenodd'}
      viewBox={ICONS[icon]?.viewBox}
    >
      <path d={ICONS[icon]?.path} />
    </svg>
  );
};

export default Icon;
