interface IChannelThumbnail {
  default: {
    url: string;
    height: number;
    width: number;
  };
  medium: {
    url: string;
    height: number;
    width: number;
  };
  high: {
    url: string;
    height: number;
    width: number;
  };
}

interface IChannel {
  channelUrl: string;
  id: string;
  title: string;
  description: string;
  subscribers: number;
  thumbnail: IChannelThumbnail;
}

interface ISubsSummary {
  topChannels: IChannel[];
  totalSubscriptions: number;
}

export type { IChannelThumbnail, IChannel, ISubsSummary };
