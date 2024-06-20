import React, {useEffect, useState, MouseEvent} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Grid,
    IconButton,
    Divider,
    Menu,
    MenuItem,
    Avatar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import Logo from '../05-assets/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';
import AuthService from "../06-Services/AuthService";

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
        {label: 'Home', href: '/'},
        {label: 'Download', href: '/download'},
        {label: 'FAQs', href: '/#faq'},
        {label: 'About Us', href: '/about'},
    ]
};

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        if (accessToken) {
            (async () => {
                const authService = new AuthService();
                setUser(await authService.getUser(accessToken));
            })();
            setIsLoggedIn(true)
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
                await authService.deleteUser(accessToken)
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

    return (
        <Box
            sx={{
                background: 'linear-gradient(0deg, rgba(200,230,248,1) 0%, rgba(240,179,254,1) 100%)',
                px: '10vw',
                py: 1,
            }}
        >
            <AppBar position="static" sx={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={2} container alignItems="center">
                            <img src={headerData.logo.icon} alt="logo" style={{width: 40, height: 40}}/>
                            <Typography variant="h6" component={RouterLink} to={headerData.logo.href}
                                        sx={{textDecoration: 'none', color: 'black', ml: 1}}>
                                <b>{headerData.logo.text}</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box display="flex" justifyContent="flex-start">
                                {headerData.navItems.map((item, index) => (
                                    <Button key={index} component={RouterLink} to={item.href}
                                            sx={{color: 'black', mx: 1}}>
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={4} container justifyContent="flex-end" alignItems="center">
                            {isLoggedIn ? (
                                <>
                                    <IconButton onClick={handleMenuOpen} color="inherit">
                                        <Avatar sx={{bgcolor: 'black', color: 'white'}}>
                                            {user ? user.username.charAt(0).toUpperCase() : ''}
                                        </Avatar>
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleMenuClose}
                                    >
                                        <MenuItem>
                                            <Typography variant="body1">{user?.username}</Typography>
                                        </MenuItem>
                                        <MenuItem>
                                            <Typography variant="body2" color="textSecondary">{user?.email}</Typography>
                                        </MenuItem>
                                        <Divider/>
                                        <MenuItem onClick={handleLogout}>
                                            <LogoutIcon sx={{mr: 1}}/> Logout
                                        </MenuItem>
                                        <MenuItem onClick={handleDialogOpen} sx={{color: 'red'}}>
                                            <DeleteIcon sx={{mr: 1}}/> Delete Account
                                        </MenuItem>
                                    </Menu>
                                    <Dialog
                                        open={openDialog}
                                        onClose={handleDialogClose}
                                    >
                                        <DialogTitle>Delete Account</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Are you sure you want to delete your account? This action cannot be
                                                undone.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleDialogClose} color="primary">
                                                Cancel
                                            </Button>
                                            <Button onClick={handleAccountDelete} color="primary">
                                                Confirm
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </>
                            ) : (
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 1
                                }}>
                                    <Button component={RouterLink} to="/register"
                                            sx={{color: 'black', borderRadius: 0}}>
                                        Register
                                    </Button>
                                    <Divider orientation="vertical" flexItem sx={{bgcolor: 'black'}}/>
                                    <Button component={RouterLink} to="/login" sx={{color: 'black', borderRadius: 0}}>
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
