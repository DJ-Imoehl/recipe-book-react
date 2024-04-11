import React from "react";
import { AppBar, Box, List, Toolbar, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
const navItems = ["Home", "About", "Recipes", "Search"]

const HeadingComponent = () => {

    return (<Box className="grid-cols-8">
        <h2>DJ's Recipes</h2>
        <AppBar position="static" component="nav">
            <Toolbar>
                <Button style={{color: "black"}}>Home</Button>
                <Button>About</Button>
                <Button>Recipes</Button>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    </Box>)
}

export default HeadingComponent;