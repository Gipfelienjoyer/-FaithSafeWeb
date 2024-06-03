import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {login} from '../AuthService';
import {Input, Button} from '@mui/material';

const validationSchema = yup.object({
    username: yup.string().min(3, 'Username must be at least 3 characters long').required('Username is required'),
    password: yup.string().min(4, 'Password must be at least 8 characters long').required('Password is required'),
});

interface LoginFormValues {
    username: string;
    password: string;
}

function Login() {
    const initialValues: LoginFormValues = {
        username: '',
        password: '',
    };

    async function onSubmit(
        values: LoginFormValues,
        {setSubmitting, setErrors}: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Partial<LoginFormValues>) => void
        }
    ) {
        try {
            await login(values);
        } catch (error) {
            setErrors({username: 'Invalid email or password'});
            console.error('Login failed', error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div>
                            <Field
                                as={Input}
                                name="username"
                                type="text"
                                placeholder="Username"
                            />
                            <ErrorMessage name="username" component="div"/>
                        </div>
                        <div>
                            <Field
                                as={Input}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <div>
                            <Button type="submit" disabled={isSubmitting}>
                                Login
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
