import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./04-pages/Home";
import LogIn from "./04-pages/LoginPage";
import RegisterPage from "./04-pages/RegisterPage";
import Tos from "./04-pages/tos";
import DownloadPage from "./04-pages/DownloadPage";
import VerifyEmailPage from "./04-pages/VerifyEmailPage";
import Impressum from "./04-pages/impressum";
import UserListPage from "./04-pages/UserListPage";
import FacebookIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "./02-organisms/Footer";
import {Box} from "@mui/material";

const productLinks = [
    { label: 'Features', href: '#' },
    { label: 'Download', href: '/download' },
    { label: 'FAQs', href: '#' },
];

const companyLinks = [
    { label: 'About us', href: '#' },
];

const legalLinks = [
    { label: 'Terms', href: '/tos' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '/imprint' },
];

const socialLinks = [
    { icon: <FacebookIcon />, label: 'GitHub', href: '#' },
    { icon: <TwitterIcon />, label: 'X', href: '#' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
];

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LogIn/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/register/verify" element={<VerifyEmailPage />}/>
                    <Route path="/tos" element={<Tos />}/>
                    <Route path="/download" element={<DownloadPage />}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/imprint" element={<Impressum/>}/>
                    <Route path="/admin/list" element={<UserListPage/>}/>
                </Routes>
            </BrowserRouter>
            <Box mt={'5vh'}>
                <Footer
                    productLinks={productLinks}
                    companyLinks={companyLinks}
                    legalLinks={legalLinks}
                    socialLinks={socialLinks}
                />
            </Box>
        </div>
    );
}