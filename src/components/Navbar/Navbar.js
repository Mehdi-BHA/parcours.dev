import React from "react";
import { AppBar, Box, Toolbar, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Menu from "./Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "./MobileDrawer";
import useScrolled from "../../hooks/useScrolled";
import useOpen from "../../hooks/useOpen";
import { hexToRgba } from "../../utils/colors";

const Navbar = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery("(max-width:900px)");
    const scrolled = useScrolled();
    const [isOpen, close, open,toggle] = useOpen();

    return (
        <>
            <AppBar
                position="sticky"
                elevation={scrolled ? 8 : 0}
                sx={{
                    padding: "5px",
                    transition: ".2s",
                    backdropFilter: "blur(5px)",
                    background: scrolled ? hexToRgba(theme.palette.background.default,0.8)  : "transparent",
                }}
            >
                <Toolbar sx={{ width: "100%", maxWidth: "lg", margin: "0 auto" }}>
                    <Box sx={{ flexGrow: 1 }}>guidely.me</Box>
                    {isMobile ? (
                        <IconButton onClick={open}>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    ) : (
                        <Menu sx={{ mr: 5 }} />
                    )}
                </Toolbar>
            </AppBar>
            {isMobile && <MobileDrawer open={isOpen} onClose={close} />}
        </>
    );
};

export default Navbar;
