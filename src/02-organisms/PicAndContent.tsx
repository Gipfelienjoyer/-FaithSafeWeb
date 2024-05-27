import {Grid} from "@mui/material";
import {ReactNode} from "react";

interface PicAndContentProps {
    children: [ReactNode, ReactNode];
}

export default function PicAndContent({ children }: PicAndContentProps) {
    return (
        <>
            <Grid item xs={12} md={6}>
                {children[0]}
            </Grid>
            <Grid item xs={12} md={6}>
                {children[1]}
            </Grid>
        </>
    );
}