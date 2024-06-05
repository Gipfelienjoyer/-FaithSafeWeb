import {Box, Card, CardContent, Grid, Theme, useMediaQuery, useTheme} from "@mui/material";
import React from "react";

interface FormTmplProps {
    children: React.ReactNode;
}

export default function FormTmpl({children}: FormTmplProps) {
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{height: '75vh'}}>
            <Box width={isMobile ? '95%' : isTablet ? '50%' : '30%'}>
                <Card>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    )
}