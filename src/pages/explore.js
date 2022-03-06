import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import CardContainers from "../components/containers/CardContainers";
import { getCareerGuides, getSkillGuides } from "../lib/guides";

const explore = ({ careerGuides, skillGuides, mostStarredGuides }) => {
    console.log(careerGuides);
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 4 }}>
                <SearchBar />
                <Box mt={4}>
                    <CardContainers title="Career guides" content={careerGuides} />
                </Box>
                <Box mt={4}>
                    <CardContainers title="Skill guides" content={skillGuides} />
                </Box>
            </Container>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const careerGuides = getCareerGuides();
    const skillGuides = getSkillGuides()
    return {
        props: {
            careerGuides: careerGuides.map(guide=>({...guide, author:"guidely.me team"})),
            skillGuides: skillGuides.map(guide=>({...guide, author:"guidely.me team"})),
            mostStarredGuides: [],
        },
    };
};

export default explore;