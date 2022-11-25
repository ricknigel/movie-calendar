import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import { customScrollbar } from 'modules/styles/scrollbar';

export const myTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: customScrollbar()
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: '12px',
          [theme.breakpoints.up('sm')]: {
            paddingLeft: '12px'
          }
        })
      }
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#0d1117',
      paper: '#161b22'
    },
    primary: {
      main: '#3367D6'
    },
    text: {
      primary: grey[200]
    }
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Google Sans',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(',')
  }
});

export const drawerShrinkWidth = 73;
export const drawerExpandWidth = 256;
export const headerHeight = 64;
export const progressBarHeight = 4;
