import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const data = {
    title: "Imprint",
    content: [
        {
            type: "section",
            heading: "Company Information",
            text: "FaithSafe\nLorrainestrasse 1, 3000 Bern, Switzerland\ninfo@faithsafe.com\nManaging Director: Björn Sieckmann"
        },
        {
            type: "section",
            heading: "Legal Notice",
            text: "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
        }
    ]
};

export default function Imprint() {
    return (
        <Box mt={'5em'}>
            <Container>
                <Typography variant="h1" textAlign={'center'}>{data.title}</Typography>
                <Box textAlign="left" mt={'4em'}>
                    {data.content.map((section, index) => (
                        <Box key={index} mb={3}>
                            {section.heading && (
                                <Typography variant="h3" color="black">
                                    {section.heading}
                                </Typography>
                            )}
                            <Box mt={'1em'}>
                                <Typography variant="body1" textAlign={'justify'} component={'div'}>
                                    {section.text.split('\n').map((line, i) => (
                                        <div key={i}>
                                            {line.includes('info@faithsafe.com') ? (
                                                <Link href="mailto:info@faithsafe.com">info@faithsafe.com</Link>
                                            ) : (
                                                line
                                            )}
                                            <br />
                                        </div>
                                    ))}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
