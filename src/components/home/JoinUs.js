import { Box, Container, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const JoinUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <Paper sx={{ backgroundColor: theme.palette.primary.main, py: 4 }} elevation={6}>
            <Container maxWidth="md" sx={{ display: "flex", alignItems: "center",px:5 }}>
                <Typography variant="h3" sx={{ flex: 1 }}>
                    Join us
                </Typography>
                <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
                    <Box sx={{mr:5,mb: isMobile ? 1 : 0}}>
                        <Typography sx={{fontSize:"37px"}}>50k</Typography>
                        <Typography variant="body1">learners</Typography>
                    </Box>
                    <Box sx={{mr:5,mb: isMobile ? 1 : 0}}>
                        <Typography sx={{fontSize:"37px"}}>27+</Typography>
                        <Typography variant="body1">guides</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{fontSize:"37px"}}>3+</Typography>
                        <Typography variant="body1">languages</Typography>
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
};

export default JoinUs;
