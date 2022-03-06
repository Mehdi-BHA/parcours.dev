import { Box, Button, Container, styled, Typography, Link } from "@mui/material";
import React from "react";
import Road from "../../assets/images/road";
import HeaderDrawing from "../../assets/images/HeaderDrawing";
import { motion } from "framer-motion";

const Background = () => {
    return (
        <React.Fragment>
            <Box sx={{ position: "absolute", width: "100%", zIndex: "-1", opacity: 0.5 }}>
                <Road width="100%" opacity="0.4" style={{ filter: "blur(0px)" }} />
            </Box>
            <Box sx={{ position: "absolute", width: "100%", zIndex: "-1", opacity: 0.5 }}>
                <HeaderDrawing width="100%" />
            </Box>
        </React.Fragment>
    );
};

const FlippedText = () => {
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-block",
                backgroundColor: "rgba(255,0,0,0.7)",
                borderRadius: "8px",
                px: 2,
                overflow: "hidden",
                verticalAlign: "top",
            }}
        >
            <span style={{ visibility: "hidden", opacity: 0 }}>career</span>
            <motion.div
                initial={{ opacity: 1, x: "-50%", y: -60 }}
                animate={{ opacity: [0, 1, 1, 1, 0], y: [-60, 0, 0, 0, 60] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
                style={{ position: "absolute", top: 0, left: "50%" }}
            >
                skill
            </motion.div>
            <motion.div
                initial={{ opacity: 1, x: "-50%", y: -60 }}
                animate={{ opacity: [0, 1, 1, 1, 0], y: [-60, 0, 0, 0, 60] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1, delay: 1.75 }}
                style={{ position: "absolute", top: 0, left: "50%" }}
            >
                career
            </motion.div>
        </Box>
    );
};

const Header = (props) => {
    return (
        <Box {...props}>
            <Background />
            <Container maxWidth="md" sx={{ mt: 14, mb: 20 }}>
                <Typography variant="h3" align="center" sx={{ mb: 2, fontFamily: "'Julius Sans One'" }}>
                    Learn a new <FlippedText /> from scratch
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                    We offer you a complete guide to make the career that you ever dreamt about.
                </Typography>
                <Box textAlign="center">
                    <Button
                        color="inherit"
                        variant="outlined"
                        size="large"
                        sx={{ py: "15px", px: "35px" }}
                        component={Link}
                        to="/roadmaps"
                    >
                        Explore our guides
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
