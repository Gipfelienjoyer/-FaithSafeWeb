import { Button, Typography} from "@mui/material";
import FormikTextField from "../01-molecules/FormikTextField";
import FormContainer from "../01-molecules/FormContainer";
import React from "react";
import * as yup from "yup";
import FormCardHeader from "../01-molecules/FormCardHeader";

interface RegisterFormProps {
    initialValues: any;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: any; // any is not good:(
}

export default function RegisterForm({initialValues, validationSchema, onSubmit,}: RegisterFormProps) {
    return (
        <FormContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <>
                    <FormCardHeader text={'Register'}/>

                    <FormikTextField name="username" label="Username *"/>
                    <FormikTextField name="email" label="Email *"/>
                    <FormikTextField name="password" label="Password *" type="password"/>
                    <FormikTextField name="validatePassword" label="Re-enter Password *" type="password"/>
                    <Typography variant={"body2"}>
                        <b><a href="/login" style={{textDecoration: 'none'}}>Already have an account? Log in</a></b>
                    </Typography>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </Button>
                </>
            )}
        </FormContainer>
    )
}
