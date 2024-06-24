import React from 'react';
import { Box, Grid, Typography } from "@mui/material";

// Define an interface for the component props
interface WhyFaithSafeContentProps {
    title: string;
    subtitles: string[];
}

const WhyFaithSafeContent: React.FC<WhyFaithSafeContentProps> = ({ title, subtitles }) => {
    return (
        <Box ml={{ xs: 0, md: 10 }} width="100%">
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                margin="0"
            >
                <Typography variant="h3">{title}</Typography>
                {subtitles.map((subtitle, index) => (
                    <Typography key={index} align="left" variant="h6">{subtitle}</Typography>
                ))}
            </Grid>
        </Box>
    );
}

export default WhyFaithSafeContent;
