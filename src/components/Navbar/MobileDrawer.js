import React from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const MobileDrawer = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary="Accueil" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Tous les parcours" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Contribuer" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="test" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default MobileDrawer;
