import React from "react";
import {Formik, Form} from "formik";
import * as yup from "yup";

interface FormTmplProps {
    initialValues: any;
    validationSchema: yup.ObjectSchema<any>;
    onSubmit: (values: any, actions: any) => void;
    children: (props: any) => React.ReactNode;
}

export default function FormContainer({initialValues, validationSchema, onSubmit, children}: FormTmplProps) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {props => (
                <Form>
                    {children(props)}
                </Form>
            )}
        </Formik>
    )
}
