'use client'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Button, Menu } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const NavbarItem = (item) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleClick = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    if (item.item.childrens) {
        return (
            <React.Fragment className='text-white'>
                <Link
                    className="flex items-center"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClick}
                    href={item.item.pathname}>
                    <Button className='md:block text-white'>{item.item.route}</Button>
                    {anchorElNav!=null ? <ExpandLess className='text-white' /> : <ExpandMore className='text-white'/>}
                </Link>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                >
                    {item?.item?.childrens?.map((subItem, subIndex) => (
                        <Link href={subItem.pathname} key={subIndex} onClick={handleCloseNavMenu}>
                            <Button className='block text-white'>{subItem.route}</Button>
                        </Link>
                    ))}
                </Menu>
                
            </React.Fragment>
        );
    }
    else {
        return (
            <div>
                <Link href={item.item.pathname}>
                    <Button className='text-white'>{item.item.route}</Button>
                </Link>
            </div>
        );
    }
};

export default NavbarItem;