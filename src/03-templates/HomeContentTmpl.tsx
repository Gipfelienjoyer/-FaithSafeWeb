import {Box, Grid} from "@mui/material";
import ListImage from "../02-organisms/ListImage";
import WhyFaithSafeContent from "../01-molecules/WhyFaithSafeContent";
import PicAndContent from "../02-organisms/PicAndContent";
import happyCustomer1 from '../05-assets/happyCustomer1.png';
import Footer from "../02-organisms/Footer";
import React from "react";

const links = [
    {text: 'Instagram', url: '/Instagram'},
    {text: 'Datenschutzerklärung', url: '/Datenschutzerklärung'},
    {text: 'Impressum', url: '/Impressum'},
    {text: 'TikTok', url: '/TikTok'},
    {text: 'AGB', url: '/AGB'},
    {text: 'Cookies', url: '/Cookies'},
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
            <Box my={5}>
                <Footer links={links}/>
            </Box>
        </>
    );
}
