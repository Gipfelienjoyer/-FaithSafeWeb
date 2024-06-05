import React from "react";
import { Field, FieldProps } from "formik";
import { TextField } from "@mui/material";

interface FormikTextFieldProps {
    name: string;
    label: string;
    type?: string;
}

export default function FormikTextField({ name, label, type }: FormikTextFieldProps) {
    return (
        <Field name={name}>
            {({ field, meta }: FieldProps) => (
                <TextField
                    {...field}
                    label={label}
                    type={type}
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched && meta.error ? meta.error : ""}
                    margin="normal"
                    fullWidth
                />
            )}
        </Field>
    );
}
