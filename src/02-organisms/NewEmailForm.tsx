import {Button} from "@mui/material";
import FormikTextField from "../01-molecules/FormikTextField";
import FormContainer from "../01-molecules/FormContainer";
import React from "react";
import * as yup from "yup";

interface RegisterFormProps {
    initialValues: any;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: any; // any is not good:(
}

export default function NewEmailForm({initialValues, validationSchema, onSubmit}: RegisterFormProps) {
    return (
        <FormContainer
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <>
                    <FormikTextField name="username" label="Username"/>
                    <FormikTextField name="password" label="Password" type="password"/>
                    <FormikTextField name="email" label="New Email" type="text"/>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'changing...' : 'Change Email'}
                    </Button>
                </>
            )}
        </FormContainer>
    )
}