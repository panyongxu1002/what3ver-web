'use client';

import {
  AddBoxRounded,
  AddRounded,
  DownloadRounded,
  MoreHoriz,
} from '@mui/icons-material';
import { Avatar, AvatarGroup, Menu, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { useState } from 'react';

import EnhancedTable, {
  type IColumns,
} from '@/components/EnhancedTable/EnhancedTable';

function Action() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center gap-[28px]">
      <div className="text-[15px] font-medium text-[#D400A2]">Export List</div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const columns: IColumns[] = [
  {
    id: 'name',
    title: 'List Name',
    render: () => <div className="text-[20px] font-medium">List Name</div>,
  },
  {
    id: 'calories',
    title: 'Avatar',
    render: () => (
      <div className="flex">
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </div>
    ),
  },
  {
    id: 'fat',
    title: 'Influencers',
    render: (text) => (
      <div className="text-[24px] text-[#000000DE]">{text}</div>
    ),
  },
  {
    id: 'protein1',
    title: 'ER Rate',
    render: (text) => (
      <div className="text-[24px] text-[#000000DE]">{text}K</div>
    ),
  },
  {
    id: 'protein2',
    title: 'Avg Score',
    render: (text) => (
      <div className="text-[24px] text-[#000000DE]">{text}K</div>
    ),
  },
  {
    id: 'fat',
    title: 'Action',
    width: 200,
    render: () => <Action />,
  },
];

interface Data {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
  protein1: number;
  protein2: number;
}

function createData(
  id: number,
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    protein1: protein,
    protein2: protein,
  };
}

const rows = [
  createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
  createData(2, 'Donut', 452, 25.0, 51, 4.9),
  createData(3, 'Eclair', 262, 16.0, 24, 6.0),
  createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
  createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
  createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
  createData(9, 'KitKat', 518, 26.0, 65, 7.0),
  createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
  createData(11, 'Marshmallow', 318, 0, 81, 2.0),
  createData(12, 'Nougat', 360, 19.0, 9, 37.0),
  createData(13, 'Oreo', 437, 18.0, 63, 4.0),
];

export default function TableList() {
  return (
    <div>
      <EnhancedTable
        columns={columns}
        data={rows}
        toolbarRight={
          <>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadRounded />}
            >
              Export List
            </Button>
            <Button
              color="secondary"
              variant="contained"
              startIcon={<AddBoxRounded />}
            >
              Add to Campaign
            </Button>
          </>
        }
        rowSelection={{
          onChange() {},
        }}
      />
      <Button
        size="medium"
        color="primary"
        variant="text"
        startIcon={<AddRounded />}
      >
        Create New List
      </Button>
    </div>
  );
}
