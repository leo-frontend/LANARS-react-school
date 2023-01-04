import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#6C7276',
      main: '#1786ED',
      dark: '#3F4A53',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: 'rgba(29, 140, 244, 0.12)',
      light: '#E5EDF2',
      dark: '#00867d',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Saira, sans-serif',
      fontSize: 14,
    },
  },
});
