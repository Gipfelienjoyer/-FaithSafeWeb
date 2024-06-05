import { Box, Button, Grid, Typography } from "@mui/material";
import FormikTextField from "../01-molecules/FormikTextField";
import FormContainer from "../01-molecules/FormContainer";
import React from "react";
import * as yup from "yup";
import logo from '../05-assets/logo.png';

interface RegisterFormProps {
    initialValues: any;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: any; // any is not good:(
    emailView: boolean;
}

export default function RegisterForm({ initialValues, validationSchema, onSubmit, emailView }: RegisterFormProps) {
    return (
        <FormContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <>
                    <Grid container alignItems="center">
                        <img src={logo} alt="Faithsafe logo" width="20%" height="auto" />
                        <Box alignItems="center" justifyContent="center" textAlign="center">
                            <Typography variant="h3" component="h1" gutterBottom>
                                Register
                            </Typography>
                        </Box>
                    </Grid>

                    {emailView ? (
                        <Box textAlign="center" mt={4}>
                            <Typography variant="h6" component="p" gutterBottom>
                                Please confirm your email address to complete the registration.
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <FormikTextField name="username" label="Username *" />
                            <FormikTextField name="email" label="Email *" />
                            <FormikTextField name="password" label="Password *" type="password" />
                            <FormikTextField name="validatePassword" label="Re-enter Password *" type="password" />
                            <Typography variant={"body2"}>
                                <b><a href="/login" style={{ textDecoration: 'none' }}>Already have an account? Log in</a></b>
                            </Typography>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Registering...' : 'Register'}
                            </Button>
                        </>
                    )}
                </>
            )}
        </FormContainer>
    )
}
