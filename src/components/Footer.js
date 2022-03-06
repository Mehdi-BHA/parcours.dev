import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FACEBOOK, GITHUB, INSTAGRAM, TWITTER } from "../constants/extrnalLinks";

const Footer = () => {
    return (
        <Container maxWidth="lg" sx={{ mt:4,px: 2 }}>
            <Divider />
            <Container
                maxWidth="md"
                sx={{ py: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
                <Typography variant="body1">Copyright © 2022 parcours.dev.</Typography>
                <Box sx={{ display: "flex" }}>
                    <IconButton component="a" href={FACEBOOK} target="_blank">
                        <FacebookIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                    <IconButton component="a" href={INSTAGRAM} target="_blank">
                        <InstagramIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                    <IconButton component="a" href={TWITTER} target="_blank">
                        <TwitterIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                    <IconButton component="a" href={GITHUB} target="_blank">
                        <GitHubIcon sx={{ fontSize: "30px" }} />
                    </IconButton>
                </Box>
            </Container>
        </Container>
    );
};

export default Footer;
