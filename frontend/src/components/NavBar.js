import * as React from "react";
import { useState, useEffect, useContext } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import logo from "../assets/sail_logo_transparent.png";
import Box from "@mui/material/Box";
import "../fonts.css";
import { useMediaQuery } from '@mui/material';
import DrawerBackground from "../assets/drawer_background.jpeg";
import AuthContext, { useAuth } from "./AuthContext";

const navItems = ["classes", "login"];
const navItemsWhenLoggedIn = ["classes", "profile", "logout"];


const AnimatedButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: "white",
  fontFamily: "JetBrainsMono",
  border: 'none',
  outline: 'none',
  fontSize: "200%",
  transition: theme.transitions.create(['transform', 'color'], {
    duration: theme.transitions.duration.shortest,
  }),
  '&:hover': {
    transform: 'scale(1.05)',
    color: theme.palette.secondary.main,
  },
}));

const HomeLogoButton = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const viewSize = isSmallScreen ? '10vw' : '60px';

  return (
    <a href="/">
      <img src={logo} alt="SAIL 2024 Logo" style={{ width: viewSize, maxHeight: viewSize }} />
    </a>
  );
};

function NavBar() {

  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: "0", backgroundColor: "transparent", marginTop: "1.5%" }}>
      <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'flex-end', md: 'space-between' }, alignItems: 'center' }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'flex-end', md: 'flex-start' },
              flexBasis: { xs: '100%', md: 'auto' },
            }}
          >
            <HomeLogoButton />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent: 'flex-end', width: '100%' }}>
            {isLoggedIn ? (
              navItemsWhenLoggedIn.map((item, index) => (
                <AnimatedButton
                  key={index}
                  onClick={(e) => { window.location.href = `/${item}` }}
                >
                  <span>
                    {item}
                  </span>
                </AnimatedButton>
              ))
            ) : (
              navItems.map((item, index) => (
                <AnimatedButton
                  key={index}
                  onClick={(e) => { window.location.href = `/${item}` }}
                >
                  <span>
                    {item}
                  </span>
                </AnimatedButton>
              ))
            )}
          </Box>
        </Box>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '200px',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              backgroundImage: `url(${DrawerBackground})`,
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }
          }}
        >
          <List>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                button
                onClick={() => { window.location.href = `/${item}` }}
                sx={{ fontFamily: 'JetBrainsMono' }} // Add this line to set the font
              >
                <ListItemText primary={item} primaryTypographyProps={{ style: { color: 'white' } }} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
