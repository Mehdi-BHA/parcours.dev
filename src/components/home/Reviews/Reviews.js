import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Carousel from "../../Carousel/Carousel";
import Card from "./Card";

const reviews = [
    {
        name: "Hadil",
        job: "Etudiante",
        img: "https://blog-fr.orson.io/wp-content/uploads/2020/07/logostarbuck.png",
        content:
            "Excellent endroit, calme et très agréable. Le personnel est très souriant et serviable. Merci beaucoup pour l'accueil.",
    },
    {
        name: "Wael",
        job: "Ingenieur en informatique",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
        content:
            "Un endroit très sympathique et conviviale qui offre une super vu imprenable sur toute la ville de sousse ❤️❤️❤️",
    },
    {
        name: "Emir Chouaieb",
        job: "ingénieur en informatique",
        img: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
        content: "Meilleur endroit pour travailler tout en profitant d’une vue magnifique sur Sousse 🤩",
    },
    {
        name: "Mehdi Moujahed",
        job: "Ingenieur",
        img: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
        content: "Geat place, great view.",
    },
];

const Reviews = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 10}}>
            <Typography variant="h4" align="center">
                What people say
            </Typography>
                <Carousel sx={{mt:2}}>
                    {reviews.map((review, k) => (
                        <Card review={review} key={k} />
                    ))}
                </Carousel>
        </Container>
    );
};

export default Reviews;
