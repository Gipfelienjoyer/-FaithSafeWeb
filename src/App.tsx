import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./04-pages/Home";
import LogIn from "./04-pages/LoginPage";
import RegisterPage from "./04-pages/RegisterPage";
import Tos from "./04-pages/tos";
import DownloadPage from "./04-pages/DownloadPage";
import VerifyEmailPage from "./04-pages/VerifyEmailPage";
import Impress from "./04-pages/Impress";
import UserListPage from "./04-pages/UserListPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import Footer from "./02-organisms/Footer";
import { Box } from "@mui/material";
import PrivacyPolicyPage from "./04-pages/PrivacyPolicyPage";
import AboutUs from "./04-pages/AboutUsPage";
import Header from './02-organisms/Header';

const productLinks = [
    { label: 'Home', href: '/' },
    { label: 'Download', href: '/download' },
    { label: 'FAQs', href: '/#faq' },
];

const companyLinks = [
    { label: 'About us', href: '/about' },
];

const legalLinks = [
    { label: 'Terms', href: '/tos' },
    { label: 'Privacy', href: 'privacy' },
    { label: 'Imprint', href: '/imprint' },
];

const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/BambusTM/FaithSafeFX' },
];

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/register/verify" element={<VerifyEmailPage />} />
                    <Route path="/tos" element={<Tos />} />
                    <Route path="/download" element={<DownloadPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/imprint" element={<Impress />} />
                    <Route path="/admin/list" element={<UserListPage />} />
                    <Route path="/privacy" element={<PrivacyPolicyPage />} />
                    <Route path="/about" element={<AboutUs />} />
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
