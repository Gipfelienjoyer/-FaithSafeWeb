import React, { useEffect, useState, MouseEvent } from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../05-assets/logo.png';
import Cookies from 'js-cookie';
import AuthService from "../06-Services/AuthService";
import NavBar from "../01-molecules/NavBar";
import UserMenu from "../01-molecules/UserMenu";
import AccountDialog from "../01-molecules/AccountDialog";

interface User {
    username: string;
    email: string;
}

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
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            (async () => {
                const authService = new AuthService();
                setUser(await authService.getUser(accessToken));
            })();
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove('accessToken');
        setIsLoggedIn(false);
        setUser(null);
        window.location.reload();
    };

    const handleAccountDelete = () => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            (async () => {
                const authService = new AuthService();
                await authService.deleteUser(accessToken);
            })();
            Cookies.remove('accessToken');
            setIsLoggedIn(false);
            setUser(null);
            window.location.reload();
        }
    };

    const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
        handleMenuClose();
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {headerData.navItems.map((item, index) => (
                    <ListItem component={RouterLink} to={item.href} key={index}>
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ background: 'linear-gradient(0deg, rgba(200,230,248,1) 0%, rgba(240,179,254,1) 100%)', px: '10vw', py: 1 }}>
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={2} container alignItems="center">
                            <img src={headerData.logo.icon} alt="logo" style={{ width: 40, height: 40 }} />
                            <Button component={RouterLink} to={headerData.logo.href} sx={{ textDecoration: 'none', color: 'black', ml: 1 }}>
                                <b>{headerData.logo.text}</b>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <NavBar navItems={headerData.navItems} />
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-end" alignItems="center">
                            {isMobile ? (
                                <>
                                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                        <MenuIcon />
                                    </IconButton>
                                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                        {drawerList}
                                    </Drawer>
                                </>
                            ) : (
                                isLoggedIn ? (
                                    <>
                                        <UserMenu
                                            user={user}
                                            anchorEl={anchorEl}
                                            handleMenuOpen={handleMenuOpen}
                                            handleMenuClose={handleMenuClose}
                                            handleLogout={handleLogout}
                                            handleDialogOpen={handleDialogOpen}
                                        />
                                        <AccountDialog open={openDialog} handleClose={handleDialogClose} handleDelete={handleAccountDelete} />
                                    </>
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
                                )
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
