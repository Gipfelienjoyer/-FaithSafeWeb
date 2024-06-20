import {Box, Grid} from "@mui/material";
import {ReactNode} from "react";

interface PicAndContentProps {
    children: [ReactNode, ReactNode];
}

export default function PicAndContent({ children }: PicAndContentProps) {
    return (
        <>
            <Grid item xs={12} md={6} sx={{marginBottom: '2em'}}>
                {children[0]}
            </Grid>
            <Grid item xs={12} md={6} sx={{marginBottom: '2em'}}>
                {children[1]}
            </Grid>
        </>
    );
}