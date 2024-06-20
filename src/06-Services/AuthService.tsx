import axios from 'axios';
import Cookies from 'js-cookie';
import { ChangeEmailFormValues } from '../04-pages/VerifyEmailPage';
import { User } from '../04-pages/UserListPage';
import {jwtDecode, JwtPayload} from "jwt-decode";
const API_URL = 'https://api.faithsafe.net';

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    password: string;
    email: string;
}

interface JwtProps extends JwtPayload {
    role: 'ROLE_USER' | 'ROLE_ADMIN';
}

export default class AuthService {
    async login(data: LoginData) {
        try {
            const response = await axios.post(`${API_URL}/auth`, data);
            const accessToken = response.headers['authorization'].substring(7);
            Cookies.set('accessToken', accessToken, { expires: 1 / 72 });
        } catch (error) {
            throw new Error('Login failed');
        }
    }

    async register(data: RegisterData) {
        await axios.post(`${API_URL}/auth/register`, data);
    }

    async updateUserEmail({ username, password, email }: ChangeEmailFormValues) {
        try {
            await axios.put(
                `${API_URL}/user`,
                { email },
                {
                    auth: {
                        username,
                        password,
                    },
                }
            );
        } catch (error) {
            throw new Error('Change Email failed!');
        }
    }

    async getAllUsers(token: string): Promise<User[]> {
        const response = await axios.get<User[]>(`${API_URL}/admin/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    }

    isAdmin(token: string): boolean {
        const decodedToken = jwtDecode<JwtProps>(token);
        return decodedToken.role && decodedToken.role === 'ROLE_ADMIN';
    }

    async getUser(accessToken: string): Promise<User | null> {
        try {
            const response = await axios.get<User>(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching user data', error);
            return null;
        }
    }

    async deleteUser(accessToken: string): Promise<void> {
        try {
            await axios.delete(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            Cookies.remove('accessToken');
        } catch (error) {
            console.error('Error deleting account', error);
            throw error;
        }
    }
}