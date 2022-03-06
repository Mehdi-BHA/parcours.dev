import React from "react";
import {
    Box,
    Button as MuiButton,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    Avatar,
    MenuList,
    MenuItem,
    Tooltip,
    ListItemIcon,
    FormControlLabel,
    Switch
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "../Button";
import { CREATE_GUIDE, EXPLORE_GUIDES, HOME, SIGN_IN, SIGN_UP } from "../../constants/routes";
import { useAuth } from "../../contexts/AuthContext";
import { logout } from "../../services/auth.services";
import useOpen from "../../hooks/useOpen";

const Menu = (props) => {
    const { user } = useAuth();
    return (
        <Box {...props}>
            <Button color="inherit" to={HOME}>
                Home
            </Button>
            <Button color="inherit" to={EXPLORE_GUIDES}>Explore guides</Button>
            <Button color="inherit" sx={{ mr: 1 }}>
                Contribute
            </Button>
            {user ? (
                <UserMenu />
            ) : (
                <>
                    <Button to={SIGN_IN} variant="outlined" sx={{ mr: 1 }}>
                        Sign in
                    </Button>
                    <Button to={SIGN_UP} variant="contained">
                        Sign up
                    </Button>
                </>
            )}
        </Box>
    );
};

const UserMenu = () => {
    const { user } = useAuth()
    const [isOpen, closeMenu, openMenu, toggleMenu] = useOpen();
    const anchorRef = React.useRef(null);

    const handleLogout = () => {
        closeMenu();
        logout();
    };

    return (
        <>
            <Button to={CREATE_GUIDE} variant="contained">
                CREATE GUIDE
            </Button>
            <Tooltip title="Account">
                <MuiButton ref={anchorRef} onClick={toggleMenu} color="inherit" size="small" sx={{ ml: 2 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>{user.displayName[0]}</Avatar>
                    <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                </MuiButton>
            </Tooltip>
            <Popper
                open={isOpen}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-end"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: "right top",
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={closeMenu}>
                                <MenuList autoFocusItem={isOpen}>
                                    <MenuItem >
                                        <DarkModeSwitcher />
                                    </MenuItem>
                                    <MenuItem onClick={closeMenu}>
                                        <ListItemIcon>
                                            <SettingsIcon fontSize="small" />
                                        </ListItemIcon>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ListItemIcon>
                                            <LogoutIcon fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

const DarkModeSwitcher = () => {
    return(
        <FormControlLabel control={<Switch defaultChecked />} label="Dark mode" />
    )
}

export default Menu;
