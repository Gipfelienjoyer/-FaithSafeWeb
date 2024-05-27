import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9303EB',
        },
    },
    typography: {
        h4: {
            fontFamily: 'Jura, sans-serif',
        },
        h1: {
            fontFamily: 'Krona One, sans-serif',
            color: '#9303EB',
        },
        button: {
            fontFamily: 'Jura, sans-serif',
        }
    },
});

export default theme;
