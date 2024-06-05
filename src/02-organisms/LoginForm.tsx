import {Box, Button, Grid, Typography} from "@mui/material";
import FormikTextField from "../01-molecules/FormikTextField";
import FormContainer from "../01-molecules/FormContainer";
import React from "react";
import * as yup from "yup";
import logo from '../05-assets/logo.png'

interface RegisterFormProps {
    initialValues: any;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: any; // any is not good:(
}

export default function LoginForm({initialValues, validationSchema, onSubmit}: RegisterFormProps) {
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
                                Login
                            </Typography>
                        </Box>
                    </Grid>
                    <FormikTextField name="username" label="Username"/>
                    <FormikTextField name="password" label="Password" type="password"/>
                    <Typography variant={"body2"}><b><a href="/register" style={{ textDecoration: 'none' }}>Don't have an account? Register now!</a></b></Typography>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Login...' : 'Login'}
                    </Button>
                </>
            )}
        </FormContainer>
    )
}