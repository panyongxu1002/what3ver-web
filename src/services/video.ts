import { convertToQueryString, deleteNullAndUndefined } from '@/utils/helpers';
import request from '@/utils/request';

export interface TrendyVideoData {
  uuid: string;
  videoId: string;
  date?: Date;
  sales?: number;
  views?: number;
  erRatio?: number;
  likes?: number;
  comments?: number;
  totalGMV?: number;
  platform?: number;
  videoMetadata?: VideoMetadata;
}

export interface VideoMetadata {
  uuid: string;
  videoId: string;
  category?: string;
  videoTitle?: string;
  hashTags?: string[];
  videoUrl?: string;
  shareUrl?: string;
  duration?: number;
  publishTime?: Date;
  influencerId?: string;
  productId?: string[];
  videoText?: string;
  platform?: number;
}

export interface TrendyVideoMeta {
  total: number;
  page: number;
  limit: number;
}

export function trendyVideos(params?: any) {
  const options = deleteNullAndUndefined<any>(params);
  if (options.category === 'All') {
    delete options.category;
  }
  return request<{
    data: TrendyVideoData[];
    meta: TrendyVideoMeta;
  }>(`/trendyvideos?${convertToQueryString(options)}`);
}
