import type { ICard } from '@/types';

interface ChannelCardProps {
  channelUrl: string;
  direction?: 'vertical' | 'parallel';
  size: ICard;
  thumbnail: string;
  title: string;
  subTitle: string;
}

export type { ChannelCardProps };
