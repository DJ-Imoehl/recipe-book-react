import React from "react";
import { AppBar, Box, List, Toolbar, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./HeadingComponent.css"

const navItems = ["Home", "About", "Recipes", "Search"]

const HeadingComponent = () => {

    return (<Box className="grid-cols-8 heading">
        <h2 className="title-text">DJ's Recipes</h2>
        <AppBar className="app-bar" position="static" component="nav">
            <Toolbar gutters="40px">
                <Button color="secondary">Home</Button>
                <Button color="secondary">About</Button>
                <Button color="secondary">Recipes</Button>
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