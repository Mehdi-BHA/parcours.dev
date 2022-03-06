import React from "react";
import { Box, Card as MuiCard, CardActionArea, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { GUIDE } from "../constants/routes";
import PersonIcon from '@mui/icons-material/Person';

const Card = ({ id, name, author, description, category }) => {
    return (
        <MuiCard sx={{ minWidth: "200px", backgroundColor: "black" }}>
            <Link href={GUIDE(category, id)}>
                <a>
                    <CardActionArea sx={{ height: "100%" }}>
                        <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {name}
                                </Typography>
                                {/* <Box sx={{ position: "relative", width:"70px", height:'100px' }}>
                                    <Image
                                        src={`/assets/images/guides/frontend-icon.png`}
                                        alt="frontend"
                                        layout="fill"
                                        objectFit="contain"
                                        objectPosition="center"
                                    />
                                </Box> */}
                            </Box>
                            {author && <Typography variant="body2" sx={{mb:1 ,}}><PersonIcon sx={{verticalAlign:"top"}} />{" "} {author}</Typography>}
                            <Typography>Easy - </Typography>
                            <Typography variant="body2" fontSize={14} color="text.secondary">
                                Step by step guide to become {name} en 2022
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Link>
        </MuiCard>
    );
};

export default Card;
