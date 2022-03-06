import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./style.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, IconButton } from "@mui/material";

const Carousel = ({ children,...rest }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const settings = {
        arrows: true,
        lazyload: true,
        infinite: true,
        speed: 300,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        pauseOnHover: true,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setSlideIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                },
            },
        ],
    };
    return (
        <Box {...rest}>
            <Slider {...settings}>
                {children.map((child, k) => (
                    <span key={k} className={k === slideIndex ? `${styles.slide} ${styles.activeSlide}` : styles.slide}>
                        {child}
                    </span>
                ))}
            </Slider>
        </Box>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
            <IconButton>
                <ArrowForwardIcon fontSize="large" />
            </IconButton>
        </div>
    );
};
const PrevArrow = ({ onClick }) => {
    return (
        <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
            <IconButton>
                <ArrowBackIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

export default Carousel;
