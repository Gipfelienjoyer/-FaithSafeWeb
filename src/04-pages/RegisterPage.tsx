import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import * as yup from "yup";
import Cookies from "js-cookie";
import RegisterForm from "../02-organisms/RegisterForm";
import FormTmpl from "../03-templates/FormTmpl";
import { register } from "../AuthService";

const validationSchema = yup.object({
    username: yup.string().min(4, 'Username must at least be 4 characters long').required('Username is required').matches(/^[a-zA-Z0-9@]+$/),
    email: yup.string().email("Email isn't valid").required('Please enter an Email'),
    password: yup.string().min(8, 'Must be at least 8 characters long').required('Please enter a password').matches(/^(?=.*[A-Z])(?=.*\d).+$/, 'Must include upper, lower, and special char'),
    validatePassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Please confirm your password'),
});

interface RegistrationFormValues {
    username: string;
    email: string;
    password: string;
    validatePassword: string;
}

export default function RegisterPage() {
    const navigate = useNavigate();
    const accessToken = Cookies.get("accessToken") || "";
    const initialValues: RegistrationFormValues = {
        username: '',
        email: '',
        password: '',
        validatePassword: '',
    }

    useEffect(() => {
        if (accessToken) {
            navigate("/");
        }
    }, [navigate, accessToken]);

    async function onSubmit(
        values: RegistrationFormValues,
        { setSubmitting, setErrors }: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<RegistrationFormValues>) => void;
        }
    ) {
        let hasError = false;

        try {
            console.log('Submitting form with values:', values);
            await register(values);
            console.log('Registration successful');
        } catch (error) {
            console.error('Registration error:', error);
            setErrors({ username: 'Username already taken' });
            hasError = true;
        }

        setSubmitting(false);

        if (!hasError) {
            navigate(`/register/verify?email=${values.email}`);
        }
    }

    return (
        <FormTmpl>
            <RegisterForm
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            />
        </FormTmpl>
    );
}
