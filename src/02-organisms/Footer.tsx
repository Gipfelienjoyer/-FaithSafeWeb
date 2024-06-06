import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Copyright from '../00-atoms/Copyright';
import FooterLogo from "../00-atoms/FooterLogo";
import FooterLinks from '../01-molecules/FooterLinks';
import FooterSocialLinks from "../01-molecules/FooterSocialLinks";

interface LinkItem {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ReactNode;
    label: string;
    href: string;
}

interface FooterProps {
    productLinks: LinkItem[];
    companyLinks: LinkItem[];
    legalLinks: LinkItem[];
    socialLinks: SocialLink[];
}

export default function Footer({ productLinks, companyLinks, legalLinks, socialLinks }: FooterProps) {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <FooterLogo />
                <FooterLinks title="Product" links={productLinks} />
                <FooterLinks title="Company" links={companyLinks} />
                <FooterLinks title="Legal" links={legalLinks} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Link color="text.secondary" href="#">
                        Privacy Policy
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" href={"/tos"}>
                        Terms of Service
                    </Link>
                    <Copyright />
                </div>
                <FooterSocialLinks socialLinks={socialLinks} />
            </Box>
        </Container>
    );
}
