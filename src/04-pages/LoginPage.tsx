import React from 'react';
import * as yup from 'yup';
import {login} from '../AuthService';
import FormTmpl from "../03-templates/FormTmpl";
import LoginForm from "../02-organisms/LoginForm";

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});

interface LoginFormValues {
    username: string;
    password: string;
}

function LoginPage() {
    const initialValues: LoginFormValues = {
        username: '',
        password: '',
    };

    async function onSubmit(
        values: LoginFormValues,
        {setSubmitting, setErrors}: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<LoginFormValues>) => void
        }
    ) {
        try {
            await login(values);
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
