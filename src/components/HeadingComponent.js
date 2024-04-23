import React from "react";
import { AppBar, Box, Toolbar, MenuItem, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./HeadingComponent.css"
import { Link } from "react-router-dom";

const navItems = {"Home": "/", "About": "/about", "Recipes": "/recipes", "Categories": "/categories"}

const HeadingComponent = () => {

    console.log(Object.keys(navItems));
    console.log(navItems["Home"]);

    return (<Box className="grid-cols-8 heading">
        <h2 className="title-text">DJ's Recipes</h2>
        <AppBar className="app-bar" position="static" component="nav">
            <Toolbar gutters="40px">
                {Object.keys(navItems).map((key) => (
                    <MenuItem><Link to={navItems[key]} color="secondary">{key}</Link></MenuItem>
                ))}
                <div>
                <TextField
                    id="search-field"
                    placeholder="Search..."
                    color="secondary"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="secondary" />
                        </InputAdornment>
                    ),
                    }}
                    sx={{color: "secondary", margin: "10px", marginRight: "0"}}
                    variant="outlined"
                    focused
                />
                </div>
            </Toolbar>
        </AppBar>
    </Box>)
}

export default HeadingComponent;