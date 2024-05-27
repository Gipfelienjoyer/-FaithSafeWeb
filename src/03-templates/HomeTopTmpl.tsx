import TopLevelTexts from "../02-organisms/TopLevelTexts";
import DownloadButton from "../00-atoms/DownloadButton";
import React from "react";
import {Box, Grid} from "@mui/material";
import './Tmpl.css';

export default function HomeTopTmpl() {
    return (
        <Box mt={10} sx={{ position: 'relative', overflow: 'hidden' }}>
            <div className="background"></div>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                <TopLevelTexts />
                <Box mt={15}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={6} md={2}>
                            <DownloadButton />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}
