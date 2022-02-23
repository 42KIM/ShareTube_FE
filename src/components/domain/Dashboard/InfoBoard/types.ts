import { IColor, ITextSize } from '@/types';

interface InfoBoardProps {
  titleSize: ITextSize;
  contentSize: ITextSize;
  contentColor?: IColor;
}

interface InfoBoardItemProps {
  titleText: string;
  infoContent: string | number;
  titleSize: ITextSize;
  contentSize: ITextSize;
  contentColor?: IColor;
}

export type { InfoBoardProps, InfoBoardItemProps };
