import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "../Button";
import { EXPLORE_GUIDES } from "../../constants/routes";

const StartNow = () => {
    return (
        <Box textAlign="center" sx={{ py: 10 }}>
            <Typography variant="h4" sx={{mb:2}}>Start for free</Typography>
            <Typography variant="body2" sx={{maxWidth:600, margin:"0 auto",mb:6}}>
                If you’ve made it this far, you must be at least a little curious. Sign up and take the first step
                toward your goals.
            </Typography>
            <Button to={EXPLORE_GUIDES} variant="outlined" color="inherit" size="large" sx={{ py: "15px", px: "35px" }}>
                Start now
            </Button>
        </Box>
    );
};

export default StartNow;
