import React from 'react';
import {Menu, MenuItem, IconButton, Avatar, Typography, Divider} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';

interface UserMenuProps {
    user: { username: string; email: string; } | null;
    anchorEl: null | HTMLElement;
    handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMenuClose: () => void;
    handleLogout: () => void;
    handleDialogOpen: () => void;
}

export default function UserMenu({
                                     user,
                                     anchorEl,
                                     handleMenuOpen,
                                     handleMenuClose,
                                     handleLogout,
                                     handleDialogOpen
                                 }: UserMenuProps) {
    return (
        <>
            <IconButton onClick={handleMenuOpen} color="inherit">
                <Avatar sx={{bgcolor: 'black', color: 'white'}}>
                    {user ? user.username.charAt(0).toUpperCase() : ''}
                </Avatar>
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
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
        </>
    )
}
