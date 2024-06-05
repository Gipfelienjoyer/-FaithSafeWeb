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

export default function RegisterForm({initialValues, validationSchema, onSubmit}: RegisterFormProps) {
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
                                Register
                            </Typography>
                        </Box>
                    </Grid>
                    <FormikTextField name="username" label="Username *"/>
                    <FormikTextField name="email" label="Email *"/>
                    <FormikTextField name="password" label="Password *" type="password"/>
                    <FormikTextField name="validatePassword" label="Re-enter Password *" type="password"/>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                </>
            )}
        </FormContainer>
    )
}