'use client';

import { ArrowDropUpRounded } from '@mui/icons-material';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import { IconButton, Popover } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState } from 'react';

import { mulish } from '@/fonts';

type CalendarType = 'daily' | 'weekly' | 'monthly';

const calendarTypeAvailable: CalendarType[] = ['daily', 'weekly', 'monthly'];

export default function DatePicker() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selection, setSelection] = useState<string>('Daily');
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="gap-[8px] text-[#D400A2]">
      <span
        className={`align-middle text-2xl font-normal leading-loose ${mulish.className}`}
      >
        Today
      </span>
      <IconButton aria-describedby={id} onClick={handleClick}>
        {open ? (
          <ArrowDropUpRounded className="text-2xl" color="secondary" />
        ) : (
          <ArrowDropDownRounded className="text-2xl" color="secondary" />
        )}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex h-[72px] items-start justify-between border-b border-black/10 px-2 pb-2 pt-4">
            {calendarTypeAvailable.map((e) => (
              <button
                type="button"
                key={e}
                className={`rounded-lg px-3 text-xl font-medium leading-loose tracking-tight transition ${selection === e ? 'bg-[#d400a2]' : 'bg-black/5'} ${selection === e ? 'text-white' : 'text-black/60'} ${mulish.className}`}
                onClick={() => setSelection(e)}
              >
                {e}
              </button>
            ))}
          </div>
          <StaticDatePicker
            sx={{
              '& .MuiPickersToolbar-root, & .MuiDialogActions-root': {
                display: 'none',
              },
            }}
          />
        </LocalizationProvider>
      </Popover>
    </div>
  );
}
