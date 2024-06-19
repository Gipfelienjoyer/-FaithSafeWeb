import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Imprint() {
    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Box textAlign="left">
                <Typography variant="h3" gutterBottom textAlign={'center'}>
                    Imprint
                </Typography>
                <Typography variant="body1">
                    <strong>Company Name:</strong> FaithSafe
                </Typography>
                <Typography variant="body1">
                    <strong>Address:</strong> Lorrainestrasse 1, 3000 Bern, Switzerland
                </Typography>
                <Typography variant="body1">
                    <strong>Email:</strong>{' '}
                    <Link href="mailto:info@faithsafe.com">info@faithsafe.com</Link>
                </Typography>
                <Typography variant="body1">
                    <strong>Managing Director:</strong> Björn Sieckmann
                </Typography>
                <Box mt={'2em'}>
                    <Typography variant="body1" paragraph color={'red'}>
                        We are not willing or obliged to participate in dispute resolution proceedings before a consumer
                        arbitration board.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
