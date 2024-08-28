/* eslint-disable react/no-unused-prop-types */

'use client';

import {
  ChatBubbleRounded,
  FavoriteRounded,
  ShareRounded,
} from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useMemo, useState } from 'react';

interface Data {
  id: number;
  description: string;
  likes: string;
  comments: string;
  share: string;
  influencer: string;
  followers: string;
  products: string;
  sales: string;
  views: string;
  erRate: string;
}

const tableSx = {
  minWidth: 750,
  borderCollapse: 'separate',
  borderSpacing: '0px 8px',
  '.MuiTableRow-root': {
    cursor: 'pointer',
    borderRadius: '8px',
    backgroundColor: '#fff',
    'td:first-child,th:first-child': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },
    'td:last-child,th:last-child': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  },
  '.MuiTableCell-root': {
    borderBottom: 'none',
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'left',
  },
};

function createData(
  id: number,
  description: string,
  likes: string,
  comments: string,
  share: string,
  influencer: string,
  followers: string,
  products: string,
  sales: string,
  views: string,
  erRate: string,
): Data {
  return {
    id,
    description,
    likes,
    comments,
    share,
    influencer,
    followers,
    products,
    sales,
    views,
    erRate,
  };
}
const rows = Array.from({ length: 13 }, (_, i) =>
  createData(
    i,
    'Nato Is Warning US To Stay Prepared For No Power!🚨😳👂 Thats Why I Got T...',
    '2M',
    '25.4K',
    '209.5K',
    'username',
    '32.7K',
    '2',
    '2.7K',
    '1.9M',
    '5.83%',
  ),
);

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  allowSorting: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Video',
    allowSorting: false,
  },
  {
    id: 'influencer',
    numeric: true,
    disablePadding: false,
    label: 'Influencer',
    allowSorting: false,
  },
  {
    id: 'products',
    numeric: true,
    disablePadding: false,
    label: 'Products',
    allowSorting: true,
  },
  {
    id: 'sales',
    numeric: true,
    disablePadding: false,
    label: 'Vid Sales',
    allowSorting: true,
  },
  {
    id: 'views',
    numeric: true,
    disablePadding: false,
    label: 'Views',
    allowSorting: true,
  },
  {
    id: 'erRate',
    numeric: true,
    disablePadding: false,
    label: 'ER Rate',
    allowSorting: true,
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  order: Order;
  orderBy: string;
  rowCount?: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{ backgroundColor: '#fff' }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.allowSorting ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar() {
  return (
    <Toolbar>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Nutrition
      </Typography>
      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

export default function VideoGallery() {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('views');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  return (
    <div className="w-full">
      <EnhancedTableToolbar />
      <TableContainer>
        <Table sx={tableSx} aria-labelledby="tableTitle">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <Link
                  key={row.id}
                  href={`/video/${row.id}`}
                  passHref
                  legacyBehavior
                >
                  <TableRow role="checkbox" tabIndex={-1}>
                    {/* Video */}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      sx={{ width: '30%' }}
                    >
                      <div className="flex items-center gap-[16px]">
                        <div className="relative h-[40px]">
                          <Image
                            width={83.25}
                            height={148}
                            src="/assets/images/PlaceholderImage.png"
                            alt="video image"
                          />
                        </div>
                        <div className="mb-[12px]">
                          {/* industry label */}
                          <Chip
                            size="small"
                            label="Apparel & Accessories"
                            variant="outlined"
                            className="mb-[4px]"
                          />
                          {/* description */}
                          <div className="my-[12px]" />
                          <Typography>{row.description}</Typography>
                          {/* likes etc */}
                          <div className="mt-[12px] flex items-center">
                            <FavoriteRounded />
                            <Typography
                              variant="caption"
                              sx={{
                                color:
                                  'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                                marginRight: '16px',
                              }}
                            >
                              {row.likes}
                            </Typography>
                            <ChatBubbleRounded />
                            <Typography
                              variant="caption"
                              sx={{
                                color:
                                  'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                                marginRight: '16px',
                              }}
                            >
                              {row.comments}
                            </Typography>
                            <ShareRounded />
                            <Typography
                              variant="caption"
                              sx={{
                                color:
                                  'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                                marginRight: '16px',
                              }}
                            >
                              {row.share}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    {/* Influencer */}
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <div className="flex items-center gap-[16px]">
                        <div className="relative">
                          <Avatar alt="Travis Howard" />
                          <Typography>@username</Typography>
                          <Typography
                            sx={{
                              color:
                                'var(--text-secondary, rgba(0, 0, 0, 0.60))',
                            }}
                          >
                            Followers: 32.7k
                          </Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right" sx={{ textAlign: 'right' }}>
                      {row.products}
                    </TableCell>
                    <TableCell align="right">{row.sales}</TableCell>
                    <TableCell align="right">{row.views}</TableCell>
                    <TableCell align="right">{row.erRate}</TableCell>
                  </TableRow>
                </Link>
              );
            })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
