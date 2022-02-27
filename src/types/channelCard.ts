import { CARD } from '@/constants';

type CardKeys = keyof typeof CARD;
type ICard = typeof CARD[CardKeys];

export type { ICard };
