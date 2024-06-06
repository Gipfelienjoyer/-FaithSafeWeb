import axios from "axios";
import Cookies from "js-cookie"
import {ChangeEmailFormValues} from "./04-pages/VerifyEmailPage";

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

export default class AuthService {

    async login(data: LoginData) {
        try {
            const response = await axios.post(`${API_URL}/auth`, data);
            const accessToken = response.headers['authorization'].substring(7);
            console.log(accessToken)
            Cookies.set('accessToken', accessToken, {expires: 1 / 72})
        } catch (error) {
            throw new Error('LoginPage failed');
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
                        password
                    }
                }
            );
        } catch (error) {
            throw new Error('Change Email failed!');
        }
    }
}