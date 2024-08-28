'use client';

import {
  ChatBubbleRounded,
  FavoriteRounded,
  ShareRounded,
} from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useRequest, useUpdateEffect } from 'ahooks';
import type { MRT_ColumnDef, MRT_PaginationState } from 'material-react-table';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import * as React from 'react';

import type { TrendyVideoData, TrendyVideoMeta } from '@/services/video';
import { trendyVideos } from '@/services/video';

const columns: MRT_ColumnDef<TrendyVideoData>[] = [
  {
    accessorKey: 'videoMetadata',
    header: 'Video',
    size: 150,
    Cell: ({ row }) => {
      const category = row.original.videoMetadata?.hashTags?.[0];
      return (
        <div className="flex items-center gap-[16px]">
          <Image
            width={84}
            height={148}
            src="/assets/images/VideoPlaceholder.png"
            alt="video image"
          />
          <div className="mb-[12px]">
            {/* industry label */}
            {category ? (
              // <Tooltip title={category}>
              <Chip
                label={category}
                size="small"
                variant="outlined"
                className="mb-[4px] max-w-[200px]"
              />
            ) : // </Tooltip>
            null}
            {/* description */}
            <div className="my-[12px]" />
            <Typography>{row.original.videoMetadata?.videoTitle}</Typography>
            {/* likes etc */}
            <div className="mt-[12px] flex items-center">
              <FavoriteRounded />
              <Typography
                variant="caption"
                sx={{
                  color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                  marginRight: '16px',
                }}
              >
                {row.original.likes}
              </Typography>
              <ChatBubbleRounded />
              <Typography
                variant="caption"
                sx={{
                  color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                  marginRight: '16px',
                }}
              >
                {row.original.comments}
              </Typography>
              <ShareRounded />
              <Typography
                variant="caption"
                sx={{
                  color: 'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                  marginRight: '16px',
                }}
              >
                {row.original.sales}
              </Typography>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'likes',
    header: 'Influencer',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'videoMetadata.productId',
    header: 'Products',
    size: 200,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<string[]>().length}
      </div>
    ),
  },
  {
    accessorKey: 'sales',
    header: 'Vid Sales',
    size: 150,
    Cell: ({ cell }) => (
      <div className="text-[24px] text-[#000000DE]">
        {cell.getValue<number>()}
      </div>
    ),
  },
  {
    accessorKey: 'views',
    header: 'Views',
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
        {(cell.getValue<number>() * 100).toFixed(2)}%
      </div>
    ),
  },
];

interface IProps {
  initData: TrendyVideoData[];
  meta: TrendyVideoMeta;
}

/**
 * 尝试转换page
 * @param page
 */
function coverPage(page: string | null) {
  const num = Number(page);
  if (Number.isNaN(num) || num <= 0) {
    return 0;
  }
  return num - 1;
}

/**
 * 尝试转换limit
 * @param limit
 */
function coverLimit(limit: string | null) {
  const num = Number(limit);
  if (Number.isNaN(num) || num <= 0) {
    return 10;
  }
  return num;
}

export default function TableList({ initData, meta }: IProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data, loading, run } = useRequest(trendyVideos, {
    manual: true,
  });
  const [pagination, onPaginationChange] = useState<MRT_PaginationState>({
    pageIndex: coverPage(searchParams.get('page')),
    pageSize: coverLimit(searchParams.get('limit')),
  });

  useUpdateEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', String(pagination.pageIndex + 1));
    params.set('limit', String(pagination.pageSize));
    replace(`${pathname}?${params.toString()}`);
  }, [pagination]);

  useUpdateEffect(() => {
    run(searchParams.values());
  }, [searchParams]);

  const table = useMaterialReactTable({
    columns,
    data: data?.data ?? initData,
    muiPaginationProps: {
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
    muiBottomToolbarProps: {
      sx: {
        position: 'fixed',
        bottom: 0,
      },
    },
    muiTopToolbarProps: {
      sx: {
        position: 'sticky',
        top: 0,
      },
    },
    paginationDisplayMode: 'pages',
    manualPagination: true,
    rowCount: meta.total,
    onPaginationChange,
    state: {
      isLoading: loading,
      pagination,
    },
  });

  return (
    <div className="mb-[50px] w-full">
      <MaterialReactTable table={table} />
    </div>
  );
}
