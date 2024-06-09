import {Box, Button, Grid, Typography} from "@mui/material";
import FormikTextField from "../01-molecules/FormikTextField";
import FormContainer from "../01-molecules/FormContainer";
import React from "react";
import * as yup from "yup";
import {useLocation, useNavigate} from 'react-router-dom';
import logo from '../05-assets/logo.png';

interface RegisterFormProps {
    initialValues: any;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: any; // any is not good:(
}

export default function LoginForm({initialValues, validationSchema, onSubmit}: RegisterFormProps) {
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const emailVerified = params.get('emailverified');

    const handleOkClick = () => {
        navigate('/login');
        window.location.reload();
    }

    return (
        <FormContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <>
                    <Grid container alignItems="center">
                        <img src={logo} alt="Faithsafe logo" width="20%" height="auto"/>
                        <Box alignItems="center" justifyContent="center" textAlign="center">
                            <Typography variant="h3" component="h1" gutterBottom>
                                {emailVerified ? 'Email Verification' : 'Login'}
                            </Typography>
                        </Box>
                    </Grid>
                    {emailVerified ? (
                        <>
                            <Typography variant="body1" gutterBottom>
                                {emailVerified === 'true'
                                    ? 'Your email has been successfully verified!'
                                    : 'Email verification failed. Please try again.'}
                            </Typography>
                            <Button onClick={handleOkClick}>
                                OK
                            </Button>
                        </>
                    ) : (
                        <>
                            <FormikTextField name="username" label="Username"/>
                            <FormikTextField name="password" label="Password" type="password"/>
                            <Typography variant={"body2"}>
                                <b>
                                    <a href="/register" style={{ textDecoration: 'none' }}>
                                        Don't have an account? Register now!
                                    </a>
                                </b>
                            </Typography>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Login...' : 'Login'}
                            </Button>
                        </>
                    )}
                </>
            )}
        </FormContainer>
    )
}
