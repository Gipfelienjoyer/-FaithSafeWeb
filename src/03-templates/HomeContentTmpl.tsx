import {Grid} from "@mui/material";
import ListImage from "../02-organisms/ListImage";
import WhyFaithSafeContent from "../01-molecules/WhyFaithSafeContent";
import PicAndContent from "../02-organisms/PicAndContent";
import passwordManagerImage from '../05-assets/passwordManager.png';
import supportImage from '../05-assets/support.png';
import securityImage from '../05-assets/security.png';
import React from "react";
import Faq from "../02-organisms/Faq";

const firstTitle = "What is FaithSafe?";
const firstSubtitles = [
    "In today's digital age, managing multiple passwords can be a challenge. FaithSafe offers a secure, user-friendly solution for storing and organizing your passwords. With advanced encryption, your data remains safe from prying eyes."
];

const secondTitle = "Faithsafe Benefits";
const secondSubtitles = [
    "Its easy and intuitive to use",
    "Cross platform compatability",
    "You get 24/7 support by our team"
];

const thirdTitle = "Privacy"
const thirdSubitles = [
    "Our company is based in Switzerland which has one of the strictest data privacy laws of the world",
    "Your data will be encrypted by our self developed algorithm",
    "To enhance your privacy you can autogenerate passwords that are really secure"
]
export default function HomeContentTmpl() {
    return (
        <>
            <Grid container spacing={2}>
                <PicAndContent>
                    <ListImage imgAlt={"Happy Customer"} imgSrc={passwordManagerImage}/>
                    <WhyFaithSafeContent title={firstTitle} subtitles={firstSubtitles}/>
                </PicAndContent>
                <PicAndContent>
                    <WhyFaithSafeContent title={secondTitle} subtitles={secondSubtitles}/>
                    <ListImage imgSrc={supportImage} imgAlt={"Happy Customer"}/>
                </PicAndContent>
                <PicAndContent>
                    <ListImage imgSrc={securityImage} imgAlt={"Happy Customer"}/>
                    <WhyFaithSafeContent title={thirdTitle} subtitles={thirdSubitles}/>
                </PicAndContent>
                <Faq/>
            </Grid>
        </>
    );
}
