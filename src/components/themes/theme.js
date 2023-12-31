// theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // other light mode palette settings
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // other dark mode palette settings
  },
});

export { lightTheme, darkTheme };
