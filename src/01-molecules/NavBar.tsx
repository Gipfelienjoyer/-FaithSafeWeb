import React from 'react';
import {Box, Button} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

interface NavBarProps {
    navItems: { label: string; href: string; }[];
}

export default function NavBar({navItems}: NavBarProps) {
    return (
        <Box display="flex" justifyContent="flex-start">
            {navItems.map((item, index) => (
                <Button key={index} component={RouterLink} to={item.href} sx={{color: 'black', mx: 1}}>
                    {item.label}
                </Button>
            ))}
        </Box>
    );
};
