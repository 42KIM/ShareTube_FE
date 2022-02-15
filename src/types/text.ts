import { TEXT_SIZE } from '../constants/index';

type TextSizeKeys = keyof typeof TEXT_SIZE;
type ITextSize = typeof TEXT_SIZE[TextSizeKeys];

export type { ITextSize };
