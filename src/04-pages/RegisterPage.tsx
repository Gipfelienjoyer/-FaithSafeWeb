import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Cookies from "js-cookie";
import RegisterForm from "../02-organisms/RegisterForm";
import FormTmpl from "../03-templates/FormTmpl";
import {register} from "../AuthService";

const validationSchema = yup.object({
    username: yup.string().min(4, 'Username must at least be 4 characters long').required('Username is required').matches(/^[a-zA-Z0-9@]+$/),
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
    const query = new URLSearchParams(useLocation().search);
    const initialEmailView = query.get('email-view') === 'true';
    const [emailView, setEmailView] = useState(initialEmailView);
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
        try {
            await register(values);
        } catch (error) {
            setErrors({ username: 'Invalid email or password' });
        } finally {
            setSubmitting(false);
            setEmailView(true);
            query.set('email-view', 'true');
            navigate({ search: query.toString() }, { replace: true });
        }
    }

    return (
        <FormTmpl>
            <RegisterForm
                emailView={emailView}
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            />
        </FormTmpl>
    );
}
