/* React */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* MUI */
import { CssBaseline } from '@mui/material';

/* Theme */
import { createTheme, type ThemeOptions, ThemeProvider } from '@mui/material';

/* Components. The root component which contains router logic */
import App from './App'

/* Colour palette definition */
export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary:{
      main: '#5865F2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7289da',  
    },
    background: {
      default: '#36393f',
      paper: '#2f3136',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b9bbbe'
    },
    divider: '#4f545c',
  }
};
const theme = createTheme(darkTheme);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>  
          <App />
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>,
)
