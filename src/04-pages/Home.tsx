import React from "react";
import HomeTopTmpl from "../03-templates/HomeTopTmpl";
import HomeContentTmpl from "../03-templates/HomeContentTmpl";
import {Box, Container, Grid} from "@mui/material";

export default function Home() {
    return (
        <Container>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
            >
                <Box mb={5}>
                    <HomeTopTmpl/>
                </Box>
                <HomeContentTmpl/>
            </Grid>
        </Container>
    )
}