import {Button, Typography} from "@mui/material";
import FormikTextField from "../01-molecules/FormikTextField";
import FormContainer from "../01-molecules/FormContainer";
import React from "react";
import * as yup from "yup";

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
            {({ isSubmitting }) => (
                <>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Register
                    </Typography>
                    <FormikTextField name="username" label="Username *" />
                    <FormikTextField name="email" label="Email *" />
                    <FormikTextField name="password" label="Password *" type="password" />
                    <FormikTextField name="validatePassword" label="Reenter Password *" type="password" />
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                </>
            )}
        </FormContainer>
    )
}