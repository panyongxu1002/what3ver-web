import * as React from 'react';

import EnhancedDatePicker from '@/app/[locale]/(home-page)/videos/components/EnhancedDatePicker/EnhancedDatePicker';
import ProductCategory from '@/components/ProductCategory/ProductCategory';
import { trendyVideos } from '@/services/video';

import TableList from './components/TableList/TableList';

export default async function Videos(props: {
  searchParams: { category?: string; page: number; limit: number };
}) {
  const { category } = props.searchParams;
  const { data, meta } = await trendyVideos({ category });
  return (
    <div className="size-full items-center overflow-auto px-[24px] py-[32px]">
      <EnhancedDatePicker />
      <ProductCategory category={category} />
      <TableList initData={data} meta={meta} />
    </div>
  );
}
