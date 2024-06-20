import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Grid, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../05-assets/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';

const headerData = {
    logo: {
        text: "FaithSafe",
        icon: Logo,
        href: "/"
    },
    navItems: [
        { label: 'Home', href: '/' },
        { label: 'Download', href: '/download' },
        { label: 'FAQs', href: '/#faq' },
        { label: 'About Us', href: '/about' },
    ]
};

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = Cookies.get('accessToken');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        Cookies.remove('accessToken');
        setIsLoggedIn(false);
        window.location.reload();
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(0deg, rgba(200,230,248,1) 0%, rgba(240,179,254,1) 100%)',
                px: '10vw',
                py: 1,
            }}
        >
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={2} container alignItems="center">
                            <img src={headerData.logo.icon} alt="logo" style={{ width: 40, height: 40 }} />
                            <Typography variant="h6" component={RouterLink} to={headerData.logo.href} sx={{ textDecoration: 'none', color: 'black', ml: 1 }}>
                                <b>{headerData.logo.text}</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" justifyContent="flex-start">
                                {headerData.navItems.map((item, index) => (
                                    <Button key={index} component={RouterLink} to={item.href} sx={{ color: 'black', mx: 1 }}>
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-end" alignItems="center">
                            {isLoggedIn ? (
                                <IconButton onClick={handleLogout} color="inherit">
                                    <LogoutIcon sx={{ color: 'black' }} />
                                </IconButton>
                            ) : (
                                <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: 1 }}>
                                    <Button component={RouterLink} to="/register" sx={{ color: 'black', borderRadius: 0 }}>
                                        Register
                                    </Button>
                                    <Divider orientation="vertical" flexItem sx={{ bgcolor: 'black' }} />
                                    <Button component={RouterLink} to="/login" sx={{ color: 'black', borderRadius: 0 }}>
                                        Login
                                    </Button>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
