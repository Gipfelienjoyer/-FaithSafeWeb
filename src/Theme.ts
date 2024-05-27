import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9303EB',
        },
        background: {
            default: '#C8E6F8',
            paper: '#FFFFFF',
        },
    },
    typography: {
        h6: {
            fontFamily: 'Jura, sans-serif',
        },
        h4: {
            fontFamily: 'Jura, sans-serif',
        },
        h3: {
            fontFamily: 'Jura, sans-serif',
            color: '#9303EB',
            fontWeight: 600,
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
