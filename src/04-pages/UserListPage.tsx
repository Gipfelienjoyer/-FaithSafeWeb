import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    CircularProgress,
    Typography,
    Container
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AuthService from "../06-Services/AuthService";
import {useNavigate} from "react-router-dom";

export interface User {
    username: string;
    email: string;
    emailVerified: boolean;
}

export default function UserListPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const token = Cookies.get('accessToken');
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const authService = new AuthService();
            if (!token) {
                navigate("/login");
                return;
            }

            if (!authService.isAdmin(token)) {
                navigate("*");
                return;
            }

            try {
                const users = await authService.getAllUsers(token);
                setUsers(users);
            } catch (e) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        })();

    }, [navigate, token]);

    if (loading) {
        return (
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CircularProgress/>
            </Container>
        );
    }

    if (error) {
        return (
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }

    return (
        <Container style={{marginTop: '20px'}}>
            <Typography variant="h2" align="center" gutterBottom>
                User List
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Email Verified</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.username}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    {user.emailVerified ? <CheckIcon style={{color: 'green'}}/> :
                                        <CloseIcon style={{color: 'red'}}/>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
