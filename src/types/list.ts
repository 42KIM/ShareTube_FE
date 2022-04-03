interface IListSummary {
  id: string | number;
  authorId: string | number;
  authorNickname: string;
  title: string;
  thumbnail: string;
  views: number;
  channels: number;
}

interface IList {
  id: string | number;
  authorId: string | number;
  authorNickname: string;
  title: string;
  thumbnail: string;
  views: number;
  channels: number;
}

export type { IListSummary, IList };
