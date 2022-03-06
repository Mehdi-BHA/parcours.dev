import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Card from "../GuideCard";

const ContainerCards = ({ title, content }) => {
    return (
        <div>
            {title && (
                <Typography variant="h4" sx={{ mb: 2 }}>
                    {title}
                </Typography>
            )}
            <Grid container spacing={2}>
                {content.map((elem,k) => (
                    <Grid key={k} item xs={6} md={4}>
                        <Card {...elem}/>
                    </Grid>
                ))}
                
            </Grid>
        </div>
    );
};

export default ContainerCards;
