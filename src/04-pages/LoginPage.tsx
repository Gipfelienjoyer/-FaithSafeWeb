import React, {useEffect} from 'react';
import * as yup from 'yup';
import FormTmpl from "../03-templates/FormTmpl";
import LoginForm from "../02-organisms/LoginForm";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import AuthService from "../AuthService";

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

interface LoginFormValues {
    username: string;
    password: string;
}

function LoginPage() {
    const navigate = useNavigate();
    const accessToken = Cookies.get("accessToken") || "";

    const initialValues: LoginFormValues = {
        username: '',
        password: '',
    };

    useEffect(() => {
        if (accessToken) {
            navigate("/");
        }
    }, [navigate, accessToken]);

    async function onSubmit(
        values: LoginFormValues,
        {setSubmitting, setErrors}: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<LoginFormValues>) => void
        }
    ) {
        try {
            const authService = new AuthService();
            await authService.login(values);
            navigate("/");
        } catch (error) {
            setErrors({username: 'Invalid email or password'});
            console.error('LoginPage failed', error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <FormTmpl>
            <LoginForm
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            />
        </FormTmpl>
    );
}

export default LoginPage;
