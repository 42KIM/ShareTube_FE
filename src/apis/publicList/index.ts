// 추후 /apis/list와 통합 여부 검토 필요

import { IChannel } from '@/types';
import { request } from '../axios';

const publicListApi = {
  getListSummary: () => {},
  getFullList: (id: number | string): Promise<IChannel> =>
    request.get(`/api/list/detail/${id}`)
};

export default publicListApi;
