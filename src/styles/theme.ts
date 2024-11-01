import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005658', // Cor primária
    },
    secondary: {
      main: '#d9d8d6', // Cor secundária
    },
    background: {
      default: '#FDFDFD', // Cor de fundo
      paper: '#FFFFFF', // Cor do papel (White)
    },
    text: {
      primary: '#000000', // Cor do texto principal
      secondary: '#005658', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
