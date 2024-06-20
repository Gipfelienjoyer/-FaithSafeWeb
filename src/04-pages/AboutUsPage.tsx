import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';

const data = {
    title: "About Us",
    content: [
        {
            heading: "Who We Are",
            text: "We are a team of five students from the Berufsfachschule Bern in Switzerland, specifically from GIBB. As part of our school project, we created FaithSafe."
        },
        {
            heading: "The Birth of FaithSafe",
            text: "FaithSafe was developed as a temporary school project. Despite being a school project, the FaithSafe website and program will continue to exist, although it will not receive many updates in the future."
        },
        {
            heading: "Our Product",
            text: "FaithSafe is the name of our program, as well as the fictitious company behind it. It is a password manager programmed in JavaFX."
        }
    ],
    team: [
        {
            name: "Lon60",
            role: "Website and Backend Development",
            avatar: "https://github.com/Lon60.png"
        },
        {
            name: "Gipfelienjoyer",
            role: "Support for Website Development",
            avatar: "https://github.com/Gipfelienjoyer.png"
        },
        {
            name: "BambusTM",
            role: "JavaFX Application - Password Manager",
            avatar: "https://github.com/BambusTM.png"
        },
        {
            name: "RoBaertschi",
            role: "JavaFX Development",
            avatar: "https://github.com/RoBaertschi.png"
        },
        {
            name: "Fabbboy",
            role: "Encryption Algorithm in Java",
            avatar: "https://github.com/Fabbboy.png"
        }
    ]
};

export default function AboutUs() {
    return (
        <Box mt={'5em'}>
            <Container>
                <Typography variant="h1" textAlign={'center'}>{data.title}</Typography>
                <Grid container spacing={4} mt={'4em'}>
                    <Grid item xs={12} md={6}>
                        <Box textAlign="left">
                            {data.content.map((section, index) => (
                                <Box key={index} mb={3}>
                                    {section.heading && (
                                        <Typography variant="h3" color="black">
                                            {section.heading}
                                        </Typography>
                                    )}
                                    <Box mt={'1em'}>
                                        <Typography variant="body1" textAlign={'justify'}>
                                            {section.text}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                            <Grid container spacing={2} justifyContent="center">
                                {data.team.map((member, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                                        <Avatar src={member.avatar} alt={member.name} sx={{ width: 80, height: 80, margin: '0 auto' }} />
                                        <Typography variant="h6" mt={2}>{member.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">{member.role}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
