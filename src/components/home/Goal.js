import { Box, Card, CardActionArea, CardContent, Container, Fade, styled, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import CardContainers from "../../components/containers/CardContainers";

const StyledTab = styled(Tab)(({ theme }) => ({
    color: "rgb(200,200,200)",
    fontSize: "16px",
    paddingTop: 0,
    paddingBottom: 0,
    "&.Mui-selected": {
        color: "#000",
        fontWeight: 500,
        backgroundColor: "rgba(250,250,250,.1)",
    },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
    },
}));

const Goal = ({ careerGuides, skillGuides }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container
            maxWidth="md"
            sx={{
                py: 4,
                mt: 10,
                minHeight: 550,
            }}
        >
            <Typography variant="h4" align="center" color="inherit" sx={{ mb: 2 }}>
                What is your goal?
            </Typography>
            <Box sx={{ mb: 4 }}>
                <StyledTabs value={value} onChange={handleChange} centered>
                    <StyledTab label="Start a new career" />
                    <StyledTab label="Learn a new skill" />
                </StyledTabs>
            </Box>
            <Box>
                {value === 0 && (
                    <Fade in={true}>
                        <div>
                            <CardContainers content={careerGuides} />
                        </div>
                    </Fade>
                )}
                {value === 1 && (
                    <Fade in={true}>
                        <div>
                            <CardContainers content={skillGuides} />
                        </div>
                    </Fade>
                )}
            </Box>
        </Container>
    );
};

export default Goal;
