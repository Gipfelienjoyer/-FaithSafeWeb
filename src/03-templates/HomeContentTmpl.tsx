import {Box, Grid} from "@mui/material";
import ListImage from "../02-organisms/ListImage";
import WhyFaithSafeContent from "../01-molecules/WhyFaithSafeContent";
import PicAndContent from "../02-organisms/PicAndContent";
import happyCustomer1 from '../05-assets/happyCustomer1.png';
import Footer from "../02-organisms/Footer";
import React from "react";
import FacebookIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const productLinks = [
    { label: 'Features', href: '#' },
    { label: 'Download', href: '/download' },
    { label: 'Pricing', href: '#' },
    { label: 'FAQs', href: '#' },
];

const companyLinks = [
    { label: 'About us', href: '#' },
];

const legalLinks = [
    { label: 'Terms', href: '/tos' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '#' },
];

const socialLinks = [
    { icon: <FacebookIcon />, label: 'GitHub', href: '#' },
    { icon: <TwitterIcon />, label: 'X', href: '#' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
];

export default function HomeContentTmpl() {
    return (
        <>
            <Grid container spacing={2}>
                <PicAndContent>
                    <ListImage imgAlt={"Happy Customer"} imgSrc={happyCustomer1}/>
                    <WhyFaithSafeContent/>
                </PicAndContent>
            </Grid>
            <Box mt={'5vh'}>
                <Footer
                    productLinks={productLinks}
                    companyLinks={companyLinks}
                    legalLinks={legalLinks}
                    socialLinks={socialLinks}
                />
            </Box>
        </>
    );
}
