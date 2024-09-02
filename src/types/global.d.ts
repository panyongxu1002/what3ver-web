/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare interface IntlMessages extends Messages {}

declare global {
  interface TrendyVideo {
    uuid: string;
    videoId: string;
    date?: string;
    category?: string;
    description?: string;
    likes?: number;
    comments?: number;
    shares?: number;
    followers?: number;
    products?: string;
    sales?: number;
    views?: number;
    erRatio?: number;
    username?: string;
    avatar?: string;
  }

  type CampaignParams = {
    product: string;
    product_description: string;
    duration: number;
    tone: string;
    example: string;
    company_name: string;
    intent: string;
    unique_selling_points: string;
  };
}

export {};
