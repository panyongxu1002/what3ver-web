import request from '@/utils/request';

export interface TrendyVideoData {
  uuid: string;
  videoId: string;
  date: string;
  sales: number;
  views: number;
  erRatio: number;
  likes: number;
  comments: number;
  totalGMV: number;
  platform: number;
}

export interface TrendyVideoMeta {
  total: number;
  page: number;
  limit: number;
}

export function trendyvideos() {
  return request<{
    data: TrendyVideoData[];
    meta: TrendyVideoMeta;
  }>('/trendyvideos');
}
