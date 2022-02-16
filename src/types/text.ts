import { TEXT_SIZE } from '@/constants';

type TextSizeKeys = keyof typeof TEXT_SIZE;
type ITextSize = typeof TEXT_SIZE[TextSizeKeys];

export type { ITextSize };
