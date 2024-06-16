import React from 'react';
import windowsLogo from '../05-assets/windows-logo.png';
import macLogo from '../05-assets/mac-logo.png';
import DownloadCards from "../02-organisms/DownloadCards";
import { Grid, Container } from "@mui/material";
import DownloadTitle from "../02-organisms/DownloadTitle";

export interface DownloadDataProps {
    title: string;
    logo: string;
    buttons: {
        label: string;
        onClick: () => any;
    }[];
}

const downloadData: DownloadDataProps[] = [
    {
        title: 'Windows',
        logo: windowsLogo,
        buttons: [
            { label: 'Download .exe', onClick: () => console.log('Download .exe version') },
            { label: 'Download .msi', onClick: () => console.log('Download .msi version') },
        ],
    },
    {
        title: 'Mac',
        logo: macLogo,
        buttons: [
            { label: 'Download .app', onClick: () => console.log('Download .app version') },
        ],
    },
];

export default function DownloadPage() {
    return (
        <Container>
            <DownloadTitle />
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <DownloadCards downloadData={downloadData} />
                </Grid>
            </Grid>
        </Container>
    );
}
