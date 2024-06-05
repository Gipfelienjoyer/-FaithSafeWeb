import React from "react";
import * as yup from "yup";
import { register } from "../AuthService";
import RegisterForm from "../02-organisms/RegisterForm";
import { Box, Card, CardContent, Grid, useMediaQuery, useTheme, Theme } from "@mui/material";

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
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '75vh' }}>
            <Box width={isMobile ? '95%' : isTablet ? '50%' : '30%'}>
                <Card>
                    <CardContent>
                        <RegisterForm
                            onSubmit={onSubmit}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                        />
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    );
}
