import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6f9de2',
    },
    secondary: {
      main: '#9871f3',
    },
    error: {
      main: '#f05d6c',
    },
    grey: {
      100: '#dae4f2',
      200: '#c8d0da',
      300: '#95a1b1',
      400: '#6f7d90',
      500: '#2a313c',
      600: '#21252c',
      700: '#191d24',
      800: '#13161b',
      900: '#0f1216',
    },
    text: {
      primary: '#dae4f2',
    },
    background: {
      default: '#0f1216',
      paper: '#13161b',
    },
  },
  typography: {
    fontFamily: 'var(--font-montserrat), sans-serif',
    h1: {
      fontFamily: 'var(--font-oxanium), serif',
    },
  },
  shape: {
    borderRadius: 10,
  },
});
