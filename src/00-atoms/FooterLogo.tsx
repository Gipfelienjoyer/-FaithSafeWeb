import * as React from 'react';
import Box from '@mui/material/Box';
import logo from '../05-assets/logo.png';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

export default function FooterLogo() {
    return (
        <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ ml: '-15px' }}>
                <img
                    src={logo}
                    style={logoStyle}
                    alt="logo of sitemark"
                />
            </Box>
        </Box>
    );
}
