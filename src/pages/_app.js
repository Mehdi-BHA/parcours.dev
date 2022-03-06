import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import theme from "../styles/theme";
import "../styles/globals.css";
import "../styles/canva.css";
import { AuthProvider } from "../contexts/AuthContext";
import Footer from "../components/Footer";

const MyApp = (props) => {
    
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </AuthProvider>
        </ThemeProvider>
    );
};

export default MyApp;
