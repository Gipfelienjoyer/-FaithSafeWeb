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
                alignItems="center"
            >
                <Box mb={5} width="100%">
                    <HomeTopTmpl/>
                </Box>
                <Box width="100%">
                    <HomeContentTmpl/>
                </Box>
            </Grid>
        </Container>
    )
}
