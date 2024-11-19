import { createTheme } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: indigo,
    text: {
      primary: '#000000',
      secondary: '#808080'
    },
    warning: {
      main: '#FF6347'
    }
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightBold: 700,
    fontWeightMedium: 500
  }
});
