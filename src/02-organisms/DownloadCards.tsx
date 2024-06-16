import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { DownloadDataProps } from "../04-pages/DownloadPage";

interface DownloadCardsProps {
    downloadData: DownloadDataProps[]
}

export default function DownloadCards({ downloadData }: DownloadCardsProps) {

    return (
        <Grid container spacing={5} justifyContent="center">
            {downloadData.map((item) => (
                <Grid item xs={12} sm={10} md={8} lg={6} key={item.title}>
                    <Card sx={{ padding: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <CardMedia
                                component="img"
                                sx={{ height: '10em', width: '10em', objectFit: 'contain', margin: '0 auto' }}
                                image={item.logo}
                                alt={`${item.title} logo`}
                            />
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            {item.buttons.map((button, index) => (
                                <Button key={index} onClick={button.onClick} sx={{ margin: '0 10px' }}>
                                    {button.label}
                                </Button>
                            ))}
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
