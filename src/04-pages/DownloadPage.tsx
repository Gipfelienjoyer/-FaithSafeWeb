import React, {useEffect} from 'react';
import windowsLogo from '../05-assets/windows-logo.png';
import macLogo from '../05-assets/mac-logo.png';
import DownloadCards from "../02-organisms/DownloadCards";
import { Grid, Container } from "@mui/material";
import DownloadTitle from "../02-organisms/DownloadTitle";
import DownloadService from "../06-Services/DownloadService";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

export interface DownloadDataProps {
    title: string;
    logo: string;
    buttons: {
        label: string;
        onClick: () => any;
    }[];
}

const downloadService = new DownloadService();

async function downloadFile(fileType: 'exe' | 'msi' | 'app') {
    const accessToken = Cookies.get("accessToken") || "";

    try {
        await downloadService.downloadFile(accessToken, fileType);
    } catch (error) {
        console.error('Error downloading the file', error);
        alert('Failed to download file');
    }
}

const downloadData: DownloadDataProps[] = [
    {
        title: 'Windows',
        logo: windowsLogo,
        buttons: [
            { label: 'Download .exe', onClick: () => downloadFile('exe') },
            { label: 'Download .msi', onClick: () => downloadFile('msi') },
        ],
    },
    {
        title: 'Mac',
        logo: macLogo,
        buttons: [
            { label: 'Download .app', onClick: () => downloadFile('app') },
        ],
    },
];

export default function DownloadPage() {
    const accessToken = Cookies.get("accessToken") || "";
    const navigate = useNavigate();

    useEffect(() => {
        if (accessToken === "") {
            navigate("/login");
        }
    }, [navigate, accessToken]);

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
