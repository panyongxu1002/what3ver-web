'use client';

import { Checkbox, Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import { visuallyHidden } from '@mui/utils';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import * as React from 'react';

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

export interface IColumns {
  id: string;
  title: string;
  align?: 'left' | 'right';
  allowSorting?: boolean;
  render?: (text: any, data: any) => React.JSX.Element;
  width?: number;
}

function EnhancedTablePagination(props: any) {
  const {
    // handleChangePage,
    // handleChangeRowsPerPage,
    page,
    // rowsPerPage,
    count,
  } = props;
  // console.log(handleChangePage, handleChangeRowsPerPage, rowsPerPage);
  return (
    <div className="flex items-center">
      <div className="mr-[16px] text-custom-color">Showing 1 - 100 of 1440</div>
      <Pagination size="small" count={count} page={page} />
    </div>
  );
}

interface IProps {
  columns: IColumns[];
  data: any[];
  toolbarRight?: ReactNode;
  rowSelection?: {
    onChange: (selected: readonly number[]) => void;
  };
}

export default function EnhancedTable(props: IProps) {
  const { columns, data, toolbarRight, rowSelection } = props;
  const { onChange } = rowSelection || {};
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof any>('views');
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  const handleRequestSort = (property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property: string) => () => {
    handleRequestSort(property);
  };

  const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
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

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [data, order, orderBy, page, rowsPerPage],
  );
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <div>
      <div className="my-[16px] flex justify-between">
        <EnhancedTablePagination
          className="flex-1"
          rowsPerPageOptions={[5, 10, 25]}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className="flex items-center">
          {selected.length > 0 ? (
            <Typography
              color="secondary"
              variant="subtitle1"
              className="!mr-[24px]"
            >
              {selected.length} selected
            </Typography>
          ) : null}
          <div className="flex gap-[16px] whitespace-nowrap">
            {toolbarRight}
          </div>
        </div>
      </div>
      <Table stickyHeader sx={tableSx}>
        <TableHead sx={{ backgroundColor: '#fff' }}>
          <TableRow>
            {rowSelection ? (
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  indeterminate={
                    selected.length > 0 && selected.length < data.length
                  }
                  onChange={handleSelectAllClick}
                  checked={data.length > 0 && selected.length === data.length}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                />
              </TableCell>
            ) : null}
            {columns.map((column) => (
              <TableCell
                width={column.width}
                key={column.id}
                align={column.align}
                sortDirection={orderBy === column.id ? order : false}
              >
                {column.allowSorting ? (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={createSortHandler(column.id)}
                  >
                    {column.title}
                    {orderBy === column.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc'
                          ? 'sorted descending'
                          : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                ) : (
                  column.title
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => {
            const isItemSelected = isSelected(row.id as number);
            return (
              <TableRow
                onClick={(event) => handleClick(event, row.id as number)}
                key={row.uuid}
                selected={isItemSelected}
              >
                {rowSelection ? (
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" checked={isItemSelected} />
                  </TableCell>
                ) : null}
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {/* @ts-ignore */}
                    {column.render
                      ? column.render(row[column.id], row)
                      : row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell />
          </TableRow>
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
      <div className="py-[16px]">
        <EnhancedTablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}
