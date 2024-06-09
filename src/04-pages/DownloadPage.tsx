import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function DownloadPage() {

    const navigate = useNavigate();
    const accessToken = Cookies.get("accessToken") || "";

    useEffect(() => {
        if (accessToken === "") {
            navigate("/login");
        }
    }, [navigate, accessToken]);

    const tiers = [
        {
            title: 'Free',
            price: '0',
            description: [
                '10x Nothing Included',
                '2 GB of nothing',
                'No Help center access',
                'No Email support',
            ]
        },
        {
            title: 'Professional',
            subheader: 'Recommended',
            price: '2',
            description: [
                'Password Manager Included',
                'Unlimited Passwords Included',
                'Help center access - IN PROGRESS',
                'No Priority email support',
                'No Dedicated team',
                'No Best deals',
            ],
        },
        {
            title: 'Enterprise',
            price: '1200',
            description: [
                'Password Manger on 10 Devices ',
                'To much Spend',
                'Privacy by Design included',
                'Trusted by Obama',
            ],
        },
    ];

    return (
        <Container
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography variant="h2" color="text.primary">
                    Download
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                border: tier.title === 'Professional' ? '1px solid' : undefined,
                                borderColor:
                                    tier.title === 'Professional' ? 'primary.main' : undefined,
                                background:
                                    tier.title === 'Professional'
                                        ? 'linear-gradient(#033363, #021F3B)'
                                        : undefined,
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        mb: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        color: tier.title === 'Professional' ? 'grey.100' : '',
                                    }}
                                >
                                    <Typography component="h3" variant="h6">
                                        {tier.title}
                                    </Typography>
                                    {tier.title === 'Professional' && (
                                        <Chip
                                            icon={<AutoAwesomeIcon />}
                                            label={tier.subheader}
                                            size="small"
                                            sx={{
                                                background: (theme) =>
                                                    theme.palette.mode === 'light' ? '' : 'none',
                                                backgroundColor: 'primary.contrastText',
                                                '& .MuiChip-label': {
                                                    color: 'primary.dark',
                                                },
                                                '& .MuiChip-icon': {
                                                    color: 'primary.dark',
                                                },
                                            }}
                                        />
                                    )}
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        color: tier.title === 'Professional' ? 'grey.50' : undefined,
                                    }}
                                >
                                    <Typography component="h3" variant="h2">
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h6">
                                        &nbsp; per month
                                    </Typography>
                                </Box>
                                <Divider
                                    sx={{
                                        my: 2,
                                        opacity: 0.2,
                                        borderColor: 'grey.500',
                                    }}
                                />
                                {tier.description.map((line) => (
                                    <Box
                                        key={line}
                                        sx={{
                                            py: 1,
                                            display: 'flex',
                                            gap: 1.5,
                                            alignItems: 'center',
                                        }}
                                    >
                                        {line.startsWith('No') ? (
                                            <CloseRoundedIcon
                                                sx={{
                                                    width: 20,
                                                    color:
                                                        tier.title === 'Professional'
                                                            ? 'grey.300'
                                                            : 'error.main',
                                                }}
                                            />
                                        ) : (
                                            <CheckCircleRoundedIcon
                                                sx={{
                                                    width: 20,
                                                    color:
                                                        tier.title === 'Professional'
                                                            ? 'primary.light'
                                                            : 'primary.main',
                                                }}
                                            />
                                        )}
                                        <Typography
                                            component="span"
                                            variant="subtitle2"
                                            sx={{
                                                color:
                                                    tier.title === 'Professional' ? 'grey.200' : undefined,
                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
