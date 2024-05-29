import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

interface FooterLink {
    text: string;
    url: string;
}

interface FooterProps {
    links: FooterLink[];
}

export default  function Footer({ links }: FooterProps) {
    return (
        <Box sx={{ backgroundColor: '#f5f5f5', padding: '1em', borderRadius: '1.5em', }}>
            <Grid container spacing={2}>
                {links.map((link, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link href={link.url} target="_blank" rel="noopener" sx={{ textDecoration: 'none', color: '#000' }}>
                            {link.text}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};