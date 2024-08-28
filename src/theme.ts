'use client';

import { createTheme } from '@mui/material/styles';
import { Mulish } from 'next/font/google';

const mulish = Mulish({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5042F4',
    },
    secondary: {
      main: '#D400A2',
    },
    grey: {
      300: '#E0E0E0',
    },
    text: {
      primary: '#000000DE',
      secondary: '#00000099',
    },
    action: {
      disabled: '#00000061',
    },
  },
  typography: {
    fontFamily: mulish.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
