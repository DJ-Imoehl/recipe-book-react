import React from "react";
import { AppBar, Box, List, Toolbar, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./HeadingComponent.css"

const navItems = ["Home", "About", "Recipes", "Search"]

const HeadingComponent = () => {

    return (<Box className="grid-cols-8 heading">
        <h2 className="title-text">DJ's Recipes</h2>
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