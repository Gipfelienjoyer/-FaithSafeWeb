import axios from "axios";

const API_URL = 'http://api.faithsafe.net';

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData{
    username: string;
    password: string;
    email: string;
    role: string; //Ig hiä chönnt mä im backend es default inä tuä
}

export const login = async (data: LoginData) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, data);
        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const register = async (data: RegisterData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`);
        return response.data;
    } catch (error) {
        throw new Error('Registration failed');
    }
}