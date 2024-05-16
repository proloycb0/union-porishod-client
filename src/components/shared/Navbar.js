"use client"


import { AppBar, Box, Container, IconButton, List, Menu, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import logo from '@/assets/logo.png';
import Header from "./Header";
import NavbarItem from "./NavbarItem";
import navItems from './data.json'
import { useState } from "react";


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Header />
            <AppBar position="sticky" sx={{ backgroundColor: { xs: 'white', lg: 'rgb(0,72,132)' } }} className=" text-black">
                <Container maxWidth="lg">
                    <Toolbar disableGutters className="justify-between">
                        <Box className="flex items-center mt-5 xl:hidden">
                            <Image src={logo} width={71} height={71} alt='logo' className="mb-1 mr-12 " />
                            <Typography variant="h4" component="div" sx={{ fontFamily: 'bold', display: { xs: 'none', sm: 'flex' } }}>
                                ৮ নং ডেমো ইউনিয়ন পরিষদ
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none' }}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon className="text-blue-500 w-8 h-8" />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}

                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', lg: 'none' }
                                }}
                            >
                                {navItems.map((item, index) => 
                                    <NavbarItem key={index} item={item} />)}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex' } }}>


                            <List className="flex items-center gap-2">
                                {navItems?.map((item, index) => 
                                    <NavbarItem key={index} item={item} />)}
                            </List>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;