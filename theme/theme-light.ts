
import { createTheme } from '@mui/system';


export const theme = createTheme({
    palette: {
        // mode: 'light',
        primary: {
            main: '#026937'
        },
        secondary: {
            main: '#35944B'
        },
        greenLittle: {
            main: '#43B649'
        },
        info: {
            main: '#5F5F5F'
        },
        blueDark: {
            main: '#205B70',
        },
        blueMid: {
            main: '#0E7774',
        },
        darkGrey: {
            main: '#393636',
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
              h1: {
                fontSize: 30,
                fontWeight: 600
              },
              h2: {
                fontSize: 20,
                fontWeight: 400
              },
              subtitle1: {
                fontSize: 18,
                fontWeight: 600
              },
            },
            
          },
    }
  })