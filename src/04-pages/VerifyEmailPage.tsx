import {Box, Button, Typography} from "@mui/material";
import React from "react";
import {useLocation} from "react-router-dom";
import FormTmpl from "../03-templates/FormTmpl";
import FormCardHeader from "../01-molecules/FormCardHeader";

export default function VerifyEmailPage() {
    const query = new URLSearchParams(useLocation().search);
    const submittedEmail = query.get('email') || '--NO EMAIL DATA--';

    return (
        <FormTmpl>
            <FormCardHeader   text={'Verify Email'}/>
            <Box textAlign="center" mt={4}>
                <Typography variant="h6" component="p" gutterBottom>
                    Please confirm your email address to complete the registration.
                    Your Email is: <b>{submittedEmail}</b>
                </Typography>
                <Button type="submit">
                    <a href="/login" style={{ textDecoration: 'none' }}>Go to Login</a>
                </Button>
            </Box>
        </FormTmpl>
    )
}