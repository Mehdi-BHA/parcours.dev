import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const data = [
    {
        title: "Trusted content",
        description:
            "Created by experts, Khan Academy’s library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/content-marketing-2511651-2133729.png",
    },
    {
        title: "Personalized learning",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/content-marketing-2511651-2133729.png",
        description:
            "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
    },
    {
        title: "Tools to empower teachers",
        description:
            "With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/content-marketing-2511651-2133729.png",
    },
];

const WhyWorks = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                Why guidely.me works?
            </Typography>
            <Grid container spacing={8} justifyContent="center">
                {data.map((elem, k) => (
                    <GridItem key={k} title={elem.title} description={elem.description} image={elem.image} />
                ))}
            </Grid>
        </Container>
    );
};

const GridItem = ({ title, description, image }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" align="center" sx={{ mb: 1 }}>
                {title}
            </Typography>
            <img
                src={image}
                alt={title}
                style={{ display: "block", width: "100%", maxWidth: "250px", margin: "0 auto", marginBottom:"8px" }}
            />
            <Typography variant="body2" align="center">
                {description}
            </Typography>
        </Grid>
    );
};

export default WhyWorks;
