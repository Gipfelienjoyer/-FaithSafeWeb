import React from "react";
import * as yup from "yup";
import { register } from "../AuthService";
import RegisterForm from "../02-organisms/RegisterForm";

const validationSchema = yup.object({
    username: yup.string().min(8, 'Username must at least be 8 characters long').required('Username is required').matches(/^[a-zA-Z0-9@]+$/),
    email: yup.string().email("Email isn't valid").required('Please enter an Email'),
    password: yup.string().min(8, 'Must be at least 8 characters long').required('Please enter a password').matches(/^(?=.*[A-Z])(?=.*\d).+$/),
    validatePassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Please confirm your password'),
});

interface RegistrationFormValues {
    username: string;
    email: string;
    password: string;
    validatePassword: string;
}

export default function RegisterPage() {
    const initialValues: RegistrationFormValues = {
        username: '',
        email: '',
        password: '',
        validatePassword: '',
    }

    async function onSubmit(
        values: RegistrationFormValues,
        { setSubmitting, setErrors }: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<RegistrationFormValues>) => void;
        }
    ) {
        try {
            await register(values);
        } catch (error) {
            setErrors({ username: 'Invalid email or password' });
            console.error('RegisterPage failed', error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <RegisterForm
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        />
    );
}
