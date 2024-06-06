import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

interface SocialLink {
    icon: React.ReactNode;
    label: string;
    href: string;
}

interface FooterSocialLinksProps {
    socialLinks: SocialLink[];
}

export default function FooterSocialLinks({ socialLinks }: FooterSocialLinksProps) {
    return (
        <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
                color: 'text.secondary',
            }}
        >
            {socialLinks.map((social, index) => (
                <IconButton
                    key={index}
                    color="inherit"
                    href={social.href}
                    aria-label={social.label}
                    sx={{ alignSelf: 'center' }}
                >
                    {social.icon}
                </IconButton>
            ))}
        </Stack>
    );
}
