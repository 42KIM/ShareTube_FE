import type { ICard } from '@/types';

interface ChannelCardProps {
  url?: string;
  direction?: 'vertical' | 'parallel';
  size: ICard;
  thumbnail?: string;
  title?: string;
  subTitle?: string | number;
}

export type { ChannelCardProps };
