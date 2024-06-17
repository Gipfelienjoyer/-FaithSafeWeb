import React, { useState, useEffect } from 'react';
import windowsLogo from '../05-assets/windows-logo.png';
import macLogo from '../05-assets/mac-logo.png';
import DownloadCards from "../02-organisms/DownloadCards";
import { Grid, Container, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import DownloadTitle from "../02-organisms/DownloadTitle";
import DownloadService from "../06-Services/DownloadService";
import { useNavigate } from "react-router-dom";
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

async function downloadFile(fileType: 'exe' | 'msi' | 'app', setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>) {
    const accessToken = Cookies.get("accessToken") || "";

    try {
        await downloadService.downloadFile(accessToken, fileType);
        await new Promise(f => setTimeout(f, 1000));
        setPopupOpen(true);
    } catch (error) {
        console.error('Error downloading the file', error);
        alert('Failed to download file');
    }
}

export default function DownloadPage() {
    const [popupOpen, setPopupOpen] = useState(false);
    const accessToken = Cookies.get("accessToken") || "";
    const navigate = useNavigate();

    const downloadData: DownloadDataProps[] = [
        {
            title: 'Windows',
            logo: windowsLogo,
            buttons: [
                { label: 'Download .exe', onClick: () => downloadFile('exe', setPopupOpen) },
                { label: 'Download .msi', onClick: () => downloadFile('msi', setPopupOpen) },
            ],
        },
        {
            title: 'Mac',
            logo: macLogo,
            buttons: [
                { label: 'Download .app', onClick: () => downloadFile('app', setPopupOpen) },
            ],
        },
    ];

    useEffect(() => {
        if (accessToken === "") {
            navigate("/login");
        }
    }, [navigate, accessToken]);

    const handleClose = () => {
        setPopupOpen(false);
    };

    return (
        <>
            <Container>
                <DownloadTitle/>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <DownloadCards downloadData={downloadData.map(data => ({
                            ...data,
                            buttons: data.buttons.map(button => ({
                                ...button,
                                onClick: () => button.onClick()
                            }))
                        }))}/>
                    </Grid>
                </Grid>
            </Container>
            <Dialog open={popupOpen} onClose={handleClose}>
                <DialogTitle>Download Started</DialogTitle>
                <DialogContent>
                    <iframe id='kofiframe' src='https://ko-fi.com/faithsafe/?hidefeed=true&widget=true&embed=true&preview=true'
                            style={{ border: 'none', width: '100%', padding: '4px', background: '#f9f9f9', height: '712px' }}
                            title='faithsafe'>
                    </iframe>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
