import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormTmpl from "../03-templates/FormTmpl";
import FormCardHeader from "../01-molecules/FormCardHeader";
import NewEmailForm from "../02-organisms/NewEmailForm";
import * as yup from "yup";
import AuthService from "../AuthService";

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    email: yup.string().email("Email isn't valid").required('Please enter an Email'),
});

export interface ChangeEmailFormValues {
    username: string;
    password: string;
    email: string;
}

export default function VerifyEmailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const submittedEmail = query.get('email') || '--NO EMAIL DATA--';
    const changeEmail = query.get('change') === 'true';

    const initialValues = {
        username: '',
        password: '',
        email: ''
    };

    const [showChangeForm, setShowChangeForm] = useState(changeEmail);

    async function onSubmit(
        values: ChangeEmailFormValues,
        { setSubmitting, setErrors }: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<ChangeEmailFormValues>) => void
        }
    ) {
        try {
            const authService = new AuthService();
            await authService.updateUserEmail(values);
            setShowChangeForm(prevShowChangeForm => !prevShowChangeForm);
            navigate(`${location.pathname}?email=${values.email}&change=${!showChangeForm}`);

        } catch (error) {
            setErrors({ username: 'Invalid email or password' });
            console.error('Change Email failed!', error);
        } finally {
            setSubmitting(false);
        }
    }

    const handleToggleFormClick = () => {
        setShowChangeForm(prevShowChangeForm => !prevShowChangeForm);
        navigate(`${location.pathname}?email=${submittedEmail}&change=${!showChangeForm}`);
    };

    return (
        <FormTmpl>
            <FormCardHeader text={'Verify Email'} />
            <Box textAlign="center" mt={4}>
                <Typography variant="h6" component="p" gutterBottom>
                    Please confirm your email address to complete the registration.
                    Your Email is: <b>{submittedEmail}</b>
                </Typography>
                <Button type="button" onClick={handleToggleFormClick}>
                    {showChangeForm ? 'Close Email Change Form' : 'Change Email'}
                </Button>
                <Button type="submit">
                    <a href="/login" style={{ textDecoration: 'none' }}>Go to Login</a>
                </Button>
            </Box>
            {showChangeForm && (
                <NewEmailForm
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                />
            )}
        </FormTmpl>
    )
}
