import logo from "../05-assets/logo.png";
import {Box, Grid, Typography} from "@mui/material";
import React from "react";

interface FormCardHeaderProps {
    text: string
}

export default function FormCardHeader({text}: FormCardHeaderProps) {
    return (
        <Grid container alignItems="center">
            <img src={logo} alt="Faithsafe logo" width="20%" height="auto" />
            <Box alignItems="center" justifyContent="center" textAlign="center">
                <Typography variant="h3" component="h1" gutterBottom>
                    {text}
                </Typography>
            </Box>
        </Grid>
    )
}