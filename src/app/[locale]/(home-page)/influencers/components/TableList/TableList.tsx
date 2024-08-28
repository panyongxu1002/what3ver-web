'use client';

import { CopyAllRounded, EmailRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import Link from 'next/link';
import { useState } from 'react';

import type { TrendyVideoData, TrendyVideoMeta } from '@/services/influencers';

function Influencer() {
  return (
    <div className="flex items-center gap-[16px]">
      <div className="relative h-[40px]">
        <Avatar
          sizes="40px"
          src="/assets/images/avatar.png"
          alt="Travis Howard"
        />
        <EmailRounded className="absolute bottom-0 left-1/2 box-content -translate-x-1/2 translate-y-1/3 rounded-full bg-[#D400A2] p-[3px] !text-[12px] text-white" />
      </div>
      <div>
        <Chip
          size="small"
          label="Apparel & Accessories"
          variant="outlined"
          className="mb-[4px]"
        />
        <Typography>
          Name <CopyAllRounded />
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          @socialhandle <CopyAllRounded />
        </Typography>
        <Link href="/" className="text-[#5042F4]">
          View Profile
        </Link>
      </div>
    </div>
  );
}

const columns: MRT_ColumnDef<TrendyVideoData>[] = [
  {
    accessorKey: 'name.firstName',
    header: 'Influencer',
    size: 150,
    Cell: () => <Influencer />,
  },
  {
    accessorKey: 'likes',
    header: 'Followers',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'sales',
    header: 'Sales',
    size: 200,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'totalGMV',
    header: 'GMV',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'views',
    header: 'Avg Views',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'erRatio',
    header: 'ER Rate',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'erRatio1',
    header: 'Score',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
];

interface IProps {
  initData: TrendyVideoData[];
  meta: TrendyVideoMeta;
}

export default function TableList({ initData, meta }: IProps) {
  const [data] = useState<any[]>(initData);
  const table = useMaterialReactTable({
    columns,
    data,
    enableSelectAll: true,
    enableRowSelection: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    muiTableContainerProps: { sx: { maxHeight: '700px' } },
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
    manualPagination: true,
    rowCount: meta.total,
  });
  return (
    <div className="flex-1">
      <MaterialReactTable table={table} />
    </div>
  );
}
