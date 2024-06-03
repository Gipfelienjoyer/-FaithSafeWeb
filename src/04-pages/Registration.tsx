import React from "react";
import {ErrorMessage, Field, FieldProps, Form, Formik} from "formik";
import {Button, Input, TextField} from "@mui/material";
import * as yup from "yup";
import {login, register} from "../AuthService";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const validationSchema = yup.object({
    username: yup.string().min(8, 'Username must at least be 8 characters long').required('Username is required').matches(/^[a-zA-Z0-9@]+$/),
    email: yup.string().email('Must be a Email').required('Please enter a Email'),
    password: yup.string().min(8, 'Must be at least 8 characters long').required('Please enter a password').matches( /^(?=.*[A-Z])(?=.*\d).+$/),
    validatePassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required('Please confirm your password'),
});

interface RegistrationFormValues {
    username: string;
    email: string;
    password: string;
    validatePassword: string;
}

function Registration() {
    const initialValues: RegistrationFormValues = {
        username: '',
        email: '',
        password: '',
        validatePassword: '',
    }

    async function onSubmit(
        values: RegistrationFormValues,
        {setSubmitting, setErrors}: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<RegistrationFormValues>) => void
        }
    ) {
        try {
            await register(values);
        } catch (error) {
            setErrors({username: 'Invalid email or password'});
            console.error('Login failed', error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({isSubmitting}) => (

                <Form>
                    <div>
                        <Field name={"username"}>
                            {({field, meta}: FieldProps) => (
                                <TextField
                                    {...field}
                                    label={"Username *"}
                                    type={"text"}
                                    error={meta.touched && Boolean(meta.error)}
                                    helperText={meta.touched && meta.error ? meta.error : ""}
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name={"email"}>
                            {({field, meta}: FieldProps) => (
                                <TextField
                                    {...field}
                                    label={"Email *"}
                                    type={"text"}
                                    error={meta.touched && Boolean(meta.error)}
                                    helperText={meta.touched && meta.error ? meta.error : ""}
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name={"password"}>
                            {({field, meta}: FieldProps) => (
                                <TextField
                                    {...field}
                                    label={"Password *"}
                                    type={"password"}
                                    error={meta.touched && Boolean(meta.error)}
                                    helperText={meta.touched && meta.error ? meta.error : ""}
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name={"validatePassword"}>
                            {({field, meta}: FieldProps) => (
                                <TextField
                                    {...field}
                                    label={"Reenter Password *"}
                                    type={"password"}
                                    error={meta.touched && Boolean(meta.error)}
                                    helperText={meta.touched && meta.error ? meta.error : ""}
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        </Field>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}>
                            Register
                        </button>
                    </div>
                </Form>


            )}
        </Formik>

    )
}

export default Registration;