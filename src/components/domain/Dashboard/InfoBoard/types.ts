import { IColor, IFont } from '@/types';

interface InfoBoardProps {
  titleFont: IFont;
  contentFont: IFont;
  contentColor?: IColor;
}

interface InfoBoardItemProps {
  titleText: string;
  infoContent: string | number;
  titleFont: IFont;
  contentFont: IFont;
  contentColor?: IColor;
}

export type { InfoBoardProps, InfoBoardItemProps };
