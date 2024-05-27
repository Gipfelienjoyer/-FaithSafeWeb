import React from 'react';
import { Typography, Box } from "@mui/material";

export default function TopLevelTexts() {
    return (
        <Box textAlign="center" width="100%">
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                Some random text to replace
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '6rem' } }}>
                Faithsafe
            </Typography>
        </Box>
    );
}
