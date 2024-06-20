import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';

interface AccountDialogProps {
    open: boolean;
    handleClose: () => void;
    handleDelete: () => void;
}

export default function AccountDialog({open, handleClose, handleDelete}: AccountDialogProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete your account? This action cannot be undone.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDelete} color="primary">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
