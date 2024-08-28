import * as React from 'react';

import TableList from '@/app/[locale]/(home-page)/influencers/components/TableList/TableList';
import ProductCategory from '@/components/ProductCategory/ProductCategory';
import { trendyvideos } from '@/services/influencers';

export default async function Influencers() {
  const { data, meta } = await trendyvideos();
  return (
    <div className="h-screen flex-col px-[24px] py-[32px]">
      <ProductCategory />
      <TableList initData={data} meta={meta} />
    </div>
  );
}
