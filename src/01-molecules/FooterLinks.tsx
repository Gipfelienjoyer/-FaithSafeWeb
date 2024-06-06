import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface LinkItem {
    label: string;
    href: string;
}

interface FooterLinksProps {
    title: string;
    links: LinkItem[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <Box
            sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography variant="body2" fontWeight={600}>
                {title}
            </Typography>
            {links.map((link, index) => (
                <Link key={index} color="text.secondary" href={link.href}>
                    {link.label}
                </Link>
            ))}
        </Box>
    );
}
