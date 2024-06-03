// src/components/Login.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { login } from '../AuthService';

const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                const data = await login(values);
                console.log('Login successful', data);
            } catch (error) {
                setErrors({ username: 'Invalid email or password' });
                console.error('Login failed', error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>
                <div>
                    <button type="submit" disabled={formik.isSubmitting}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
